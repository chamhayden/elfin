import React from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate, useLocation } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import TheatersIcon from '@mui/icons-material/Theaters';
import SchoolIcon from '@mui/icons-material/School';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import { Outlet } from 'react-router-dom';
import { Context, useContext } from '../context';

import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

import { apiCall } from '../util/api';
import makePage from '../component/makePage';

const ProjectRuns = ({ }) => {

  const { getters, setters } = useContext(Context);
  const [runs, setRuns] = React.useState([])
  const [commit, setCommit] = React.useState('');
  const [runBtnEnable, setRunBtnEnable] = React.useState(true);

  const getData = () => {
    apiCall('runs', { term: getters.term })
    .then(data => {
      setRuns(data);
    });
  }

  React.useEffect(() => {
    const interval = setInterval(getData, 1000);
    return () => clearInterval(interval);
  }, [getters.term]);

  const submit = async () => {
    setRunBtnEnable(false);
    try {
      await apiCall('runs/submit', {
        term: getters.term,
        commit: commit,
      }, 'POST', )
      .then(() => {
        setCommit('');
      }).catch((err) => {
        alert(err);
      }).finally(() => {
        setRunBtnEnable(true);
      });
    } catch (err) {
      console.log(err);
    }
  }
  

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <span style={{ fontSize: '1.5em', marginTop: '10px' }}>Git Commit Hash:</span>
        &nbsp;&nbsp;&nbsp;
        <TextField variant="outlined" id="commit" onChange={e => setCommit(e.target.value)} value={commit} />
        &nbsp;&nbsp;&nbsp;
        <Button onClick={submit} disabled={!runBtnEnable} size="large" sx={{ height: '55px' }} variant="contained">Run!</Button>
      </div>
      <br />
      <hr />
      <br />
      {runs.length === 0 ? (
        <div style={{ textAlign: 'center' }}>Loading...</div>
      ) : (
        <Table aria-label="simple table" style={{ textAlign: 'center'}}>
          <Thead>
            <Tr>
              <Th><b>Submitter (zid)</b></Th>
              <Th><b>Commit Hash</b></Th>
              <Th><b>Status</b></Th>
              <Th><b>Results</b></Th>
            </Tr>
          </Thead>
          <Tbody>
            {runs.map((row, idx) => (
              <Tr
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <Td>{row.zid}</Td>
                <Td>{row.commithash}</Td>
                <Td>{row.status}</Td>
                <Td>{row.results}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      )}
    </>
  );
};

export default makePage(ProjectRuns, {
  loginRequired: true,
  title: 'Project Runs',
});