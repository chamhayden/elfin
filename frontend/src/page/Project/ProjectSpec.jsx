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


const ProjectSpec = ({ }) => {
  const { getters, setters } = useContext(Context);
  console.log('getters.content.group', getters.content.group);
  return (
    <>
      {getters.content && getters.content.group ? (
        <Typography variant="h6" gutterBottom sx={{ textAlign: 'center' }}>
          <Button variant="contained" size="large" onClick={() => {
            window.location.href = `https://nw-syd-gitlab.cseunsw.tech/COMP1531/${getters.term}/groups/${getters.content.group}/project-backend`;
          }}>Click here to continue!</Button>
        </Typography>
      ) : (
        <Typography variant="h6" gutterBottom sx={{ textAlign: 'center' }}>
          Your major project has yet to be released
        </Typography>
      )}
    </>
  );
};

export default makePage(ProjectSpec, {
  loginRequired: true,
  title: 'Major Project',
});
