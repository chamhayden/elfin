import React from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import TheatersIcon from '@mui/icons-material/Theaters';
import SchoolIcon from '@mui/icons-material/School';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import { Outlet } from 'react-router-dom';
import Typography from '@mui/material/Typography';


import Table from '../../component/Table';
import { Context, useContext } from '../../context';
import SubNavWrapper from '../../component/SubNavWrapper';
import makePage from '../../component/makePage';


const ContentLectures = ({ }) => {
  const { getters, setters } = useContext(Context);
  const ddd = getters.content.content_lectures.map((lecture, idx) => {
    return [
      {
        key: '#',  
        data: lecture.number,
        showWidth: 1000,
        width: 100,
      },
      {
        key: 'topic',
        data: `${lecture.emoji} ${lecture.topic}`,
        showWidth: 600,
      },
      {
        key: 'name',
        data: lecture.name,
      },
      {
        key: 'links',
        data: {
          number: lecture.number,
          slug: lecture.slug,
          recordingurl: lecture.recordingurl,
        },
        render: (params) => {
          return (
            <>
              <a target="_blank" href={`https://teaching.bitflip.com.au/1531/${getters.term}/${params.value.number}-${params.value.slug}.html`}>Slides</a>
              &nbsp;|&nbsp;
              <a target="_blank" href={`https://teaching.bitflip.com.au/1531/${getters.term}/${params.value.number}-${params.value.slug}.pdf`}>PDF</a>
              &nbsp;|&nbsp;
              {params.value.recordingurl ? <a href="#" onClick={() => setters.setYoutubeurl(params.value.recordingurl)}>Video</a> : 'Video'}
            </>
          )
        },
      },
    ];
  });

  return (
    <>
      <Typography variant="body2" color="text.primary" sx={{ margin: '0 0 15px 0', fontSize: '1.2em'}}>
      All lecture code can be found <a target="_blank" href="https://teaching.bitflip.com.au/code/1531/24T1/">here</a>.
      </Typography>
      
      <Table data={ddd} maxWidth={700} />
    </>
  );
};


export default makePage(ContentLectures, {
  loginRequired: true,
  title: 'Lecture Content',
});
