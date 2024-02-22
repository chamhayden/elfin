import React from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import TheatersIcon from '@mui/icons-material/Theaters';
import SchoolIcon from '@mui/icons-material/School';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import { Outlet } from 'react-router-dom';

import SubNavWrapper from '../../component/SubNavWrapper';
import makePage from '../../component/makePage';
import { apiCall } from '../../util/api';
import { Context, useContext } from '../../context';
import Table from '../../component/Table';

const ProjectSpec = ({ }) => {

  const { getters, setters } = useContext(Context);
  const [presentations, setPresentations] = React.useState([]);
  const [lockButtons, setLockButtons] = React.useState(false);
  
  const getData = () => {
    apiCall('presentations/get', { term: getters.term })
    .then(setPresentations);
  }

  const chooseTime = (record) => {
    setLockButtons(true);
    apiCall('presentations/set', { term: getters.term, recordId: record })
    .then(_ => {
      alert('Time selection updated. Page will refresh in 2 seconds')
    })
    .catch(err => {
      setLockButtons(false);
      alert(err);
    })
    .finally(_ => {
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    })
  }

  React.useEffect(() => {
    getData();
    const interval = setInterval(getData, 100 * 1000); // 100 sec doesn't even work
    return () => clearInterval(interval);
  }, [getters.term]);

  if (!getters.content || presentations.length === 0) {
    return (
      <Typography variant="h6" gutterBottom sx={{ }}>
        Loading...
      </Typography>
    );
  }

  if (!getters.content.groups) {
    return (
      <Typography variant="h6" gutterBottom sx={{ }}>
        Your major project has yet to be released
      </Typography>
    )
  }

  const data = presentations
    .filter(p => !p.group || p.group === getters.group)
    .map((row, idx) => {
    return [
      {
        key: 'day',
        data: row.day,
        flex: 1,
      },
      {
        key: 'time',
        data: row.time,
        flex: 1,
      },
      {
        key: 'action',
        data: { mine: row.group === getters.group, taken: !!(row.group), id: row.id },
        render: (params) => {
          return (
            <>
              {params.value.taken ? (
                <>{params.value.mine ? <b>CURRENT SELECTION</b> : <>Taken</>}</>
              ) : (
                <Button variant="contained" disabled={lockButtons} onClick={() => chooseTime(params.value.id)}>Choose</Button>
              )}
            </>
          );
        },
      },
    ]
  });

  return <Table data={data} maxWidth={1200} />
};

export default makePage(ProjectSpec, {
  loginRequired: true,
  title: '🚀 Major Project',
});
