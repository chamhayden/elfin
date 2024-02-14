import SubNav from '../component/SubNav';

import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';

import makePage from '../component/makePage';
import Table from '../component/Table';

import { Context, useContext } from '../context';

const DueDateAdjustments = () => {
  return <>
  	<h2>1. Applicability</h2>
	<p>This page explains how COMP1531 handles students who either:
	</p>
	<ul>
		<li>Have ELS/ELP adjustments throughout the term; or</li>
		<li>Have special consideration approved for a particular week</li>
	</ul>
	<h2>2. How adjustments are made</h2>
	<h4>2.1. For Labs</h4>
	<p>When a student is granted special consideration for a lab or has an ELS 1 week extension, we do not provide an extension. Instead, we waive their requirement to complete that lab. The mark for this lab that they skipped is then calculated and applied at the end of term. This awards an estimate/average mark for the missed lab based on the score of other labs.
	</p>
	<h4>2.2. For the project</h4>
	<p>For the major project, we do not provide extensions to individuals or groups because of an individual having an extension in that project. We work this by instead of providing an extension we will in general mark you individually under the assumption that you will have completed less than other members in your group. For example, to oversimplify for explanation purposes, if you have 3 weeks to complete an iteration, but normally would have a 1 week extension, you only have 75% of the time to "do your best work" so we would only expect you to complete 75% of the work of your other group members in order to be marked individually the same. In some more specific cases we may take an alternative approach.
	</p>
	<h2>3. What actions to take</h2>
	<h4>3.1. Special Consideration</h4>
	<p>If your special consideration is approved, no further action is required. The teaching team will handle everything. For the major project, the teaching team will communicate directly with your tutor to update them and have the mark adjusted immediately. For labs, the teaching team will make the adjustment <em>at the end of term</em> in a bulk update.
	</p>
	<h4>3.2. ELS/ELP</h4>
	<p>If you have an ELS/ELP document, you need to:
	</p>
	<ol>
		<li>Contact cs1531@cse.unsw.edu.au to let them know about the document</li>
		<li>Contact your tutor and lab assist to let them know what typical "extension" you would receive (usually 1 week) so that they can make adjustments accordingly. Please note, you are note required to share your ELS/ELP document with tutors. You should tell your tutor if they require validation or confirmation they should contact cs1531@cse.unsw.edu.au.</li>
	</ol>
  </>

}

export default makePage(DueDateAdjustments, {
  loginRequired: true,
  title: '⚽️ ELS and Special Consideration Adjustments',
});