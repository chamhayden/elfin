import React from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import TheatersIcon from '@mui/icons-material/Theaters';
import SchoolIcon from '@mui/icons-material/School';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import { Outlet } from 'react-router-dom';

import SubNavWrapper from '../../component/SubNavWrapper';
import makePage from '../../component/makePage';

const GettingStartedCoursework = ({ }) => {
  return (
    <>
      <ul>
        <li><strong>Youtube</strong><strong></strong>
        <ul>
          <li>Lectures videos are recorded and uploaded to Youtube and can be found under Coursework -&gt; Lectures.</li>
          <li>Lectures cover the bulk of the content taught in the course</li>
        </ul></li>
        <li><strong>Gitlab</strong>
        <ul>
          <li><a href="https://nw-syd-gitlab.cseunsw.tech/">This is the tool used to host all your code for Tutorials, Labs, Major Project.</a></li>
          <li>Git is a programming tool for version control (like a history tracker) and collaboration (like dropbox / one drive)</li>
          <li>You have a series of "git repositories":
          <ul>
            <li>1 for all lectures/tutorials (read-only)</li>
            <li>12~ git repositories for all of the lab activities throughout the course</li>
            <li>1 shared repository for your group project</li>
          </ul></li>
        </ul></li>
      </ul>
    </>
  );
};

export default makePage(GettingStartedCoursework, {
  loginRequired: true,
  title: '👌 Getting Started - Coursework',
});
