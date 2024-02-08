let config = {};
config.DEV = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development');
config.BASE_URL = config.DEV ? 'http://localhost:11531' : 'https://cgi.cse.unsw.edu.au/~cs1531';
config.BASE_NAME = config.DEV ? '/~cs1531/' : '/~cs1531/';

config.terms = config.DEV ? ['sample', '24T1'] : ['sample', '24T1'];
config.DEFAULT_TERM = config.DEV ? '24T1' : '24T1';

config.runSchema = {
  runs: {
    joins: {},
  },
};

config.contentSchema = {
  timetable_lectures: {
    joins: {},
  },
  timetable_tutelab: {
    joins: {
      staff: ['staff', true],
    }
  },
  timetable_megatute: {
    joins: {},
  },
  timetable_helpsessions: {
    joins: {},
  },
  content_lectures: {
    joins: {},
  },
  staff: {
    joins: {},
  },
};
  
module.exports = config;
