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
              <a target="_blank" href={params.value.streamurl}>Online</a>
              &nbsp;|&nbsp;
              <a target="_blank" href={params.value.locationurl}>{params.value.location}</a>
            </>
          )
        },
      },
    ];
  });
  return <>
    <Table data={data} maxWidth={700} />
  </>
};

export default makePage(TimetableMegatutes, {
  loginRequired: false,
  title: 'Mega-tutorial Timetable',
});
