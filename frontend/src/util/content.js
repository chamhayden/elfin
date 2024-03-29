import { apiCall } from './api';

import { DEV, runSchema, contentSchema } from '../config';

/* Genius or madness */
const joinContent = (content, schema) => {
  const group = content.group; // HACK
  const forum = content.forum; // HACK
  const presentations = content.presentations; // HACK
  content.group = undefined;
  content.forum = undefined;
  content.presentations = undefined;
  const newContent = {};
  for (const table in content) {
    newContent[table] = [];
    for (const recordKey in content[table]) {
      newContent[table].push(content[table][recordKey]);
    }
    for (const row of newContent[table]) {
      for (const cellKey in row) {
        const joinInfo = schema[table]['joins'][cellKey];
        if (joinInfo) {
          const [otherTable, atomic] = joinInfo;
          row[cellKey] = ((thisCell, otherTable, atomic) => {
            return () => {
              if (atomic) {
                return content[otherTable][thisCell[0]];
              } else {
                return thisCell.map(cell => content[otherTable][cell]);
              }
            }
          })(row[cellKey], otherTable, atomic)
        }
      }
    }
  }
  return {
    ...newContent,
    group: group,
    forum: forum,
    presentations: presentations,
  };
};

export const loadContent = async (term, loggedIn = false) => {
  return apiCall('content', { term, })
    .then(rawContent => joinContent(rawContent, contentSchema))
    .catch(err => { console.log(err); });
};

export const getYoutubeCodeFromUrl = code => code.slice(code.length - 11);
