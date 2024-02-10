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

const GettingStarted = ({ }) => {
  const menu = [
    {
      title: 'Coding Environment',
      icon: <TheatersIcon />,
      subRoute: 'coding',
    },
    {
      title: 'Course Work',
      icon: <SchoolIcon />,
      subRoute: 'coursework',
    },
    {
      title: 'Communication',
      icon: <TheatersIcon />,
      subRoute: 'communication',
    },
    {
      title: 'Other',
      icon: <SchoolIcon />,
      subRoute: 'other',
    },
  ];

  return (
    <SubNavWrapper baseUrl={'/getting-started'} menu={menu}>
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