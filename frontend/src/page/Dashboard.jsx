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
      Check out some recent notices!<br />
      {getters.content.forum.map((post, idx) => (
        <Card variant="outlined" sx={{ padding: '20px', margin: '20px 0' }}>
          <h3 style={{ margin: 0, padding: 0}}>{post.title}</h3>
          <span style={{ fontSize: '0.6em' }}>Posted {post.created_at}</span>
          <div style={{ marginTop: '20px', fontSize: '0.8em', lineHeight: '110%' }} dangerouslySetInnerHTML={{ __html: post.document.replaceAll('\n', '<br />').substring(0, 300) + `......`}}></div><br />
          <a target="_blank" href={post.url}>READ FULL NOTICE</a>
        </Card>
      ))}

      </div>
    </>
  );
}

export default makePage(Dashboard, {
  loginRequired: false,
  title: '💪🏻 Dashboard',
});