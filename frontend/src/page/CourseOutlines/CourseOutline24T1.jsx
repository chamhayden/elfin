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

         {/*<table>
          <tbody>
           <tr>
            <td><strong>Course Code</strong></td>
            <td>COMP1531</td>
           </tr>
           <tr>
            <td><strong>Course Title</strong></td>
            <td>Web Front-end Programming</td>
           </tr>
           <tr>
            <td><strong>Convenor</strong></td>
            <td><Link to={link('staff/hayden-smith')}>Hayden Smith</Link></td>
           </tr>
           <tr>
            <td><strong>Admin</strong></td>
            <td><Link to={link('staff/hayden-smith')}>Hayden Smith</Link></td>
           </tr>
           <tr>
            <td><strong>Units of Credit</strong></td>
            <td>6</td>
           </tr>
           <tr>
            <td><strong>Course Website</strong></td>
            <td>This website!</td>
           </tr>
           <tr>
            <td><strong>Handbook Entry</strong></td>
            <td><a href="http://www.handbook.unsw.edu.au/undergraduate/courses/current/COMP1531.html">
              http://www.handbook.unsw.edu.au/undergraduate/courses/current/COMP1531.html
             </a></td>
           </tr>
          </tbody>
         </table>
      </Typography>


      <Divider sx={{ mb: 3, mt: 3, }} />


      <Typography variant="h4" component="div" gutterBottom>
        2. Course Summary
      </Typography>

      <Typography variant="body1" gutterBottom>
        COMP1531 aims to develop your confidence in building modern web-based applications to industry standards. This occurs through the introduction of a range of basic concepts surrounding HTML, CSS, Vanilla Javascript, Javascript Declarative Frameworks, UI/UX Principles, Accessibility, Network &amp; Asynchronous Programming, Front-end Testing, and other basic infrastructure.
      </Typography>
      <Typography variant="body1" gutterBottom>
         This course has a heavy emphasis on industry voices, and as such a number of lectures will be given by current front-end developers from industry. These lectures primarily come from employees at <a href="https://canva.com/" target="_blank">Canva</a>, a Sydney-based technology company that does a lot of work with front-end technologies.
      </Typography>    
      <Typography variant="body1" gutterBottom>
         COMP1531 is a challenging course. Front-end development is unlike most things you've experienced at university before. You will find the individual problems you solve much simpler than other level 6 courses, but the time you will feel that you spend on the aggregate of these issues will feel larger. A number of students will find this course quite time consuming if they're hoping to achieve a high mark. We'd encourage you to reflect on this fact before you enrol in the course.
      </Typography>    
      
      <Typography variant="h6" component="div" gutterBottom sx={{ mt: 4 }}>
        2.1. Assumed Knowledge
      </Typography>
      <Typography variant="body1" gutterBottom>
        COMP1531 assumes that you have satisfactorily completed COMP1531 and COMP2521. The main areas of knowledge you'll need from these courses are:
      </Typography>
      <Typography variant="body1" gutterBottom>
        <ul>
          <li>
           A high level understanding of how interpreted scripting languages work (e.g. python), in terms of inputs, interpretation, loose typing, etc
          </li>
          <li>
           Confident use of GIT as a version management tool
          </li>
          <li>
           Basics of HTTP protocol and interacting with web browsers
          </li>
         </ul>
      </Typography>
      <Typography variant="body1" gutterBottom>
        Postgraduate students will need to familiarise themselves with git, specifically, if not already confident, check out the <Link to={link('help/resources')}>resources here</Link>. We have also <a href="https://nw-syd-gitlab.cseunsw.tech/"> provided a lab0 on the tutorials &amp; exercises page</a> that we encourage everyone who hasn't completed COMP1531 to complete prior to the beginning of the course. Basic competency in git is an expectation in COMP1531.
      </Typography>
      <Typography variant="h6" component="div" gutterBottom sx={{ mt: 4 }}>
        2.2. Course Learning Outcomes
      </Typography>
      <Typography variant="body1" gutterBottom>
          After completing this course, students will be able to:
      </Typography>
      <Typography variant="body1" gutterBottom>
        <ol>
          <li>CLO1 : Able to apply Javascript semantics to design, construct, test and debug programs holistically </li>
          <li>CLO2 : Construct programs for web-front end with HTML, CSS, and DOM manipulation</li>
          <li>CLO3 : Use Javascript and CSS frameworks to allow more efficient integration of existing code and components into a final product</li>
          <li>CLO4 : Build stable applications that utilise concurrent programming through use of Javascript's asynchronous programming techniques</li>
          <li>CLO5 : Design and build interfaces that focus on best user experience and accessible design practices</li>
        </ol>
      </Typography>


      <Divider sx={{ mb: 3, mt: 3, }} />


      <Typography variant="h4" component="div" gutterBottom>
        3. Philosophy of teaching web-based front-end
      </Typography>
      <Typography variant="h6" component="div" gutterBottom sx={{ mt: 4 }}>
        3.1. Challenges of teaching front-end
      </Typography>
      <Typography variant="body1" gutterBottom>
        The challenges of teaching front-end in a finite time period are related to the size and scope of knowledge around modern web front-end. Building even the most basic modern web app requires an extreme breadth and depth of abstractions that take typical developers years to become very comfortable with.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Teaching front-end is also challenging due to the rapid advances that are made in the world of web (a good thing), which leads to sprawling and conflicting resources across the internet. This can lead to learning inconsistent or sub-standard practices and programming patterns.
      </Typography>
      <Typography variant="body1" gutterBottom>
        To teach only declarative frameworks (e.g. ReactJS) as an introduction creates the problem of producing capable students who can rapidly produce work, but do so without the fundamental understanding to grow and apply their skills sustainably and with accountability. However, to teach only Vanilla Javascript would neglect the reality that nearly all students in this course will inevitably not be building actual applications with Vanilla Javascript.
      </Typography>
      <Typography variant="h6" component="div" gutterBottom sx={{ mt: 4 }}>
        3.2. Approach to teaching
      </Typography>
      <Typography variant="body1" gutterBottom>
        This course is about spending a term learning both Vanilla Javascript (Javascript without abstractions)  and Javascript Declarative Frameworks (specifically ReactJS). The term will begin with a heavy focus on HTML/CSS, and have topics of UI/UX, Accessibility, and Testing, trickled throughout. The course will be very heavy Vanilla JS to start while slowly tapering off, and will be very light on ReactJS at the start before rapidly getting into more depth.
      </Typography>
      <Typography variant="h6" component="div" gutterBottom sx={{ mt: 4 }}>
        3.3. What isn't included
      </Typography>
      <Typography variant="body1" gutterBottom>
        There will be a number of people who feel strongly about the exclusion of particular topics from the course, such as typescript or more complex state managers (redux, mobx). Often when topics are omitted it's because they aren't <em>fundamental</em>knowledge in the limited weeks this course is offered in.
      </Typography>
      <Typography variant="body1" gutterBottom>
        We've compiled <a href="https://nw-syd-gitlab.cseunsw.tech/COMP1531/21T3/main-content/-/blob/master/FAQ.md">an FAQ</a> to answer these questions. If you still have further questions or comments, we'd encourage you to use the forum linked in the sidebar.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Students with prerequisite knowledge in this course should understand that this is an introductory course with very limited assumed knowledge, and as such, is not a course to extent an already firm foundation of knowledge. If you are already quite competent in the areas taught in this course, please be patient as we will be moving quite slowly by your standards. If this is something that you feel may be frustrating, it may be more appropriate with your skill-set to find a more stimulating course.
      </Typography>


      <Divider sx={{ mb: 3, mt: 3, }} />


      <Typography variant="h4" component="div" gutterBottom>
        4. Teaching Strategies
      </Typography>
      <Typography variant="body1" gutterBottom>
        This course uses the standard set of practice-focused teaching strategies employed by most CSE foundational courses:
      </Typography>
      <Typography variant="body1" gutterBottom>
        <ul>
          <li>Lectures</li>
          <li>Tutorials</li>
          <li>Exercises</li>
          <li>Help Sessions</li>
          <li>Assignments</li>
          <li>Final Exam</li>
        </ul>
      </Typography>
      <Typography variant="h6" component="div" gutterBottom sx={{ mt: 4 }}>
        4.1. Lectures
      </Typography>
      <Typography variant="body1" gutterBottom>
        Lectures will be used to present the theory and practice of the techniques in this course. Although the lectures will primarily focus on the key concepts of software engineering, some lectures will also include practical demonstrations. Lecture slides will be available on the course web page.
      </Typography>
      <Typography variant="body1" gutterBottom>
        On a typical week we will only have the live Monday lecture (2 hours). The live Monday lecture will be replaced by approximately 2 hours of pre-recorded lectures to watch each week. Please note:
      </Typography>
      <Typography variant="body1" gutterBottom>
        <ul>
          <li>It's critical that you watch the 2 hours of pre-recorded lectures each week <em>prior</em> to the Monday lecture</li>
          <li>The length of pre-recorded and live lectures may vary week to week, but the intention is to keep the average weekly duration at 4 hours across the term.</li>
          <li>In general, industry driven lectures are more likely to be in the pre-recorded format</li>
          <li>Lecture notes for the live lectures may only be released a day or two before the lecture. This is because as part of the teaching strategy for this course the live lectures are designed to essentially "supplement" and "round-off" the pre-recorded lectures, so it's natural to wait for some feedback from students before over-planning these.</li>
        </ul>
      </Typography>
      <Typography variant="body1" gutterBottom>
        You can see the <Link to={link('timetable/lectures')}>schedule for lectures here</Link>, and the list of <Link to={link('content/lectures')}>lecture videos and content here</Link>.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Because lectures will be delivered from a <em>range</em> of people, it's important that students are prepared for differences in slide format and teaching style.
      </Typography>

      <Typography variant="h6" component="div" gutterBottom sx={{ mt: 4 }}>
        4.2 Tutorials
      </Typography>
      <Typography variant="body1" gutterBottom>
        <strong>Tutorials</strong> are 1 hour lessons every week that help clarify ideas from lectures and work through exercises based on the lecture material. You should make sure that you use them effectively by examining in advance the material to be covered in each week's tutorial, by asking questions, by offering suggestions and by generally participating.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Tutorial activities can be found by going to the <Link to={link('content/tutorials/week')}>tutorials page</Link>. Tutorial solutions are available on the solution branch of the exercises gitlab repo. Tutorials do not contribute to your final mark.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Tutorials will be run via Zoom.
      </Typography>
      
      <Typography variant="h6" component="div" gutterBottom sx={{ mt: 4 }}>
        4.3. Help Sessions
      </Typography>
      <Typography variant="body1" component="div" gutterBottom>
        Help sessions are unprepared drop-in "clinics" where students and groups can go to seek help about course related matters, whether that be the project, tutorials, or exercises. Current tutors or lab assistants will supervise each help session.
      </Typography>
      <Typography variant="body1" component="div" gutterBottom>
        Help sessions will be run via Zoom.
      </Typography>
      <Typography variant="body1" component="div" gutterBottom>
        A timetable for help sessions can be found <Link to={link('timetable/help-sessions')}>here</Link>.
      </Typography>
      <Typography variant="h6" component="div" gutterBottom sx={{ mt: 4 }}>
        4.4. Assignments
      </Typography>
      <Typography variant="body1" component="div" gutterBottom>
        There will be a series of assignments which will run through the teaching period from weeks 1-10 and contributes to <strong>80%</strong> of the overall course mark.
      </Typography>
      <Typography variant="body1" component="div" gutterBottom>
        Assignments will be the platform you have to study and learn the material in substantially more depth. Your assignments will be completed via gitlab.
      </Typography>
      <Typography variant="body1" component="div" gutterBottom>
        The intention is that the third assignment will be completed in a pair. You are able to opt out of this and work alone (at your own expense!). You can choose your pair, otherwise we will assign you a partner. You can pair up with any student in the course.
      </Typography>
      <Typography variant="body1" component="div" gutterBottom>
          Information on assignments can be found in the links in section 5 (Assessment).
      </Typography>
      <Typography variant="h6" component="div" gutterBottom sx={{ mt: 4 }}>
        4.6. Final Exam
      </Typography>
      <Typography variant="body1" component="div" gutterBottom>
        There will be a centrally timetabled final exam which will in your UNSW exam timetable. The exam may contain a mixture of multiple choice questions, short answer questions, and programming exercises. More specific details of the exam will be provided through the course.
      </Typography>
      <Typography variant="body1" component="div" gutterBottom>
        If you cannot attend the final exam because of illness or misadventure, then you must submit a Special Consideration request, with documentation, through MyUNSW within 72 hours of the start of the exam exam. If your request is reasonable, then you will be awarded a Supplementary Exam. No supplementary exams will be provided for students who score marks 49 or below on grounds of being "close" to a pass.
      </Typography>
      <Typography variant="body1" component="div" gutterBottom>
        Information on the final exam can be found in the links in section 5 (Assessment).
      </Typography>


      <Divider sx={{ mb: 3, mt: 3, }} />


      <Typography variant="h4" component="div" gutterBottom>
        5. Assessment
      </Typography>
      <TableContainer component={Paper} sx={{ minWidth: 250, maxWidth: 4500 }}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Assess</TableCell>
              <TableCell>Weighting</TableCell>
              <TableCell>Due Date</TableCell>
              <TableCell>Individual/Pair</TableCell>
              <TableCell>Link</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">Ass 1</TableCell>
              <TableCell>15%</TableCell>
              <TableCell>Week 3, Friday</TableCell>
              <TableCell>Individual</TableCell>
              <TableCell>
                <Button variant="contained" onClick={() => redirect('assessments/assignments/ass1')}>View</Button>
              </TableCell>
            </TableRow>
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">Ass 2</TableCell>
              <TableCell>5%</TableCell>
              <TableCell>Week 4, Friday</TableCell>
              <TableCell>Individual</TableCell>
              <TableCell>
                <Button variant="contained" onClick={() => redirect('assessments/assignments/ass2')}>View</Button>
              </TableCell>
            </TableRow>
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">Ass 3</TableCell>
              <TableCell>30%</TableCell>
              <TableCell>Week 7, Friday</TableCell>
              <TableCell>Individual</TableCell>
              <TableCell>
                <Button variant="contained" onClick={() => redirect('assessments/assignments/ass3')}>View</Button>
              </TableCell>
            </TableRow>
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">Ass 4</TableCell>
              <TableCell>30%</TableCell>
              <TableCell>Week 10, Friday</TableCell>
              <TableCell>Pair (see below)</TableCell>
              <TableCell>
                <Button variant="contained" onClick={() => redirect('assessments/assignments/ass4')}>View</Button>
              </TableCell>
            </TableRow>
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">Exam</TableCell>
              <TableCell>20%</TableCell>
              <TableCell>Exam Period</TableCell>
              <TableCell>Individual</TableCell>
              <TableCell>
                <Button variant="contained" onClick={() => redirect('assessments/exam')}>View</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <br />

      <Typography variant="body1" component="div" gutterBottom>
        For pair assignments, you complete them a pair of your choice. If you don't have a pair, we will find one for you. You can also choose to work alone (this is something we arguably should not offer, but we do because we know there are exceptional circumstances), but we strongly do not recommend this as the workload is much higher for an individual. If the workload is a concern, work as a pair (how it's designed).
      </Typography>
      <Typography variant="body1" component="div" gutterBottom>
        Nominations for your pair (or to work alone) must be complete by the end of week 5. Information about this will be distributed in weekly notices.
      </Typography>
      <Typography variant="body1" component="div" gutterBottom>
        Pairs will be <b>required</b> to contribute regularly to gitlab and in reasonably equal contributions as we still assess contributions individually (there is no blanket group mark assigned). Failure to do so may result in a loss of marks.
      </Typography>
         

      <Divider sx={{ mb: 3, mt: 3, }} />


      <Typography variant="h4" component="div" gutterBottom>
        6. Course Schedule / Timetable
      </Typography>
      <Typography variant="body1" component="div" gutterBottom>
        The timetable for this course is outlined clearly in the timetable for <Link to={link('timetable/lectures')}>lectures</Link>, <Link to={link('timetable/tutorials')}>tutorials</Link>, and <Link to={link('timetable/help-sessions')}>help sessions</Link>.
      </Typography>

      <Typography variant="body1" component="div" gutterBottom>
        The content schedule is outlined below:
      </Typography>

      <Typography variant="body1" component="div" gutterBottom>
        <b>Week 1</b>
        <ul>
          <li>Course Overview</li>
          <li>Intro to Git</li>
          <li>HTML Fundamentals</li>
          <li>Image Types</li>
          <li>CSS Rules</li>
          <li>More Tags</li>
          <li>CSS Formatting</li>
          <li>CSS Layouts</li>
          <li>Flexbox</li>
          <li>SVGs</li>
          <li>Pre-processors</li>
          <li>zindex</li>
          <li>CSS Showcase</li>
          <li>Fonts</li>
        </ul>
      </Typography>
      <Typography variant="body1" component="div" gutterBottom>
        <b>Week 2</b>
        <ul>
          <li>Demo: HTML/CSS Page</li>
          <li>Mobile CSS</li>
          <li>Using CSS Frameworks</li>
          <li>CSS Grids</li>
          <li>Dev Tools</li>
          <li>Javascript Intro (compared to C)</li>
          <li>Javascript Language Features & Syntax</li>
          <li>Javascript Advanced Functions</li>
          <li>The Javascript Ecosystem</li>
          <li>Node Package Manager</li>
          <li>NPM Advanced</li>
        </ul>
      </Typography>
      <Typography variant="body1" component="div" gutterBottom>
        <b>Week 3</b>
        <ul>
          <li>Demo: Javascript - NodeJS</li>
          <li>Introduction</li>
          <li>DOM</li>
          <li>Events</li>
          <li>Javascript Closures</li>
          <li>Forms</li>
          <li>Local Storage</li>
        </ul>
      </Typography>
      <Typography variant="body1" component="div" gutterBottom>
        <b>Week 4</b>
        <ul>
          <li>Demo: Javascript - Browser</li>
          <li>Events & Callbacks</li>
          <li>Promises</li>
          <li>Await / Async</li>
          <li>AJAX</li>
          <li>XMLHttpRequest (XHR)</li>
          <li>Fetch</li>
          <li>JSON & Data-interchange formats</li>
          <li>Understand HTTP Servers</li>
        </ul>
      </Typography>
      <Typography variant="body1" component="div" gutterBottom>
        <b>Week 5</b>
        <ul>
          <li>Demo: Ass2 - Async & Planning</li>
          <li>UI Fundamentals</li>
          <li>Good & Bad UI 1</li>
          <li>Good & Bad UI 2</li>
          <li>Perceivability</li>
          <li>Operabilitity</li>
          <li>Understandability</li>
          <li>Robustness</li>
        </ul>
      </Typography>
      <Typography variant="body1" component="div" gutterBottom>
        <b>Week 7</b>
        <ul>
          <li>Using Git in pairs</li>
          <li>Introduction</li>
          <li>Basic "Global CSS" Usage</li>
          <li>Lifescycle</li>
          <li>Transpilation</li>
          <li>useState hook</li>
          <li>Demo: ReactJS Intro & A11y</li>
          <li>useEffect hook</li>
          <li>Using Fetch & Hooks</li>
          <li>Working with Multiple Files</li>
          <li>Components & Props</li>
          <li>Before you code</li>
        </ul>
      </Typography>
      <Typography variant="body1" component="div" gutterBottom>
        <b>Week 8</b>
        <ul>
          <li>Demo: ReactJS in Ass3</li>
          <li>Linting</li>
          <li>Routing & SPAs</li>
          <li>CSS Frameworks</li>
          <li>useContext</li>
          <li>State management</li>
          <li>Class components</li>
          <li>Usability testing</li>
          <li>Figma & Component Libraries</li>
          <li>Pre-rendering</li>
        </ul>
      </Typography>
      <Typography variant="body1" component="div" gutterBottom>
        <b>Week 9</b>
        <ul>
          <li>Demo: ReactJS Further</li>
          <li>Introduction</li>
          <li>Component Testing</li>
          <li>UI Testing</li>
          <li>UI Testing (Demo)</li>
        </ul>
      </Typography>
      <Typography variant="body1" component="div" gutterBottom>
        <b>Week 10</b>
        <ul>
          <li>Final Exam Overview</li>
        </ul>
      </Typography>
          
      <Divider sx={{ mb: 3, mt: 3, }} />


      <Typography variant="h4" component="div" gutterBottom>
        7. Student Conduct
      </Typography>
      <Typography variant="body1" component="div" gutterBottom>
        The <strong>Student Code of Conduct</strong> (<a href="https://student.unsw.edu.au/conduct">Information</a>, <a href="https://www.gs.unsw.edu.au/policy/documents/studentcodepolicy.pdf">Policy</a>) sets out what the University expects from students as members of the UNSW community. As well as the learning, teaching and research environment, the University aims to provide an environment that enables students to achieve their full potential and to provide an experience consistent with the University's values and guiding principles. A condition of enrolment is that students <em>inform themselves</em> of the University's rules and policies affecting them, and conduct themselves accordingly.
      </Typography>
      <Typography variant="body1" component="div" gutterBottom>
        In particular, students have the responsibility to observe standards of equity and respect in dealing with every member of the University community. This applies to all activities on UNSW premises and all external activities related to study and research. This includes behaviour in person as well as behaviour on social media, for example Facebook groups set up for the purpose of discussing UNSW courses or course work. Behaviour that is considered in breach of the Student Code Policy as discriminatory, sexually inappropriate, bullying, harassing, invading another's privacy or causing any person to fear for their personal safety is serious misconduct and can lead to severe penalties, including suspension or exclusion from UNSW.
      </Typography>
      <Typography variant="body1" component="div" gutterBottom>
        If you have any concerns, you may raise them with your lecturer, or approach the <a href="mailto:ethics-officer@cse.unsw.edu.au">School Ethics Officer</a>, <a href="mailto:grievance-officer@cse.unsw.edu.au">Grievance Officer</a>, or one of the student representatives.
      </Typography>
      <Typography variant="body1" component="div" gutterBottom>
        <b>Plagiarism</b> is <a href="https://student.unsw.edu.au/plagiarism">defined as</a> using the words or ideas of others and presenting them as your own. UNSW and CSE treat plagiarism as academic misconduct, which means that it carries penalties as severe as being excluded from further study at UNSW. There are several on-line sources to help you understand what plagiarism is and how it is dealt with at UNSW:
      </Typography>
      <Typography variant="body1" component="div" gutterBottom>
        <ul>
          <li><a href="https://student.unsw.edu.au/plagiarism">Plagiarism and Academic Integrity</a></li>
          <li><a href="https://www.gs.unsw.edu.au/policy/documents/plagiarismprocedure.pdf">UNSW Plagiarism Procedure</a></li>
         </ul>
      </Typography>
      <Typography variant="body1" component="div" gutterBottom>
        Make sure that you read and understand these. Ignorance is not accepted as an excuse for plagiarism. In particular, you are also responsible that your assignment files are not accessible by anyone but you by setting the correct permissions in your CSE directory and code repository, if using. Note also that plagiarism includes paying or asking another person to do a piece of work for you and then submitting it as your own work.
      </Typography>
      <Typography variant="body1" component="div" gutterBottom>
        UNSW has an ongoing commitment to fostering a culture of learning informed by academic integrity. All UNSW staff and students have a responsibility to adhere to this principle of academic integrity. Plagiarism undermines academic integrity and is not tolerated at UNSW. Plagiarism at UNSW is defined as using the words or ideas of others and passing them off as your own.
      </Typography>
      <Typography variant="body1" component="div" gutterBottom>
        If you haven't done so yet, please take the time to read the full text of
      </Typography>
      <Typography variant="body1" component="div" gutterBottom>
        <ul>
          <li><a href="https://student.unsw.edu.au/plagiarism">UNSW's policy regarding academic honesty and plagiarism</a></li>
        </ul>
      </Typography>
      <Typography variant="body1" component="div" gutterBottom>
        The pages below describe the policies and procedures in more detail:
      </Typography>
      <Typography variant="body1" component="div" gutterBottom>
        <ul>
          <li><a href="https://www.gs.unsw.edu.au/policy/documents/studentcodepolicy.pdf">Student Code Policy</a></li>
          <li><a href="https://www.gs.unsw.edu.au/policy/documents/studentmisconductprocedures.pdf">Student Misconduct Procedure</a></li>
          <li><a href="https://www.gs.unsw.edu.au/policy/documents/plagiarismpolicy.pdf">Plagiarism Policy Statement</a></li>
          <li><a href="https://www.gs.unsw.edu.au/policy/documents/plagiarismprocedure.pdf">Plagiarism Procedure</a></li>
        </ul>
      </Typography>
      <Typography variant="body1" component="div" gutterBottom>
        You should also read the following page which describes your rights and responsibilities in the CSE context:
      </Typography>
      <Typography variant="body1" component="div" gutterBottom>
        <ul>
          <li><a href="https://www.engineering.unsw.edu.au/computer-science-engineering/about-us/rganisational-structure/student-services/policies/essential-advice-for-cse-students">
            Essential Advice for CSE Students</a></li>
        </ul>
      </Typography>
         

      <Divider sx={{ mb: 3, mt: 3, }} />


      <Typography variant="h4" component="div" gutterBottom>
        8. Resources for Students
      </Typography>
      <Typography variant="body1" component="div" gutterBottom>
        There is no single text book that covers all of the material in this course at the right level of detail and using the same technology base as we are. The lectures should provide sufficient detail to introduce topics, and you will then study them in further depth in the tutorials, exercises and assignments. For some lectures, further reading material may be given for students who wish to gain a deeper understanding.
      </Typography>

      <Divider sx={{ mb: 3, mt: 3, }} />

      <Typography variant="h4" component="div" gutterBottom>
        9. Course Evaluation and Development 
      </Typography>
      <Typography variant="body1" component="div" gutterBottom>
         This course is evaluated each session using the MyExperience system.
      </Typography>
      <Typography variant="body1" component="div" gutterBottom>
        This is being addressed during 24T1. 
      </Typography>
      <Typography variant="body1" component="div" gutterBottom>
        <ul>
          <li>New assessments in order to keep the course fresh</li>
          <li>More streamlined automatic marking of second assignment</li>
          <li>Processes to ensure more consistent replies on forum</li>          
        </ul>
      </Typography>*/}
    </>
  );
}

export default CourseOutline24T1;
