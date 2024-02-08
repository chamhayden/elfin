import React from 'react';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

import SubNav from '../../component/SubNav';
import { Context, useContext } from '../../context';
import makePage from '../../component/makePage';
import { isTinyMobileWidth } from '../../util/screen';
import config from '../../config';

const TimetableHelpSessions = () => {
  const { getters } = useContext(Context);
  const [boxes, setBoxes] = React.useState([]);

  React.useEffect(() => {
    {/*setBoxes(getters.content.weeks.map(week => {
      if (week.schedule_help_sessions && week.schedule_help_sessions().length > 0) {
        return {
          title: `Week ${week.week}`,
          key: week.week,
          maxWidth: 800,
          headers: [
            { name: 'Day', width: 20 },
            { name: 'Times', width: 20 },
            { name: 'Staff', width: 40, showFn: () => !isTinyMobileWidth(), },
            { name: 'Join', width: 20 },
          ],
          table: week.schedule_help_sessions().map(help_session => {
            let lastObject = { value: help_session.call_url_h };
            if (help_session.call_url_h.includes('http')) {
              lastObject = { Raw: () => <Button variant="contained" onClick={() => {
                  window.location.href = `${help_session.call_url_h}`;
                }}>Join</Button>, };
            }
            return [
              { value: help_session.day, },
              { value: help_session.times, },
              { value: help_session.staff().map(s => s.name).join(', '), },
              lastObject,
            ];
          }),
        }
      }
    }).filter(c => !!c));*/}
  }, [getters.content.weeks]);

  return <>
    Help sessions are run on Microsoft Teams. CLICK HERE to view the help session calendar here to join a particular help session .
    Please note, help sessions are scheduled on your calendar at the same time every week - but if you want to check if they're ACTUALLY running check the timetable below!
    Please wait in the appropriate Hopper Queue until a tutor contacts you or invite you into a call.
    A summary of the schedule is below.
  </>

  {/**/}

};

export default makePage(TimetableHelpSessions, {
  loginRequired: false,
  title: 'Help Session Timetable',
});