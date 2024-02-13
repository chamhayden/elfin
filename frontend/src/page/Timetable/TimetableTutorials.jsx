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

const TimetableTutorials = () => {
  const { getters, setters } = useContext(Context);

  if (!getters.content) {
    return <>Loading...</>;
  }

  const data = getters.content.timetable_tutelab.map((tutelab, idx) => {
    return [
      {
        key: 'code',  
        data: tutelab.code,
        flex: 1,
        showWidth: 800,
      },
      {
        key: 'daytime',
        data: tutelab.daytime,
        flex: 2,
      },{
        key: 'staff',
        data: tutelab.staff().map(s => s.name).join(', '),
        showWidth: 1000,
        flex: 2,
      },
      {
        key: 'tute_location',
        data: tutelab.tute_location,
        flex: 2,
      },
      {
        key: 'lab_location',
        data: tutelab.lab_location,
        showWidth: 500,
        flex: 2,
      },
    ];
  });
  return <>
    <Table data={data} maxWidth={1200} />
  </>
};

export default makePage(TimetableTutorials, {
  loginRequired: false,
  title: '🎓 Tutes & Labs Timetable',
});
