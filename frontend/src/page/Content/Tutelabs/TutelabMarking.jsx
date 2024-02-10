import React from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate, useLocation } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import TheatersIcon from '@mui/icons-material/Theaters';
import SchoolIcon from '@mui/icons-material/School';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import { Outlet } from 'react-router-dom';

import LabMark1 from '../../../asset/labmark1.png';
import LabMark2 from '../../../asset/labmark2.png';
import LabMark3 from '../../../asset/labmark3.png';
import LabMark4 from '../../../asset/labmark4.png';

import makePage from '../../../component/makePage';

const TutelabMarking = ({ }) => {
  return (
    <>
      <h2 style={{ textDecoration: 'underline' }}>
      1. 👀 Getting your lab marks
      </h2>
      <Typography variant="body1">All labs are automarked. This means that your project tutor will not manually mark your code and tests. Instead, we run linting, testing, coverage, or other scripts on the <strong>latest commit</strong> on your <code>master</code> branch after the lab deadline.</Typography>
      <Typography variant="body1">Lab marks are uploaded every Friday (4 days after due date) by 11pm. You can view your marks via your grades button on the sidebar</Typography>

      <h3>1.1. 👋🏽 FAQs</h3>
      <Typography variant="body1"><b>What if... My mark is negative? (-1/1)</b></Typography>
      <ul>
        <li>If your mark for a lab shows up as -0.1, either:</li>        
        <ul>
          <li>Sometimes your code setup is incompatible and the pipeline is unable to run our tests. For example, your <code>package.json</code> is not JSON-formatted correctly. To fix these issues, make sure your setup files are in the correct format and any packages you use work on the CSE machines. You can ask your project tutor for a re-run after fixing these issues, assuming these are the only changes you've made.</li>
          <li>An error on our end has occurred - just let your project tutor know about this or post it on the forum.</li>
        </ul>
      </ul>
      <p><b>What if... My mark is zero? (0/1)</b></p>
      <ul>
        <li>If your mark for a lab shows up as 0.0, you may have either failed all the tests or your program could be producing an infinite loop. We timeout tests at ~1-2 minutes (depending on the lab) and any timeouts will result in a 0 automark score.</li>
        <li>To debug potential infinite loops you could view the automarking job for more details or manually run the tests to see which one causes the infinite loop.</li>
      </ul>

      <h2 style={{ textDecoration: 'underline' }}>2. 🤔 Understand why you got those marks</h2>
      <p>Start by clicking on the pipeline job on a lab's marking branch.</p>
      <p>You can view this job from the GitLab sidebar as per screenshots below.</p>
      <img src={LabMark1} style={{ maxWidth: 'calc(100vw - 300px)' }} /><br />
      <p>Click on Build > Pipelines</p>
      <img src={LabMark2} style={{ maxWidth: 'calc(100vw - 300px)' }} /><br />
      <p>Click on "Passed" for the latest pipeline on the marking branch (check the branch)</p>
      <img src={LabMark3} style={{ maxWidth: 'calc(100vw - 300px)' }} /><br />
      <p>Click on the automarking job</p>
      <img src={LabMark4} style={{ maxWidth: 'calc(100vw - 300px)' }} /><br />
      
      <h3>2.2. 🤔 Understanding the Automarking</h3>
      <p>Viewing the <code>automarking</code> job is helpful in understanding and <strong>debugging</strong> why you might have received a certain mark. The job will show <strong>what tests were run</strong>, how your code performed, and the resulting mark at the bottom. If you don't understand why you received a mark, read the output for that job carefully.</p>
      <p>You can also read the <code>.gitlab-ci.yml</code> file on the marking branch to see what specific commands were used to test your code.</p>
      <p>Note: The automarking job passing with a green tick does NOT mean you have received full marks for that lab. It just means that automarking has finished running successfully (and has not for example timed out due to an infinite loop)- you should <strong>click into the job</strong> to view your actual mark.</p>

      <h3>2.3. 💡 Automarking Job Status</h3>
      <p>If your automarking pipeline job does not show a green tick but instead:</p>
      <ul>
        <li>❌ failed/cancelled: either your code setup is incorrect (e.g. you've forgotten to push your package.json and package-lock.json) or something has gone wrong on our side and we're in the process of fixing it. This will likely be resolved in the background, although you can also post on the course forum.</li>
        <li>🟰 pending: the marking job is waiting to be picked up by the GitLab runner. Check back at a later time.</li>
        <li>▶ running: the scripts that we run to test your code are in the process of marking. Check back at a later time.</li>
      </ul>

      <h3>2.4. 🍱 View/Run Archived Automarking Jobs Locally</h3>
      <p>In the case that clicking this shows "This job is archived", you can <strong>view auto-test results locally</strong> by, e.g. for lab01_leap, running the following commands one by one (do not copy the shell prompt, '$'):</p>
      <p><code>$ git checkout marking</code></p>
      <p><code>$ bash local_automarking.sh submission    # This can be any branch</code></p>
      <p>Note that this process will require Python3 to be installed if you are not using a CSE machine, e.g. through VLAB or SSH.</p>

      <h2 style={{ textDecoration: 'underline' }}>3. 🌀 Requesting a re-running of the automarking</h2>
      <p>Since lab solutions are released together with our automarking, we will <strong>only re-run</strong> marking for <strong>non-programming mistakes</strong> (e.g. typos, syntax errors, CI crashes) for students. No re-runs are given for misinterpreting the specification (e.g. returning a string instead of an object for error cases, or using the key "name" instead of "restaurantName", etc), missing edge cases or any other programming error.</p>
      <p>Please note that for labs, reruns are <strong>not</strong> intended to "provide a second chance for you to fix your mistakes", but rather "for you to be given a fair(er) mark for your initial submission".</p>
      <p>Late submissions are not grounds for reruns. This includes forgetting to push your code even if it was presumably committed on time, as commit time can be <a href="https://git.uwaterloo.ca/cscf/gitlab-assignments#caveats">unreliable</a>.</p>
      <p>In the event that a particular line of code in a function causes the entire test suite to fail, the body of the function should be fully commented out or removed (no marks will be awarded for this function) during the rerun.</p>
      <p>Re-run requests are only valid within <strong>one week</strong> after the lab deadline.</p>
      <p>To get an automarking re-run for a lab:</p>
      <ol>
        <li>Push the minor fixes onto a new branch called <code>submission-fix</code></li>
        <li>Create a merge request from your submission-fix branch to the submission branch (Note: <em>not</em> master)</li>
        <li>Inform your project tutor about the changes you've made for the relevant lab, and send them the link to this merge request.</li>
        <li>Assuming the changes you make are valid, your project tutor will then merge this into the <code>submission</code> branch and re-run your pipeline on the marking branch.</li>
      </ol>
      <p>You can check the latest automarking job to see your new mark, and these marks will be uploaded to webcms by the next Friday.</p>
    </>
  );
};

export default makePage(TutelabMarking, {
  loginRequired: true,
  title: '🟢 Tute & Lab Marking',
});
