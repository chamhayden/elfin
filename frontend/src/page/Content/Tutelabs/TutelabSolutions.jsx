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

import makePage from '../../../component/makePage';

const TutelabSolutions = ({ }) => {
  return (
    <>
      <h2>1. Tutorial Solutions</h2>
      <Typography variant="body1">Tutorial solutions are released on Friday evening of the week they were taught in. E.G. Week 3 tutorial solutions are released on Friday evening of week 3. This will be reflected on GitLab.</Typography>
      <Typography variant="body1">Solutions are released in the <strong>solutions</strong> branch of the tutorials repository.</Typography>
      
      <h2>2. Lab Solutions</h2>
      <Typography variant="body1">Lab solutions are released on Monday evening immediately after they are due. E.G. Week 3 labs are due on Monday afternoon of week 4. However, it could take a couple of hours (or days, latest Friday) for this to be visible on your end.</Typography>
      <Typography variant="body1">One exception is due to flexibility week (week 6), the deadline for lab05 is on <strong>Saturday Week 5 at 10:00 pm</strong>.</Typography>
      <Typography variant="body1">Lab solutions are released by pushing a <strong>solution</strong> branch to each of your personal lab repositories.</Typography>
    </>
  );
};

export default makePage(TutelabSolutions, {
  loginRequired: true,
  title: '🔴 Tute & Lab Solutions',
});
