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

const TimetableLectures = () => {
  const { getters, setters } = useContext(Context);

  const data = getters.content.timetable_lectures.map((lecture, idx) => {
    return [
      {
        key: 'week',  
        data: lecture.week,
        width: 80,
      },
      {
        key: 'daytime',
        data: lecture.daytime,
        flex: 1,
      },{
        key: 'topics',
        data: lecture.topics ? lecture.topics() : [],
        flex: 2,
        render: (params) => {
          return params.value.map((t, idx) => (
            <>
              {idx !== 0 ? ', ' : ''}
              <a
                target="_blank"
                href={`https://teaching.bitflip.com.au/1531/${getters.term}/${t.number}-${t.slug}.html`}>{t.emoji} {t.name}
              </a>
            </>
          ));
        },
        showWidth: 1100,
      },
      {
        key: 'location',
        flex: 1,
        data: {
          location: lecture.location,
          locationurl: lecture.locationurl,
          streamurl: lecture.streamurl,
        },
        render: (params) => {
          return (
            <>
              {params.value.streamurl && (
                <>
                  <a href="#" onClick={() => setters.setYoutubeurl(params.value.streamurl)}>Online</a>
                  &nbsp;|&nbsp;
                </>
              )}
              <a target="_blank" href={params.value.locationurl}>{params.value.location}</a>
            </>
          )
        },
      },
    ];
  });
  return <>
    <Table data={data} maxWidth={1200} />
  </>
};

export default makePage(TimetableLectures, {
  loginRequired: false,
  title: '🎞️ Lecture Timetable',
});
