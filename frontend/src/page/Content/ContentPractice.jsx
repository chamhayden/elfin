import React from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import TheatersIcon from '@mui/icons-material/Theaters';
import SchoolIcon from '@mui/icons-material/School';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import { Outlet } from 'react-router-dom';

import SubNavWrapper from '../../component/SubNavWrapper';
import makePage from '../../component/makePage';
import { Context, useContext } from '../../context';


const ContentPractice = ({ }) => {
  const { getters, setters } = useContext(Context);
  return (
    <>
      <Typography variant="h6" gutterBottom sx={{ }}>
        We have provided a number of practice activities for you that also include solutions.
      </Typography>
      <Typography variant="h6" gutterBottom sx={{ }}>
        Every student has their own copy of this repo.
      </Typography>
      <br />
      <Typography variant="h6" gutterBottom sx={{ }}>
        <Button variant="contained" size="large" onClick={() => {
          window.location.href = `https://cgi.cse.unsw.edu.au/~cs1531/redirect/?path=COMP1531/${getters.term}/students/_/practice-activities`;
        }}>Click here to continue!</Button>
      </Typography>
    </>
  );
};

export default makePage(ContentPractice, {
  loginRequired: true,
  title: 'Practice Activities',
});
