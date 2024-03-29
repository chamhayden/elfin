import React from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import TheatersIcon from '@mui/icons-material/Theaters';
import SchoolIcon from '@mui/icons-material/School';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import { Outlet } from 'react-router-dom';

import SubNavWrapper from '../../component/SubNavWrapper';
import makePage from '../../component/makePage';

const ProjectBase = ({ }) => {
  const menu = [
    {
      title: 'Spec',
      icon: <TheatersIcon />,
      subRoute: 'spec',
    },
    {
      title: 'Marking Runs',
      icon: <SchoolIcon />,
      subRoute: 'runs',
    },
    {
      title: 'Final Presentation',
      icon: <CoPresentIcon />,
      subRoute: 'final-presentation',
    },
  ];

  return (
    <SubNavWrapper baseUrl={'/content/project'} menu={menu}>
      <Outlet />
    </SubNavWrapper>
  );
};

export default makePage(ProjectBase, {
  loginRequired: true,
  title: 'Major Project',
});