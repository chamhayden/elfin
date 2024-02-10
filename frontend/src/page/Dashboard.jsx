import { useNavigate } from 'react-router-dom';

import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import SubNav from '../component/SubNav';
import makePage from '../component/makePage';
import { Context, useContext } from '../context';
import { getPrimaryNavList } from '../component/NavList';
import SessionAlert from '../component/SessionAlert';

const Dashboard = ({ }) => {
  const { getters, setters } = useContext(Context);
  const navigate = useNavigate();

  const flattenedNavList = [];
  getPrimaryNavList(getters.term).map(i => {
    if (i.children && i.children.length > 0) {
      i.children.map(c => {
        flattenedNavList.push({
          ...c,
          loginRequired: i.loginRequired,
        });
      })
    } else {
      flattenedNavList.push(i);
    }
  });

  const getUrl = (route, external) => {
    if (external) return route;
    return `/${getters.term}${route}`;
  }

  const redirect = route => {
    if (route.includes('http')) {
      window.open(route, '_blank').focus();
    } else {
      navigate(route);
    }
  };
  return (
    <>
      <div style={{lineHeight: '150%', fontSize: '1.5em'}}>
      Welcome to COMP1531 for 24T1.<br /><br />
      PLEASE fill out the <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=pM_2PxXn20i44Qhnufn7o_RvPhdrUs1DpZ0MlMs_Bf1UQTJRUDU1STFHVDFPSjk2MzIxVkVaTklJVy4u" target="_blank">Group Preference Form</a><br /><br />
      If you have any issues, please contact cs1531@cse.unsw.edu.au.
      </div>
    </>
  );
}

export default makePage(Dashboard, {
  loginRequired: false,
  title: '💪🏻 Dashboard',
});