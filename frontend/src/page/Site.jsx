import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import { Outlet, useParams, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useCookies } from 'react-cookie';

import { Context, useContext } from '../context';
import Header from '../component/Header';
import YoutubeModal from '../component/YoutubeModal';
import Navbar from '../component/Navbar';
import config from '../config';
import { apiCall } from '../util/api';
import { isMobileWidth, isDesktopWidth } from '../util/screen';

const drawerWidth = 230;

const SiteWrapper = ({ children }) => {
  const [cookies, setCookie, removeCookie] = useCookies();
  const { getters, setters } = useContext(Context);
  const params = useParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const checkAndChangeWidth = () => {
    setters.setScreenWidth(window.innerWidth);
    if (isMobileWidth()) {
      setters.setSidebarOpen(false);
    }
    if (isDesktopWidth()) {
      setters.setSidebarOpen(true);
    }
  };

  React.useEffect(() => {
    setters.setZid(cookies.eckles_zid);
  }, [cookies]);

  React.useEffect(() => {
    window.addEventListener('resize', () => {
      checkAndChangeWidth();
    });
    checkAndChangeWidth();
  }, []);

  React.useEffect(() => {
    if (isMobileWidth()) {
      setters.setSidebarOpen(false);
    }
  }, [pathname])

  React.useEffect(() => {
    if (pathname === '/') {
      navigate(`/${config.DEFAULT_TERM}`);
      setters.setTerm(`${config.DEFAULT_TERM}`);
    } else if (params.term === 'NOW') {
      navigate(pathname.replace('NOW', config.DEFAULT_TERM));
    } else {
      setters.setTerm(`${params.term}`);
    }
  }, [params]);

  const sidebarRealTimeWidth = getters.sidebarOpen ? drawerWidth : 0;

  return (
    <>
      <Helmet>
        <title>{getters.title}</title>
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
      </Helmet>
      <YoutubeModal url={getters.youtubeurl} close={() => setters.setYoutubeurl(undefined)} />
      <Box sx={{ display: 'flex', minWidth: '400px' }}>
        <CssBaseline />
        <Header pageTitle={getters.title} sidebarWidth={sidebarRealTimeWidth} menuToggle={() => setters.setSidebarOpen(!getters.sidebarOpen)} />
        <Navbar drawerWidth={drawerWidth} />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <div style={{  maxWidth: '1600px'}}>
            <Outlet />
          </div>
        </Box>
      </Box>
    </>
  )
};

export default SiteWrapper;