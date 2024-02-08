const Airtable = require('airtable');

const config = require('./config');

const addRun = (term, zid, iteration, commit) => {
  const basename = config.TERMS[term].AIRTABLE_BASE;
  const base = new Airtable({ apiKey: config.AIRTABLE_PERSONAL_TOKEN }).base(basename);
  return new Promise((resolve, reject) => {
    base('runs').create({
      zid,
      commithash: commit,
      status: 'pending',
      iter: iteration,
      type: 'rerun_request',
    });
  });
};

const cancelRun = (term, zid, record) => {
  const basename = config.TERMS[term].AIRTABLE_BASE;
  const base = new Airtable({ apiKey: config.AIRTABLE_PERSONAL_TOKEN }).base(basename);
  return new Promise((resolve, reject) => {
    base('runs').find(record).then(record => {
      if (record.fields.zid !== zid) {
        throw new Error('You can only cancel reqeuests you made');
      }
      if (record.fields.status !== 'pending') {
        throw new Error('You can only cancel requests in pending state');
      }
      base('runs').update([
        {
          id: record.id,
          fields: {
            status: 'cancelled',
          }
        }
      ]);
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
        }).eachPage(records => {
          records.forEach(record => {
            obj[table][record.id] = {};
            Object.keys(record.fields).forEach(field => {
              obj[table][record.id][field] = record.get(field);
            });
          });
          resolve();
        }, function done(err) {
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
};