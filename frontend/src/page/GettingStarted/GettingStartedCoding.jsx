import React from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import TheatersIcon from '@mui/icons-material/Theaters';
import SchoolIcon from '@mui/icons-material/School';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import { Outlet } from 'react-router-dom';

import SubNavWrapper from '../../component/SubNavWrapper';
import makePage from '../../component/makePage';

const GettingStartedCoding = ({ }) => {
  return (
    <>
      <p>For COMP1531, all you need is the program <strong>NodeJS,</strong> the program<strong> Git</strong>, and <strong>VSCode</strong>. How you these setup will depend on which kind of environment you try and setup. You can choose one below:
      </p>
      <ul>
        <li>🍎1. Using the CSE machines directly via VLAB (beginners with stable internet)</li>
        <li>🍊2. Running everything locally on Windows (for advanced students)</li>
        <li>🍏3. Running everything locally on MacOS (for advanced students)</li>
      </ul>

      <h2 id="vlab">🍎 1. Recommended: Using the CSE machines directly via VLAB</h2>
        <p>It's super easy. Open any CSE terminal. Run the command <code>1531 setup</code>. Then close and reopen your terminal.</p>

      <h2 id="windows">🍊 2. Alternative 1: Running everything locally on Windows</h2>
        <h4>1. Installing your editor<br /></h4>
        <p>Firstly, go and install <a href="https://code.visualstudio.com/docs/setup/windows">VSCode for windows</a>.
        </p>
        <h4>2. Installing git<br /></h4>
        <p>Windows is a very different environment to use the terminal on than Linux based systems (which evolved from <a href="https://en.wikipedia.org/wiki/Unix" rel="nofollow">UNIX</a>, as opposed to windows which evolved from <a href="https://en.wikipedia.org/wiki/DOS" rel="nofollow">DOS</a>). Unix based systems are more commonplace in research and industry, so instead of using the windows terminals we encourage you to use the linux terminals inside of windows. To set this up, we'll be creating a Linux system inside Windows using a tool called <a href="https://learn.microsoft.com/en-us/windows/wsl/about" rel="nofollow">Windows Subsystem for Linux (WSL)</a>.
        </p>
        <ol>
          <li>Open up Powershell as an administrator, then run the command <code>wsl --install</code>. You might need to wait a few minutes for it to complete.</li>
          <li>If you get an error saying that virtualisation is disabled, you might need to change some settings in your BIOS. The specific steps you need to follow depend on your computer, but here are <a href="https://learn.microsoft.com/en-us/windows/wsl/install">some generic instructions that may help.</a></li>
          <li>Once WSL is installed, you'll need to restart your computer. It'll probably do a Windows Update since we added a few new features to Windows. When you log back in, the second stage of the installation should begin automatically. If a terminal doesn't open within a minute or so, you should launch the newly-installed Ubuntu app from your start menu.</li>
          <li>Wait for the installation to finish. For some people, this takes 30 seconds, but for others it can take up to half an hour. Make sure you don't stop the process, or you might need to <a href="https://superuser.com/questions/1619233/completely-reinstall-wsl/1755410#1755410">delete and reinstall WSL.</a></li>
          <li>Once it's finished installing, you'll be prompted to <code>Enter a new UNIX username</code>. This name should be entirely lowercase with no whitespace. Just use your first name.</li>
          <li>You'll then be asked to create a password. When you type this in, it won't be shown on-screen for security reasons, but it is reading your input. Make sure you choose a password you remember, since it can be a challenge to reset it.</li>
          <li>Confirm your password and you'll be dropped into a new Linux terminal session (you can check by running the <code>uname</code> command). The first thing you should do is update your system by running &lt;code&gt;sudo apt update  sudo apt upgrade. If possible, you should memorise and run this command every few weeks to make sure your Linux system stays up-to-date.</li>
          <li>The next thing we need to do is link WSL to VS Code. Open VS Code from the Windows start menu, then go to the extensions panel (<em>4 boxes</em> icon on the left-hand side).</li>
          <li>Search for and install the WSL extension. It tells VS Code how to communicate with the Windows Subsystem for Linux, which allows you to use VS Code on Windows with the back-end running on Linux.</li>
          <li>Once the extension has installed, you should see a “two arrows” button in the bottom-left corner of your VS Code window. Click it and choose to <code>Connect to WSL.</code> Wait for it to download and install the backend.</li>
          <li>When the VS Code server is installed to WSL, open a terminal by pressing <code>Ctrl + `</code> (control back-tick). You should see that it connects to WSL's terminal automatically.</li>
          <li>Finally, make sure Git is installed by running <strong>git --version</strong> in your terminal. If you see something like <strong>git version 2.40.1</strong>, it is installed correctly. If you get a <strong>git: command</strong> not found error, you should install Git by running <code>sudo apt install git</code>. Congratulations, you've successfully set up WSL and git!</li>
        </ol>
        <h4>3. Installing NodeJS</h4>
        <ol>
          <li>Now that we've done the heavy lifting in step (2), we will go install NodeJS.The most reliable strategy is to use a tool called  <a href="https://github.com/nvm-sh/nvm#readme">NVM</a>
          <ol>
            <li>Copy the command listed in <a href="https://github.com/nvm-sh/nvm#installing-and-updating">the installation instructions</a> and paste it into a WSL terminal.</li>
            <li>After executing the installation command, close and reopen your terminal.</li>
            <li>Run <code>nvm install 18</code>, which will download and install the correct version of NodeJS.After it completes, run the <code></code>node --version</code> command to check if it installed correctly. You should see something like "v18.16.0" as the output.</li>
          </ol>
          <ol>
          </ol></li>
        </ol>

      <h2 id="mac">🍏 3. Alternative 2: Running everything locally on MacOS</h2>
        <h4>1. Installing your editor<br /></h4>
        <p>Firstly, go and install <a href="https://code.visualstudio.com/docs/setup/mac">VSCode for </a><a href="https://code.visualstudio.com/docs/setup/mac">MacOSX</a>.
        </p>
        <p>Finally, you'll need to add VS Code to your <code>PATH</code> variable if you're using <strong>MacOS</strong>. To do this, press Cmd+Shift+P then type “PATH” into the command palette, choosing the option to &lt;code&gt;install the code command in your PATH.<br />
        </p>
        <h4>2. Installing git</h4>
        <p>Open the terminal app, then run <code>git</code>, which will trigger a prompt to download extra features. Wait for this to download.
        </p>
        <h4>3. Installing NodeJS</h4>
        <p>Now that we've done the heavy lifting in step (2), we will go install NodeJS.
        </p>
        <p>The most reliable strategy is to use a tool called <a href="https://github.com/nvm-sh/nvm#readme">NVM</a>.
        </p>
        <ol>
          <li>Copy the command listed in <a href="https://github.com/nvm-sh/nvm#installing-and-updating">the installation instructions</a> and paste it into a terminal. </li>
          <li>After executing the installation command, close and reopen your terminal.</li>
          <li>Run <code>nvm install 18</code>, which will download and install the correct version of NodeJS.</li>
          <li>After it completes, run the <code>node --version</code> command to check if it installed correctly. You should see something like "v18.16.0" as the output.</li>
        </ol>
    </>
  );
};

export default makePage(GettingStartedCoding, {
  loginRequired: true,
  title: '👌 Getting Started - Coding Environment',
});
