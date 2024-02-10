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
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

import { Context, useContext } from '../../context';
import { apiCall } from '../../util/api';
import makePage from '../../component/makePage';

const ProjectRuns = ({ }) => {

  const { getters, setters } = useContext(Context);
  const [runs, setRuns] = React.useState([])
  const [iter, setIter] = React.useState(1);
  const [commit, setCommit] = React.useState('');
  const [runBtnEnable, setRunBtnEnable] = React.useState(true);

  const getData = () => {
    apiCall('runs', { term: getters.term })
    .then(data => {
      console.log(data);
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
        iteration: iter,
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

  const cancelPending = (record) => {
    apiCall('runs/cancel', { term: getters.term, record: record })
    .then(() => {});
  }

  if (!getters.isTutor) {
    return <div style={{ textAlign: 'center' }}>You are not currently assigned a group. Check back later.</div>
  }
  
  return (
    <>
      {!getters.content.group && (
        <div style={{ textAlign: 'center' }}>
          <span style={{ fontSize: '1.5em', marginTop: '10px' }}>Request a rerun for {getters.content.group}</span>
          &nbsp;&nbsp;&nbsp;
          <FormControl>
            <TextField
              variant="outlined"
              id="commit"
              label="Commit Hash"
              onChange={e => setCommit(e.target.value)}
              value={commit}
            />
          </FormControl>
          <FormControl>
            <InputLabel id="iteration-label">Iteration</InputLabel>
            <Select
              labelId="iteration-label"
              id="demo-simple-select"
              value={iter}
              label="Iteration"
              onChange={e => setIter(e.target.value)}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
            </Select>
          </FormControl>
          &nbsp;&nbsp;&nbsp;
          <Button onClick={submit} disabled={!runBtnEnable} size="large" sx={{ height: '55px' }} variant="contained">Run!</Button>
          <br />
          <br />
          Please note: Submitting a rerun request for an iteration before you get your initial results will result in automatic cancellation.
        </div>
      )}
      <br />
      <hr />
      <br />
      {runs.length === 0 ? (
        <div style={{ textAlign: 'center' }}>Loading...</div>
      ) : (
        <Table aria-label="simple table" style={{ textAlign: 'center'}}>
          <Thead>
            <Tr>
              <Th><b>Submitted at</b></Th>
              {/*<Th><b>Submitter (zid)</b></Th>*/}
              <Th><b>Commit Hash</b></Th>
              <Th><b>Status</b></Th>
              <Th><b>Type</b></Th>
              <Th><b>Results</b></Th>
            </Tr>
          </Thead>
          <Tbody>
            {runs.map((row, idx) => {
              const date = new Date(Date.parse(row.created));
              return (
                <Tr
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <Td>
                    {(date.getMonth()+1).toString().padStart(2, '0')}-
                    {(date.getDate()).toString().padStart(2, '0')}
                    T
                    {(date.getHours()).toString().padStart(2, '0')}-
                    {(date.getMinutes()).toString().padStart(2, '0')}
                  </Td>
                  {/*<Td>{row.zid}</Td>*/}
                  <Td>{row.commithash}</Td>
                  <Td>{row.status}
                  {row.status === 'pending' && (
                    <span style={{ cursor: 'pointer' }} onClick={() => cancelPending(row.record)}>❌</span>
                  )}
                  </Td>
                  <Td>{row.type}</Td>
                  <Td>{row.results}</Td>
                </Tr>
              )
            })}
          </Tbody>
        </Table>
      )}
    </>
  );
};

export default makePage(ProjectRuns, {
  loginRequired: true,
  title: '🚀 Project Runs',
});