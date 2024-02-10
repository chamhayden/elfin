import React from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import TheatersIcon from '@mui/icons-material/Theaters';
import SchoolIcon from '@mui/icons-material/School';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import { Outlet } from 'react-router-dom';

import { Context, useContext } from '../../../context';
import makePage from '../../../component/makePage';
import Table from '../../../component/Table';

const TutelabsContent = ({ }) => {
  const { getters, setters } = useContext(Context);
  const tutelabs = [
    {
      tutorial: true,
      exercises: {
        'lab01_git': { marks: 0, critical: false },  
        'lab01_leap': { marks: 0, critical: false },  
        'lab01_academics': { marks: 0, critical: true },
      },
      notes: 'We will still give you a mark, but we won\'t count that towards your final grade',
    },
    {
      tutorial: true,
      exercises: {
        'lab02_arrays': { marks: 1, critical: false },  
        'lab02_satisfaction': { marks: 1, critical: false },  
      }
    },
    {
      tutorial: true,
      exercises: {
        'lab03_password': { marks: 1, critical: false },  
        'lab03_academics': { marks: 1, critical: true },  
        'lab03_holidays': { marks: 1, critical: false },  
      },
      notes: 'Starting this week, the quality of your tests will be assessed',
    },
    {
      tutorial: true,
      exercises: {
        'lab04_encanto': { marks: 1, critical: false },  
        'lab04_shapes': { marks: 1, critical: false },  
      },
      notes: 'Starting from lab04_shapes, linting will contribute towards your mark',
    },
    {
      tutorial: true,
      exercises: {
        'lab05_forum': { marks: 1, critical: true },
      },
      notes: 'All exercises have an earlier due date',
    },
    {
      tutorial: false,
      exercises: {},
    },
    {
      tutorial: true,
      exercises: {},
    },
    {
      tutorial: true,
      exercises: {
        'lab08_memory': { marks: 1, critical: false },  
        'lab08_objection': { marks: 1, critical: true },  
        'lab08_quiz': { marks: 1, critical: true },  
      },
      notes: 'Starting this week, the quality of your tests will be assessed',
    },
    {
      tutorial: true,
      exercises: {
        'lab09_deploy': { marks: 1, critical: false },
      },
      notes: 'Starting this week, the quality of your tests will be assessed',
    },
  ]

  const data = tutelabs.map(({ tutorial, exercises, notes }, idx) => {
    return [
      {
        key: 'week',
        data: idx + 1,  
        showWidth: 700,
        width: 100,
      },
      {
        key: 'Tutorial',
        data: idx + 1,
        render: (params) => (
          <a target="_blank" href={`https://nw-syd-gitlab.cseunsw.tech/COMP1531/${getters.term}/tutorials/-/tree/master/tut${params.value.toString().padStart(2, '0')}/README.md`}>Tutorial {params.value}</a>
        ),
        flex: 1,
      },
      {
        key: 'Labs',
        data: exercises,
        render: (params) => {
          return (
            <>
              <div style={{ lineHeight: '200%', padding: '5px' }}>
              {Object.keys(params.value).map((exercise, idx2) => (
                <><a target="_blank" href={`https://cgi.cse.unsw.edu.au/~cs1531/redirect/?path=COMP1531/${getters.term}/students/_/${exercise}`}>{params.value[exercise].critical ? <><b>{exercise} ({params.value[exercise].marks} mark) (important)</b></> : <>{exercise} ({params.value[exercise].marks} mark)</>}</a><br /></>
              ))}
              {Object.keys(params.value).length === 0 && (
                <>No labs this week 🥳</>
              )}
              </div>
            </>
          )
        },
        flex: 3,
        autoHeight: true,
        wrapText: true,
      },
      {
        key: 'Notes',
        data: notes,
        showWidth: 1000,
        flex: 3,
        autoHeight: true,
        wrapText: true,
      },
    ]
  });
  return (
    <>
      <Table data={data} />
      <p><strong>Labs have no late penalty </strong> <strong> because late submissions are not accepted </strong> . The reason for this is that we make the lab due date as late as possible in order to get your labs marked and solutions released. If we wanted to have late penalties, we'd have to make the labs due <em> earlier </em>to create the space. So we're trying to be generous, but this means you need to be wary of the deadline!<br /></p>
      <p>All lab exercises are to be <strong>completed individually</strong>.</p>
      <p>With the exception of week 1, labs are designed such that they can be attempted after watching the <strong>previous week's lectures</strong>.</p>
      <p>Partial marks are given. You do not need to score full marks in every lab to receive full marks for the overall lab component (see course outline).</p>
      <p>The due date for each lab is listed in their Gitlab repositories at the top of their README.md.</p>
    </>
  );
};

export default makePage(TutelabsContent, {
  loginRequired: true,
  title: '🟠 Tute & Lab Content',
});
