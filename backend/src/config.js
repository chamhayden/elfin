const fs = require('fs');
const path = require('path');

const config = {
  DEV: true,
  JWT_SECRET: 'TESTING2',
  PORT: 11531,
  COOKIE_EXPIRY: 60 * 60 * 24 * 7,
  AIRTABLE_PERSONAL_TOKEN: 'pats2GNPo6FGIxqQA.5d48c18fc83c2b5c40a9591085aad27b92b4b8fc27505dfd1332b0fa9f9e1c3b',
  TERMS: {
    '24T1': {
      STUDENT_LIST_SH: 'echo "5555555\n3418003"',
      AIRTABLE_BASE: 'appVi93guNJQJdPaa',
      TUTOR_ID_LIST: ["3418003"],
      AUDIT_ID_LIST: []
    },
  },
  TERM_DEFAULT: '24T1',
  BACKDOOR: "12345",
};

const filepath = path.resolve(__dirname, './env.json');

try {
  if (fs.existsSync(filepath)) {
    const data = JSON.parse(fs.readFileSync(filepath, {encoding:'utf8', flag:'r'}));
    for (key in data) {
      config[key] = data[key];
    }
  }
} catch(err) { console.log(err); }

module.exports = config;
