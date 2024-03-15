const Airtable = require('airtable');

const config = require('./config');

const setPresentationTime = (term, record, group) => {
  const basename = config.TERMS[term].AIRTABLE_BASE;
  const base = new Airtable({ apiKey: config.AIRTABLE_PERSONAL_TOKEN }).base(basename);
  return new Promise((resolve, reject) => {
    base('final_presentation').find(record).then(record => {
      if (group && record.fields.group) {
        reject('A group has already selected this time');
        return;
      }
      base('final_presentation').update([
        {
          id: record.id,
          fields: {
            group: group,
          }
        }
      ]).then(resolve).catch(console.log);
    });
  });
};

const addRun = (term, zid, group, iteration, commit, safeMrId) => {
  const basename = config.TERMS[term].AIRTABLE_BASE;
  const base = new Airtable({ apiKey: config.AIRTABLE_PERSONAL_TOKEN }).base(basename);
  return new Promise((resolve, reject) => {
    base('runs').create({
      zid,
      commithash: commit,
      mrId: safeMrId,
      group: group,
      status: 'pending',
      iter: iteration,
      type: 'rerun_request',
    }).then(resolve).catch(console.log);
  });
};

const cancelRun = (term, zid, record) => {
  const basename = config.TERMS[term].AIRTABLE_BASE;
  const base = new Airtable({ apiKey: config.AIRTABLE_PERSONAL_TOKEN }).base(basename);
  return new Promise((resolve, reject) => {
    base('runs').find(record).then(record => {
      if (record.fields.zid !== zid) {
        reject('You can only cancel reqeuests you made');
      }
      if (record.fields.status !== 'pending') {
        reject('You can only cancel requests in pending state');
      }
      base('runs').update([
        {
          id: record.id,
          fields: {
            status: 'cancelled',
          }
        }
      ]).then(resolve).catch(console.log);
    });
  });
};

const generateContent = (term, schema) => {
  const basename = config.TERMS[term].AIRTABLE_BASE;
  const base = new Airtable({ apiKey: config.AIRTABLE_PERSONAL_TOKEN }).base(basename);
  return new Promise((resolve, reject) => {
    const obj = {};
    Promise.all(schema.map(table => {
      return new Promise((resolve, reject) => {
        obj[table] = {};
        base(table).select({
            maxRecords: 10000000,
            view: 'API',
        }).eachPage((records, fetchNextPage) => {
          records.forEach(record => {
            obj[table][record.id] = {};
            Object.keys(record.fields).forEach(field => {
              obj[table][record.id][field] = record.get(field);
            });
          });
          fetchNextPage();
        }, function done(err) {
            if (!err) { resolve() }
            if (err) { reject(err); return; }
        });
      });
    }))
    .then(() => {
      resolve(obj);
    }).catch((err) => {
      console.log('Error building', err);
    });
  });
};

module.exports = {
  generateContent,
  addRun,
  cancelRun,
  setPresentationTime,
};