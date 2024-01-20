// assets
import { LoginOutlined, ProfileOutlined } from '@ant-design/icons';
import { IconAdjustmentsHorizontal } from '@tabler/icons-react';
import TuneIcon from '@mui/icons-material/Tune';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import EmailIcon from '@mui/icons-material/Email';
import UpcomingIcon from '@mui/icons-material/Upcoming';

// icons
const icons = {
  LoginOutlined,
  ProfileOutlined,
  IconAdjustmentsHorizontal,
  TuneIcon,
  ShoppingCartIcon,
  CreditCardIcon,
  ToggleOnIcon,
  QuestionAnswerIcon,
  EmailIcon,
  UpcomingIcon
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages = {
  id: 'authentication',
  // title: 'Services',
  type: 'group',
  children: [
    {
      id: 'login1',
      title: 'Login',
      type: 'item',
      url: '/login',
      icon: icons.LoginOutlined,
      target: true
    },
    // {
    //   id: 'register1',
    //   title: 'Register',
    //   type: 'item',
    //   url: '/register',
    //   icon: icons.ProfileOutlined,
    //   target: true
    // },
    {
      id: 'master',
      title: 'Master',
      type: 'item',
      // url: '/login',
      icon: icons.ShoppingCartIcon,
      target: false
    },
    {
      id: 'invoice',
      title: 'Invoice',
      type: 'item',
      // url: '/register',
      icon: icons.CreditCardIcon,
      target: false
    },
    {
      id: 'dispute',
      title: 'Dispute',
      type: 'item',
      // url: '/register',
      icon: icons.ToggleOnIcon,
      target: false
    },
    {
      id: 'budget',
      title: 'Budget',
      type: 'item',
      // url: '/register',
      icon: icons.QuestionAnswerIcon,
      target: false
    },
    {
      id: 'approval',
      title: 'Approval',
      type: 'item',
      // url: '/register',
      icon: icons.TuneIcon,
      target: false
    },
    {
      id: 'asset',
      title: 'Asset',
      type: 'item',
      // url: '/register',
      icon: icons.EmailIcon,
      target: false
    },
    {
      id: 'statement',
      title: 'Statement',
      type: 'item',
      // url: '/register',
      icon: icons.EmailIcon,
      target: false
    },
    {
      id: 'notification',
      title: 'Notification',
      type: 'item',
      // url: '/register',
      icon: icons.UpcomingIcon,
      target: false
    },
    {
      id: 'settings',
      title: 'Settings',
      type: 'item',
      // url: '/register',
      icon: icons.TuneIcon,
      target: false
    }
  ]
};

export default pages;
