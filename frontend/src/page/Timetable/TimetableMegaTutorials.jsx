import React from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate, Link } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import Table from '../../component/Table';
import Button from '@mui/material/Button';
import { isTinyMobileWidth, isDesktopWidth } from '../../util/screen';

import SubNav from '../../component/SubNav';

import { Context, useContext } from '../../context';
import makePage from '../../component/makePage';
import config from '../../config';

const TimetableMegatutes = () => {
  const { getters, setters } = useContext(Context);

  const data = getters.content.timetable_megatute.map((megatute, idx) => {
    return [
      {
        key: 'week',  
        data: megatute.week,
        width: 80,
      },
      {
        key: 'daytime',
        data: megatute.daytime,
        flex: 1,
      },
      {
        key: 'location',
        flex: 1,
        data: {
          location: megatute.location,
          locationurl: megatute.locationurl,
          streamurl: megatute.streamurl,
        },
        render: (params) => {
          return (
            <>
              <a href="#" onClick={() => setters.setYoutubeurl(params.value.streamurl)}>Online</a>
              &nbsp;|&nbsp;
              <a target="_blank" href={params.value.locationurl}>{params.value.location}</a>
            </>
          )
        },
      },
    ];
  });
  return <>
    <Typography variant="body2" sx={{ fontSize: '1.2em', padding: '5px 10px', width: 700}}>
      Mega tutorials are a new concept being trialed this term to give students even more experience on some more practical elements of the course content (i.e. coding).
    </Typography>
    <Typography variant="body2" sx={{ fontSize: '1.2em', padding: '5px 10px', width: 700}}>
      The course can be comfortably completed without ever attending a mega tutorial.
    </Typography>
    <Typography variant="body2" sx={{ fontSize: '1.2em', padding: '5px 10px 30px 10px', width: 700}}>
      For recordings, just click on the stream link below. There is only one mega-tutorial and everyone is free to join.
    </Typography>
    <Table data={data} maxWidth={700} />
  </>
};

export default makePage(TimetableMegatutes, {
  loginRequired: true,
  title: '☂️ Mega-tutorial Timetable',
});
