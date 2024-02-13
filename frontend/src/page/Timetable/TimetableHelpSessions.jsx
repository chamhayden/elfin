import React from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate, Link } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import Table from '../../component/Table';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { isTinyMobileWidth, isDesktopWidth } from '../../util/screen';

import SubNav from '../../component/SubNav';

import { Context, useContext } from '../../context';
import makePage from '../../component/makePage';
import config from '../../config';


const TimetableHelpSessions = () => {
  const { getters, setters } = useContext(Context);
  const [minisessions, setMinisession] = React.useState(localStorage.getItem('elfin_minisessions') ? !!(localStorage.getItem('elfin_minisessions')) : false);
  const [tableData, setTableData] = React.useState([]);
  const toggleMiniSessions = (e) => {
    if (minisessions === true) {
      localStorage.removeItem('elfin_minisessions')
    } else {
      localStorage.setItem('elfin_minisessions', true)
    }
    setMinisession(!minisessions);
    window.location.reload(); // Stop doing this
  }

  React.useEffect(() => {
    let relevantSessions = getters.content.timetable_helpsessions;
    if (!minisessions) {
      relevantSessions = getters.content.timetable_helpsessions.filter(h => h.full);
    }

    const data = relevantSessions.map((helpsession, idx) => {
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
        },
        {
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
        {
          key: 'type',
          data: helpsession.full ? 'Full🚀' : 'Mini🐥',
          showWidth: 900,
          width: 110,
        },
      ];
    });
    setTableData(data);

  }, [minisessions, getters.content]);

  return <>
    <Typography variant="body2" sx={{ fontSize: '1.2em', padding: '5px 10px', width: 700}}>
      Help sessions are run on Microsoft Teams or in-person. Locations of help sessions are below.
    </Typography>
    <Typography variant="body2" sx={{ fontSize: '1.2em', padding: '5px 10px', width: 700}}>
      Please note, help sessions with more tutors will generally have shorter queues. Please plan this accordingly.
    </Typography>
    <Typography variant="body2" sx={{ fontSize: '1.2em', padding: '5px 10px 30px 10px', width: 700}}>
      Please wait in the appropriate <a target="_blank" href="https://web.cse.unsw.edu.au/~apps/hopper">Hopper Queue</a> until a tutor contacts you or invite you into a call.
    </Typography>
    <hr />
    <Typography variant="body2" sx={{ fontSize: '1.2em', padding: '5px 10px 30px 10px', width: 700}}>
      <b>Mini-sessions</b> are 40 minute drop in sessions where you can join the tail end of a class to ask a tutor for help who is no longer spending time with their group.<br />
      <br />
      <FormControlLabel control={<Checkbox onChange={toggleMiniSessions} checked={minisessions} />} label="Show mini-sessions" />
    </Typography>
    {tableData.length > 1 && <Table
      data={tableData}
      maxWidth={1000}
      getRowStyle={params => {
        if (minisessions && params.data.type === 'Full🚀') {
          return { background: 'rgb(225,225,255)'}
        }
      }}
    />}
  </>
};

export default makePage(TimetableHelpSessions, {
  loginRequired: true,
  title: '📖 Help Session Timetable',
});
