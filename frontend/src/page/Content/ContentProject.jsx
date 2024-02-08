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

const ContentProject = ({ }) => {
  return (
    <>
      Your major project will be released to you on Gitlab on week 2 Monday.

Once it is released, you are able to see your group repository on the homepage of Gitlab: https://nw-syd-gitlab.cseunsw.tech/dashboard/projects.

Examples of the group project name include WED15A_EGG.
    </>
  );
};

export default makePage(ContentProject, {
  loginRequired: true,
  title: 'Major Project',
});
