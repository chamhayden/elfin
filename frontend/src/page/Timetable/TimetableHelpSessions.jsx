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

const TimetableHelpSessions = () => {
  const { getters, setters } = useContext(Context);

  const data = getters.content.timetable_helpsessions.map((helpsession, idx) => {
    return [
      {
        key: 'week',  
        data: helpsession.week,
        width: 80,
      },
      {
        key: 'daytime',
        data: helpsession.daytime,
        flex: 2,
      },{
        key: 'tutors',
        data: helpsession.tutors().map(t => t.name).join(', '),
        flex: 2,
        showWidth: 900,
      },
      {
        key: 'location',
        flex: 2,
        data: {
          location: helpsession.location,
          locationurl: helpsession.locationurl,
        },
        render: (params) => {
          return (
            <a target="_blank" href={params.value.locationurl}>{params.value.location}</a>
          )
        },
      },
    ];
  });
  return <>
    <Table data={data} maxWidth={1000} />
  </>
};

export default makePage(TimetableHelpSessions, {
  loginRequired: false,
  title: 'Help Session Timetable',
});
