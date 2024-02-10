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

const GettingStartedCommunication = ({ }) => {
  return (
    <>
      <p>There are three main communication platforms that are used in this course, and they can all be used without downloading any native applications:
      </p>
      <ul>
        <li><strong></strong><strong>Microsoft Teams</strong>
        <ul>
          <li>This is used for running online tutorials and labs.</li>
          <li>This is used for (online) help sessions.</li>
          <li>This is used for <em>communicating with your other group members for the major project</em>.</li>
          <li>You can connect to Microsoft teams by going <a href="https://www.microsoft.com/en-au/microsoft-teams/group-chat-software">here</a>. Every UNSW student can log into Microsoft teams using their zID/zPassword</li>
        </ul></li>
        <li><strong>EdStem</strong>
        <ul>
          <li>This is used for the course forum.</li>
          <li>You can log in to Ed by clicking the link on the sidebar. Ed is where you can ask literally any and all questions you have in 1531. Generally, this is the place to go if you are outside your lab and outside a help session.</li>
        </ul></li>
      </ul>
    </>
  );
};

export default makePage(GettingStartedCommunication, {
  loginRequired: true,
  title: '👌 Getting Started - Communication',
});
