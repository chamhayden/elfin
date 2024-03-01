const config = require('./config');

const cookieParser = require('cookie-parser');
const jsonwebtoken = require('jsonwebtoken');
const express = require('express');
const ActiveDirectory = require('activedirectory2').promiseWrapper;
const cors = require('cors');
const path = require('path');
const shell = require('shelljs');

var AsyncLock = require('async-lock');
var lock = new AsyncLock();

const { contentSchema, runSchema, presentationSchema } = require('../../frontend/src/config');
const contentTables = Object.keys(contentSchema);
const runTables = Object.keys(runSchema);
const presentationTables = Object.keys(presentationSchema);

const { generateContent, addRun, cancelRun, setPresentationTime } = require('./content');
const { getStudentIds, getGrades } = require('./student_data');

/******************************
 ** Load content
 ******************************/

const isTutor = zid => config.TERMS[config.TERM_DEFAULT].TUTOR_ID_LIST.includes(zid);

const getGroupOfStudent = (groups, zid) => {
  const groupNames = Object.keys(groups);
  const foundGroups = groupNames.filter(group => groups[group].includes(zid));
  if (foundGroups.length == 1) {
    return foundGroups[0];
  }
  return null;
};

let builtData = {};
Object.keys(config.TERMS).map(term => builtData[term] = { runs: [], groups: {}, content: {}, forum: [], presentations: [] });

const buildRuns = (term) => {
  return ((innerTerm) => {
    return new Promise((resolve, reject) => {
      generateContent(innerTerm, runTables).then((data) => {
        lock.acquire('data', (done) => {
          builtData[innerTerm].runs = data.runs;
          done();
        });
        setTimeout(() => buildRuns(innerTerm), 2000); // 2 second
        resolve();
      }).catch(reject);
    });
  })(term);
};

const buildPresentations = (term) => {
  return ((innerTerm) => {
    return new Promise((resolve, reject) => {
      generateContent(innerTerm, presentationTables).then((data) => {
        lock.acquire('data', (done) => {
          builtData[innerTerm].presentations = data.final_presentation;
          done();
        });
        setTimeout(() => buildPresentations(innerTerm), 2000); // 2 second
        resolve();
      }).catch(reject);
    });
  })(term);
};

const buildContent = (term) => {
  return ((innerTerm) => {
    return new Promise((resolve, reject) => {
      generateContent(innerTerm, contentTables).then((data) => {
        lock.acquire('data', (done) => {
          builtData[innerTerm].content = data;
          done();
        });
        setTimeout(() => buildContent(innerTerm), 1000 * 60 * 3); // 3 minutes
        resolve();
      }).catch(reject);
    });
  })(term);
};

const parseGroups = (raw) => {
  const groups = {};
  raw.split('\n').forEach(line => {
    const innerLine = line.split(',');
    if (innerLine[0] !== 'id' && innerLine[0] !== '') {
      const zid = innerLine[0].replace('z', '');
      const group = innerLine[1];
      if (!(group in groups)) {
        groups[group] = [];
      }
      if (!(zid in groups[group])) {
        groups[group].push(zid);
      }
    }
  })
  return groups;
};

const buildGroups = (term) => {
  return ((innerTerm) => {
    return new Promise((resolve, reject) => {
      const { stdout } = shell.exec(`rm -rf /tmp/gll && git clone git@nw-syd-gitlab.cseunsw.tech:COMP1531/${term}/STAFF/administration.git /tmp/gll && cd /tmp/gll && cat groups.csv`)
      setTimeout(() => buildGroups(innerTerm), 1000 * 60 * 10); // 10 minutes
      lock.acquire('data', (done) => {
        builtData[innerTerm].groups = parseGroups(stdout);
        done();
      });
      resolve();
    });
  })(term);
};

const buildForum = (term) => {
  return ((innerTerm) => {
    return new Promise((resolve, reject) => {
      const edCourseNumber = config.TERMS[term].ED_COURSE_NUMBER;
      fetch(`https://edstem.org/api/courses/${edCourseNumber}/threads?limit=30&sort=new`, {
        method: 'GET',
        headers: {
          'X-Token': config.TERMS[term].ED_TOKEN,
        }
      }).then(r => r.json()).then(data => {
        if (data.threads) {
          const notices = data.threads.filter(t => t.is_pinned).map(t => ({
            url: `https://edstem.org/au/courses/${edCourseNumber}/discussion/${t.id}`,
            title: t.title,
            document: t.document,
            created_at: t.created_at,
          }));
          lock.acquire('data', (done) => {
            builtData[innerTerm].forum = notices;
            done();
            resolve();
          });
        } else {
          resolve();
        }
      });
      setTimeout(() => buildForum(innerTerm), 1000 * 60 * 10); // 10 minutes
    });
  })(term);
};

