import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';

import Site from './page/Site';
import Login from './page/Login';
import Dashboard from './page/Dashboard';
import TimetableLectures from './page/Timetable/TimetableLectures';
import TimetableTutorials from './page/Timetable/TimetableTutorials';
import TimetableMegaTutorials from './page/Timetable/TimetableMegaTutorials';
import TimetableHelpSessions from './page/Timetable/TimetableHelpSessions';
import CourseOutline from './page/CourseOutline';
import ContentLectures from './page/Content/ContentLectures';
import ContentTutorials from './page/Content/ContentTutorials';
import ContentPractice from './page/Content/ContentPractice';
import GettingStarted from './page/GettingStarted';
import ProjectBase from './page/Project/ProjectBase';
import ProjectSpec from './page/Project/ProjectSpec';
import ProjectRuns from './page/Project/ProjectRuns';
import LogoutAction from './component/LogoutAction';


import { apiCall } from './util/api';
import { Context, useContext } from './context';

const Router = () => {
  const { getters, setters } = useContext(Context);
  React.useEffect(() => {
    apiCall('validterms', {}, 'GET')
      .then(terms => {
        setters.setValidTerms(terms)
      });
  }, []);
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<LogoutAction />} />
      <Route path="/" element={<Site />} />
      <Route path="/:term" element={<Site />}>
        <Route index element={<Dashboard />} />
        <Route path="timetable/lectures" element={<TimetableLectures />} />
        <Route path="timetable/tute-labs" element={<TimetableTutorials />} />
        <Route path="timetable/mega-tutes" element={<TimetableMegaTutorials />} />
        <Route path="timetable/help-sessions" element={<TimetableHelpSessions />} />
        <Route path="content/lectures" element={<ContentLectures />} />
        <Route path="content/tutorials" element={<ContentTutorials />} />
        <Route path="content/project" element={<ProjectBase />}>
          <Route path="spec" element={<ProjectSpec />} />
          <Route path="runs" element={<ProjectRuns />} />
        </Route>
        <Route path="content/practice" element={<ContentPractice />} />
        <Route path="course-outline" element={<CourseOutline />} />
        <Route path="getting-started" element={<GettingStarted />} />
      </Route>
    </Routes>
  );
}

export default Router;
