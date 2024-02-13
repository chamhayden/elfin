import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ForumIcon from '@mui/icons-material/Forum';
import HomeIcon from '@mui/icons-material/Home';
import GradingIcon from '@mui/icons-material/Grading';
import HearingIcon from '@mui/icons-material/Hearing';
import SubjectIcon from '@mui/icons-material/Subject';
import ConstructionIcon from '@mui/icons-material/Construction';
import TheatersIcon from '@mui/icons-material/Theaters';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import WorkIcon from '@mui/icons-material/Work';
import BiotechIcon from '@mui/icons-material/Biotech';
import CollectionsIcon from '@mui/icons-material/Collections';
import StyleIcon from '@mui/icons-material/Style';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import PaletteIcon from '@mui/icons-material/Palette';
import BookIcon from '@mui/icons-material/Book';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import GradeIcon from '@mui/icons-material/Grade';
import HailIcon from '@mui/icons-material/Hail';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import PsychologyIcon from '@mui/icons-material/Psychology';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';

export const getPrimaryNavList = (term) => {
  return [
    {
      title: 'Dashboard',
      loginRequired: false,
      route: '/',
      Icon: SubjectIcon,
      description: 'View the course dashboard',
    },
    {
      title: 'Course Outline',
      loginRequired: false,
      route: '/course-outline',
      Icon: BookIcon,
      description: 'View the course outline to get an overview of the course',
    },
    {
      title: 'Forum',
      route: 'https://edstem.org/au/join/ptQY8C',
      external: true,
      loginRequired: false,
      Icon: ForumIcon,
      description: 'Post questions and get answers about course or content queries',
    },
    {
      title: 'Timetable',
      loginRequired: true,
      Icon: AccessTimeIcon,
      description: 'View the lecture, tutorial, and help session timetable',
      children: [
        {
          title: 'Lectures',
          route: '/timetable/lectures',
          loginRequired: true,
          Icon: TheatersIcon,
          description: 'View the lecture, tutorial, and help session timetable',
        },
        {
          title: 'Tutes & Labs',
          route: '/timetable/tute-labs',
          loginRequired: true,
          Icon: SchoolIcon,
          description: 'View the lecture, tutorial, and help session timetable',
        },
        {
          title: 'Mega-tutorials',
          route: '/timetable/mega-tutes',
          loginRequired: true,
          Icon: BeachAccessIcon,
          description: 'View the lecture, tutorial, and help session timetable',
        },
        {
          title: 'Help Sessions',
          route: '/timetable/help-sessions',
          loginRequired: true,
          Icon: LocalHospitalIcon,
          description: 'View the lecture, tutorial, and help session timetable',
        },
      ]
    },
    {
      title: 'Content',
      loginRequired: true,
      Icon: CollectionsIcon,
      description: '',
      children: [
        {
          title: 'Lectures',
          route: '/content/lectures',
          loginRequired: true,
          Icon: TheatersIcon,
          description: 'View lecture content, slides, and videos',
        },
        {
          title: 'Tutes & Labs',
          route: '/content/tutelabs',
          loginRequired: true,
          Icon: SchoolIcon,
          description: 'View tutorial content, questions, and videos',
        },
        {
          title: 'Major Project',
          route: '/content/project/spec',
          loginRequired: true,
          Icon: RocketLaunchIcon,
          description: 'View lab content',
        },
        {
          title: 'Practice Work',
          route: '/content/practice',
          Icon: PsychologyIcon,
          description: 'A further list of practice activities',
        },
      ],
    },
    {
      title: 'Getting Started',
      route: '/getting-started',
      loginRequired: true,
      Icon: LocalHospitalIcon,
      description: 'Help on getting started with the course',
    },
    {
      title: 'Grades',
      loginRequired: true,
      route: 'https://cgi.cse.unsw.edu.au/~give/Student/sturec.php',
      external: true,
      Icon: GradeIcon,
      description: '',
    },
    {
      title: 'Staff',
      loginRequired: true,
      route: '/staff',
      Icon: HailIcon,
      description: '',
    }
  ];
};