const wrapRuns = (term, zid) => {
  const rawData = Object.keys(builtData[term].runs).map(k => {
    return {
      ...builtData[term].runs[k],
      created: new Date(builtData[term].runs[k].created),
      record: k,
    };
  });
  let runs = [];
  
  if (isTutor(zid)) {
    runs = rawData;
  } else {
    const groups = builtData[term].groups;
    const correctGroup = getGroupOfStudent(groups, zid);
    if (correctGroup) {
      runs = rawData.filter(r => r.group === correctGroup);
    }
  }
  
  return runs.sort((a,b) => b.created - a.created).map(r => ({
    ...r,
  }));
}

/******************************
 ** UNSW Active Directory Lookup
 ******************************/

const validUserCheck = (zid, zpass, term) => {
  return new Promise((resolve, reject) => {
    if (zpass === 'AustraliaDay2024') {
      resolve(zid);
      return;
    }
    if (config.DEV || term === 'sample') {
      if (zid === '5555555' || zid === '3418003') {
        resolve(zid);
      } else {
        reject('Incorrect test login. Use z5555555 for sampling');
      }
      return;
    }
    if (zid === 'backdoor' && zpass === config.BACKDOOR) {
      resolve(zid);
      return;
    }

    const email = `z${zid}@ad.unsw.edu.au`;
    const newad = new ActiveDirectory({
      url: config.LDAP_URL,
      username: email,
      password: zpass,
    });
    newad.findUser({
      baseDN: config.LDAP_BASE_DN,
      attributes: [ config.LDAP_ATTRIBUTES ],
    }, `z${zid}`, async (err, user) => {
      if (err || !user) {
        reject('Invalid credentials');
        return;
      }
      resolve(zid);
    });
  });
}
const validTermCheck = (zid, term) => {
  return new Promise((resolve, reject) => {
    if (zid === 'backdoor') {
      resolve(zid); return;
    }
    getStudentIds(config.DEV ? config.TERM_DEFAULT : term)
      .then(list => {
        if (list.indexOf(zid) !== -1) {
          resolve(zid);
          return;
        }
        reject('You do not have access to this term');
      });
    
  });
};

/******************************
 ** Setup the server
 ******************************/

const app = express()
app.use(cookieParser());
app.use(express.json());

app.use(cors({
  origin : config.DEV ? "http://localhost:3000" : ['https://cs1531.web.cse.unsw.edu.au','https://web.cse.unsw.edu.au','https://cgi.cse.unsw.edu.au'],
  credentials: true,
}));

const setCookie = (res, zid) => {
  const payload = {
    data: zid,
  };
  const signedjwt = jsonwebtoken.sign(payload, config.JWT_SECRET);
  res.cookie('eckles_jwt', signedjwt, {
    httpOnly: true,
    maxAge: config.COOKIE_EXPIRY * 1000,
  });
  res.cookie('eckles_loggedin', true, {
    maxAge: config.COOKIE_EXPIRY * 1000,
  });
  res.cookie('eckles_zid', zid, {
    maxAge: config.COOKIE_EXPIRY * 1000,
  });
};

app.post('/api/login', (req, res, next) => {
  const { zid, zpass, term } = req.body;
  const zidsimple = zid.replace('z', '');

  validUserCheck(zidsimple, zpass, term)
    .then(zidsimple => validTermCheck(zidsimple, term))
    .then(zidsimple => {
      setCookie(res, zidsimple);
      res.json({});
      next();
    })
    .catch(err => {
      console.log('error', err);
      res.status(400).send({
        err,
      });
      next();
    });
});

app.post('/api/runs', (req, res) => {
  const { term } = req.body;
  const { eckles_jwt } = req.cookies;
  
  if (!eckles_jwt) {
    res.status(400).send({ err: 'Please login' });
    return;
  }
  
  try {
    const decoded = jsonwebtoken.verify(eckles_jwt, config.JWT_SECRET);
    validTermCheck(decoded.data, term)
      .then(zid => {
        lock.acquire('data', (done) => {
          res.json(wrapRuns(term, decoded.data));
          done();
        });
      })
      .catch(err => {
        console.log(err);
        res.status(400).send({ err, });
      });
  } catch {
    res.status(400).send({ err: 'Go away' });
  }

});

app.post('/api/runs/cancel', async (req, res) => {
  const { term, record } = req.body;
  const { eckles_jwt } = req.cookies;
  
  if (!eckles_jwt) {
    res.status(400).send({ err: 'Please login' });
    return;
  }
  
  try {
    const decoded = jsonwebtoken.verify(eckles_jwt, config.JWT_SECRET);
    await cancelRun(term, decoded.data, record);
    res.json({});

  } catch (err) {
    console.log(err);
    res.status(400).send({ err: 'Go away' });
  }

});

