import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { Link, useNavigate, useLocation } from 'react-router-dom';

import { Context, useContext } from '../../context';
import makePage from '../../component/makePage';

const CourseOutline24T1 = () => {
  const { getters } = useContext(Context);
  const navigate = useNavigate();

  const link = (path) => `/${getters.term}/${path}`;
  const redirect = (path) => navigate(link(path));

  return (
    <>
      <Typography variant="h4" component="div" gutterBottom>
        Contents
      </Typography>

      <Typography variant="body1" gutterBottom>
        <ol>
          <li>Welcome!</li>
          <li>Course Summary</li>
          <li>Teaching Strategies</li>
          <li>Course Evaluation & Development</li>
        </ol>
      </Typography>

      <Divider sx={{ mb: 3, mt: 3, }} />

      <Typography variant="h4" component="div" gutterBottom>
        1. Welcome!
      </Typography>
      <div style={{ height: '15px'}}></div>
      <Typography variant="body1" gutterBottom>
        💃🥳Welcome to COMP1531 for 24T1!💃🥳
      </Typography>
      <div style={{ height: '15px'}}></div>
      <Typography variant="body1" gutterBottom>
        COMP1531 is the first stop on a very long voyage to becoming the best software engineer you can be. We will have a great term - even if we're all not physically together. COMP1531 has a teaching team of over 40 passionate and experienced teaching staff - nearly all of whom have been in your shoes within the last few years. We're all excited to meet you!
      </Typography>
      <div style={{ height: '15px'}}></div>
      <Typography variant="body1" gutterBottom>
        Throughout the term, you'll all be working not only with your tutor(s), but also with our course admins and lecturers.
      </Typography>
      <div style={{ height: '15px'}}></div>
      <Typography variant="body1" gutterBottom>
        <b>UNSW's <a target="_blank" href="https://www.unsw.edu.au/course-outlines/course-outline#year=2024&term=Term%201&deliveryMode=Multimodal&deliveryFormat=Standard&teachingPeriod=T1&deliveryLocation=Kensington&courseCode=COMP1531&activityGroupId=1">official course outline</a> lives in ECOS (UNSW's Enterprise Course Outline Solution).</b> We do not manage this page. Most of the information to do with the course can be found there. However, we have also included some extra information below.
      </Typography>

      <div style={{ height: '40px'}}></div>
      <Typography variant="h4" component="div" gutterBottom>
        2. Course Summary
      </Typography>
      <div style={{ height: '15px'}}></div>
      <Typography variant="body1" gutterBottom>
        This course teaches students about software engineering principles via exposure to the important practice of building correct products in effectively functioning teams. 
      </Typography>
      <div style={{ height: '15px'}}></div>
      <Typography variant="body1" gutterBottom>
        You will be exposed to agile software practices, team collaboration and effective communication through implementing a group project based on agile software methodologies that require you to analyse, design, build and deploy a web-based application. This course is typically taken soon after completing COMP1511 but could be delayed and taken later. It provides essential background for the teamwork and project management required in many later courses. 
      </Typography>
      <div style={{ height: '15px'}}></div>
      <Typography variant="body1" gutterBottom>
        In terms of assumed knowledge, students should be familiar with the basic concepts of programming, including loops, functions, libraries of code, compiling, and writing code to follow specifications. 
      </Typography>

      <div style={{ height: '40px'}}></div>
      <Typography variant="h4" component="div" gutterBottom>
        3. Teaching Strategies
      </Typography>
      <div style={{ height: '15px'}}></div>
      <Typography variant="body1" gutterBottom>
        This course uses the standard set of practice-focused teaching strategies employed by most CSE foundational courses: 
      </Typography>
      <Typography variant="body1" gutterBottom>
        <ol>
          <li>Lectures</li>
          <li>Tutorials</li>
          <li>Mega-tutorials</li>
          <li>Help Sessions</li>
          <li>Major Group Project</li>
        </ol>
      </Typography>
      <Typography variant="body1" gutterBottom>
        This course aims to provide the students with a strong foundation in the fundamental principles and practices of software engineering that will prepare them for the advanced software engineering workshops. As such, a broad range of key software engineering topics will be taught and reinforced through a group project, that will enable students to apply the theoretical concepts acquired to solve a practical software engineering problem. An agile software delivery style has been chosen for the implementation of the group project, to make students familiar with modern agile development methodologies.
      </Typography>
      <div style={{ height: '20px'}}></div>
      <Typography variant="h5" component="div" gutterBottom>
        3.1. Lectures
      </Typography>
      <Typography variant="body1" gutterBottom>
        Lectures will be used to present the theory and practice of the techniques in this course. Although the lectures will primarily focus on the key concepts of software engineering, some lectures will also include practical demonstrations of various key technologies required for the implementation of the group project. Lecture slides will be available on the course web page. 
      </Typography>
      <div style={{ height: '20px'}}></div>
      <Typography variant="h5" component="div" gutterBottom>
        3.2. Mega-Tutorials
      </Typography>
      <Typography variant="body1" gutterBottom>
        Mega-Tutorials are extra "bonus" tutorial slots that essentially run like mini-lectures. They do not introduce new content, but instead they go into more depth on a range of the practical topics in the course. 
      </Typography>
      <div style={{ height: '10px'}}></div>
      <Typography variant="body1" component="div" gutterBottom>
        They are run by a single individual - so everyone is invited to the same class. 
      </Typography>
      <div style={{ height: '10px'}}></div>
      <Typography variant="body1" component="div" gutterBottom>
        There are no marks associated, and they are perfectly fine to skip. They are simply there to provide more support to students.
      </Typography>
      <div style={{ height: '20px'}}></div>
      <Typography variant="h5" component="div" gutterBottom>
        3.3 Tutorials
      </Typography>
      <div style={{ height: '10px'}}></div>
      <Typography variant="body1" gutterBottom>
        Tutorials help clarify ideas from lectures and work through exercises based on the lecture material. You should make sure that you use them effectively by examining in advance the material to be covered in each week's tutorial, by asking questions, by offering suggestions and by generally participating. 
      </Typography>
      <div style={{ height: '10px'}}></div>
      <Typography variant="body1" gutterBottom>
        Tutorials will often involve collaborative and break-out work where you will work with a group of other students to solve or answer problems. This will often be done in your major project group. 
      </Typography>
      <div style={{ height: '10px'}}></div>
      <Typography variant="body1" gutterBottom>
        <b>Tutorial participation and engagement contributes to your project mark.</b>
      </Typography>
      <div style={{ height: '10px'}}></div>
      <Typography variant="body1" gutterBottom>
        Tutorials will be run via Microsoft Teams for online classes (MS Teams/Teams).
      </Typography>
      <div style={{ height: '20px'}}></div>
      <Typography variant="h5" component="div" gutterBottom>
        3.4. Labs
      </Typography>
      <div style={{ height: '10px'}}></div>
      <Typography variant="body1" gutterBottom>
        Each week your 2-hour lab will consist of a 40 minute window (sometimes not all at the same time) where you work a tutor to complete: 
      </Typography>
      <Typography variant="body1" gutterBottom>
        <ol>
          <li><b>Project check-ins</b>: This is a chance for your group and your tutor to sync up about your progress and either work through problems together or present to them your latest milestone for marking. </li>
          <li><b>General help</b>: This is a chance for your tutor to get help with lab questions (past or present), as well as for the future to provide feedback on your work.</li>
        </ol>
      </Typography>
      <div style={{ height: '20px'}}></div>
      <Typography variant="h5" component="div" gutterBottom>
        3.5. Help Sessions
      </Typography>
      <div style={{ height: '10px'}}></div>
      <Typography variant="body1" gutterBottom>
        Help sessions are unprepared drop-in "clinics" where students and groups can go to seek help about course-related matters, whether that be the project, tutorials, or labs. Current tutors or lab assistants will supervise each help session.
      </Typography>
      <div style={{ height: '10px'}}></div>
      <Typography variant="body1" gutterBottom>
        Help sessions will be run via Teams.
      </Typography>
      <div style={{ height: '10px'}}></div>
      <Typography variant="body1" gutterBottom>
        The timetable for help sessions will be released on February 10th. 
      </Typography>
      <div style={{ height: '20px'}}></div>
      <Typography variant="h5" component="div" gutterBottom>
        3.6. Major Projects
      </Typography>
      <div style={{ height: '10px'}}></div>
      <Typography variant="body1" gutterBottom>
        There will be one main project which will run through the teaching period from weeks 1-11 and contributes to 9 0 % of the overall course mark.
      </Typography>
      <div style={{ height: '10px'}}></div>
      <Typography variant="body1" gutterBottom>
        The course staff will form groups of 4-5 students in your allocated tutorials at the beginning of the course. You will be notified of what group you're in during your week 1 tutorial & lab. A short survey will be sent no later than week 0 that will allow you to make preferences of who is in your group. These groups will and must be within your own tutorial group.
      </Typography>
      <div style={{ height: '10px'}}></div>
      <Typography variant="body1" gutterBottom>
        The project will be implemented using an agile software delivery mode. As such, your team will be required to build and deliver the project in milestones. Each milestone will deliver a part of the requirements of the project and will encompass all the SDLC activities, namely analysis, design, coding and testing. Changes to project requirements are a natural and unavoidable part of any software project life-cycle. Hence, students will need to bear in mind that project requirements may be subject to change and enhancements to functionalities may be made at the end of each milestone. You will need to carefully design the solution for your current milestone, such that the solution is extensible to accommodate these changes. 
      </Typography>
      <div style={{ height: '10px'}}></div>
      <Typography variant="body1" gutterBottom>
        After certain milestones, your group will present your work in the next lab project check-in that occurs. This is outlined in the major project specification. To receive a mark for that milestone, each team member must be present for the demonstration during the relevant lab time. If working online, this also includes participating with working audio and with their camera on. Having no audio or video will result in a loss of marks. If you are unable to attend, you must apply for special consideration and have your application accepted. 
      </Typography>
      <div style={{ height: '10px'}}></div>
      <Typography variant="body1" gutterBottom>
        Tutors will continually monitor the GitLab repositories to see the team's progress and individual members' contributions to the group project. 
      </Typography>
      <div style={{ height: '10px'}}></div>
      <Typography variant="body1" gutterBottom>
        There is an individual project iteration at the end of the term. Students build on the group project to develop their open-ended solutions. 
      </Typography>

      <div style={{ height: '40px'}}></div>
      <Typography variant="h4" component="div" gutterBottom>
        4. Course Evaluation and Development
      </Typography>
      <div style={{ height: '5px'}}></div>
      <Typography variant="body1" gutterBottom>
        This course is evaluated each session using the MyExperience system. The following items are being adjusted for 24T1:
      </Typography>
      <Typography variant="body1" gutterBottom>
        <ol>
          <li>We have removed the exam or individual assessment to reduce student workload toward the end of term significantly. This has increased the weighting of the major project towards 90% and we've don that will increasing the degree to which you are marked individually in the major project.</li>
          <li>We have re-written all tutorials to improve the experience massively.</li>
          <li>We have produced mega-tutorials to significantly improve the resourcing we provide to students.</li>
          <li>Further enhancements to major project spec, automarking, and other quality of life changes.</li>
        </ol>
      </Typography>
    </>
  );
}

export default makePage(CourseOutline24T1, {
  loginRequired: false,
  title: '❤️ Course Outline',
});
