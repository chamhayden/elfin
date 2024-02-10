import React from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import TheatersIcon from '@mui/icons-material/Theaters';
import SchoolIcon from '@mui/icons-material/School';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import { Outlet } from 'react-router-dom';

import SubNavWrapper from '../../../component/SubNavWrapper';

import makePage from '../../../component/makePage';

const GettingStarted = ({ }) => {
  const menu = [
    {
      title: 'Content',
      icon: <TheatersIcon />,
      subRoute: 'content',
    },
    {
      title: 'Solutions',
      icon: <SchoolIcon />,
      subRoute: 'solutions',
    },
    {
      title: 'Marking',
      icon: <TheatersIcon />,
      subRoute: 'marking',
    },
  ];

  return (
    <SubNavWrapper baseUrl={'/content/tutelabs'} menu={menu}>
      <Outlet />
    </SubNavWrapper>
  );
  return (
    <>
      

    </>
  );
};

export default makePage(GettingStarted, {
  loginRequired: true,
  title: 'Getting Started',
});