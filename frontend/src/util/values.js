export const tutorialUrl = (istutor, term, key) => istutor
    ? `https://nw-syd-gitlab.cseunsw.tech/COMP1531/${term}/STAFF/repos/exercises/-/tree/master/${key}`
    : `/~cs1531/redirect/?path=COMP1531/${term}/students/_/exercises/-/tree/master/${key}`;