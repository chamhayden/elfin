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

const ContentLectures = ({ }) => {
  return (
    <>
      You can find the full folder of lectures here . And the full folder of code here .
      https://teaching.bitflip.com.au/1531/24T1/
      https://teaching.bitflip.com.au/code/1531/24T1/



    </>
  );
};


export default makePage(ContentLectures, {
  loginRequired: true,
  title: 'Lecture Content',
});