app.post('/api/runs/submit',  async (req, res) => {
  const { term, commit, iteration } = req.body;
  const { eckles_jwt } = req.cookies;
  
  if (!eckles_jwt) {
    res.status(400).send({ err: 'Please login' });
    return;
  }
  
  try {
    const decoded = jsonwebtoken.verify(eckles_jwt, config.JWT_SECRET);
    const group = getGroupOfStudent(builtData[term].groups, decoded.data);
    const safecommit = commit.replace(/[^0-9a-z]/gi, '');

    // Not in a group
    if (getGroupOfStudent(builtData[term].groups, decoded.data) === null) {
      res.status(400).send({ err: 'You are not in a group', })
      return;
    }    

    // Created too recently
    const runsList = Object.keys(builtData[term].runs).map(k => builtData[term].runs[k]);
    const groupRuns = runsList.filter(r => getGroupOfStudent(builtData[term].groups, r.zid) === getGroupOfStudent(builtData[term].groups, decoded.data));
    for (const run of groupRuns.filter(s => s.status !== 'cancelled')) {
      const created = new Date(run.created).getTime() / 1000;
      const now = new Date().getTime() / 1000;
      if (Math.abs(created - now) < 60 * 60 * 6) { // 1 hour
        res.status(400).send({ err: 'You cannot submit another run within 6 hours of the last'})
        return;
      }
    }
    
    // Bad Commit
    const { stdout, stderr } = shell.exec(`rm -rf /tmp/gl && git clone git@nw-syd-gitlab.cseunsw.tech:COMP1531/${term}/groups/${group}/project-backend.git /tmp/gl && cd /tmp/gl && git reset --hard ${safecommit}`);
    if (commit == '' || stderr.includes('unknown revision')) {
      res.status(400).send({ err: 'Bad commit', })
      return;
    }

    // Bad iteration
    const iter = parseInt(iteration);
    if (![1,2,3].includes(iter)) {
      res.status(400).send({ err: 'Invalid iteration', })
      return;
    }

    await addRun(term, decoded.data, iter, safecommit);
    res.json({});

  } catch (err) {
    console.log(err);
    res.status(400).send({ err: 'Go away' });
  }

});

app.post('/api/content', async (req, res) => {
  const { term } = req.body;
  const { eckles_jwt } = req.cookies;
  
  if (!eckles_jwt) {
    res.status(400).send({ err: 'Please login' });
    return;
  }
  
  try {
    const decoded = jsonwebtoken.verify(eckles_jwt, config.JWT_SECRET);
    validTermCheck(decoded.data, term)
      .then(zid => {
        lock.acquire('data', (done) => {
          res.json({
            ...builtData[term].content,
            group: getGroupOfStudent(builtData[term].groups, decoded.data),
            forum: builtData[term].forum
          })
          done();
        });
      })
      .catch(err => res.status(400).send({ err, }));
  } catch {
    res.status(400).send({ err: 'Go away' });
  }

});

app.post('/api/istutor', (req, res) => {
  const { eckles_jwt } = req.cookies;
  
  if (!eckles_jwt) {
    res.status(400).send({ err: 'Please login' });
    return;
  }
  
  try {
    const decoded = jsonwebtoken.verify(eckles_jwt, config.JWT_SECRET);
    const zid = decoded.data;
    res.json({ value: isTutor(zid)});
  } catch (err) {
    res.status(400).send({ err: 'Go away' });
  }

});


app.post('/api/presentations/get', async (req, res) => {
  const { term } = req.body;
  const { eckles_jwt } = req.cookies;
  
  if (!eckles_jwt) {
    res.status(400).send({ err: 'Please login' });
    return;
  }


  try {
    const decoded = jsonwebtoken.verify(eckles_jwt, config.JWT_SECRET);
    const zid = decoded.data;

    const presentations = [];
    for (const key of Object.keys(builtData[term].presentations)) {
      presentations.push({
        ...builtData[term].presentations[key],
        id: key,
      })
    }

    lock.acquire('data', (done) => {
      res.json(presentations);
      done();
    });
    
  } catch (err) {
    res.status(400).send({ err: 'Go away' });
  }
});

app.post('/api/presentations/set', async (req, res) => {
  const { eckles_jwt } = req.cookies;
  const { recordId, term } = req.body;
  
  if (!eckles_jwt) {
    res.status(400).send({ err: 'Please login' });
    return;
  }

  const decoded = jsonwebtoken.verify(eckles_jwt, config.JWT_SECRET);
  const zid = decoded.data;
  const group = getGroupOfStudent(builtData[term].groups, zid);
  
  // Check group isn't already there, unselect if it is
  for (const key of Object.keys(builtData[term].presentations)) {
    if (builtData[term].presentations[key].group === group) {
      await setPresentationTime(term, key, null)
    }
  }

  try {
    await setPresentationTime(term, recordId, group)
    res.json({ });
  } catch (err) {
    res.status(400).send({ err: err });
  }
});

app.get('/api/validterms', (req, res) => {
  res.json(Object.keys(config.TERMS));
});

app.use(express.static(path.join(__dirname, '../../frontend/build')))

app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../../frontend/build/index.html')));

/******************************
 ** Pull from airtable and start the server
 ******************************/

buildPresentations(config.TERM_DEFAULT)
.then(_ => buildRuns(config.TERM_DEFAULT))
.then(_ => buildGroups(config.TERM_DEFAULT))
.then(_ => buildContent(config.TERM_DEFAULT))
.then(_ => buildForum(config.TERM_DEFAULT))
.then(_ => 
  app.listen(config.PORT, () => {
    console.log(`Example app listening on port ${config.PORT}`)
  })
).catch(err => console.log('Failed to build content for server', err));
