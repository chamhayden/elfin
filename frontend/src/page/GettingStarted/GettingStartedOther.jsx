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

const GettingStartedOther = ({ }) => {
  return (
    <>
      <p>The following resources may help you gain a better understanding of javascript and/or git
      </p>
      <ul>
        <li><strong>Git:</strong>
        <ul>
          <li><a target="_blank" href="https://www.youtube.com/playlist?list=PLbSaCpDlfd6rseEvuy6DhnuIRXjB9UHK5">UNSW Git videos</a></li>
          <li><a target="_blank" href="https://www.atlassian.com/git">Atlassian's "Learn Git"</a></li>
        </ul></li>
      </ul>
    </>
  );
};

export default makePage(GettingStartedOther, {
  loginRequired: true,
  title: '👌 Getting Started - Other',
});
