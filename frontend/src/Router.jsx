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
import TutelabBase from './page/Content/Tutelabs/TutelabBase';
import TutelabMarking from './page/Content/Tutelabs/TutelabMarking';
import TutelabContent from './page/Content/Tutelabs/TutelabContent';
import TutelabSolutions from './page/Content/Tutelabs/TutelabSolutions';
import ContentPractice from './page/Content/ContentPractice';
import GettingStartedBase from './page/GettingStarted/GettingStartedBase';
import GettingStartedCoding from './page/GettingStarted/GettingStartedCoding';
import GettingStartedCommunication from './page/GettingStarted/GettingStartedCommunication';
import GettingStartedCoursework from './page/GettingStarted/GettingStartedCoursework';
import GettingStartedOther from './page/GettingStarted/GettingStartedOther';
import ProjectBase from './page/Project/ProjectBase';
import ProjectSpec from './page/Project/ProjectSpec';
import ProjectRuns from './page/Project/ProjectRuns';
import ProjectFinalPresentation from './page/Project/ProjectFinalPresentation';
import Staff from './page/Staff';
import DueDateAdjustments from './page/DueDateAdjustments';
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
        <Route path="content/tutelabs" element={<TutelabBase />}>
          <Route path="content" element={<TutelabContent />} />
          <Route path="solutions" element={<TutelabSolutions />} />
          <Route path="marking" element={<TutelabMarking />} />
        </Route>
        <Route path="content/project" element={<ProjectBase />}>
          <Route path="spec" element={<ProjectSpec />} />
          <Route path="runs" element={<ProjectRuns />} />
          <Route path="final-presentation" element={<ProjectFinalPresentation />} />
        </Route>
        <Route path="content/practice" element={<ContentPractice />} />
        <Route path="course-outline" element={<CourseOutline />} />
        <Route path="getting-started" element={<GettingStartedBase />}>
          <Route path="coding" element={<GettingStartedCoding />} />
          <Route path="coursework" element={<GettingStartedCoursework />} />
          <Route path="communication" element={<GettingStartedCommunication />} />
          <Route path="other" element={<GettingStartedOther />} />
        </Route>
        <Route path="due-date-adjustments" element={<DueDateAdjustments />} />
        <Route path="staff" element={<Staff />} />
      </Route>
    </Routes>
  );
}

export default Router;
