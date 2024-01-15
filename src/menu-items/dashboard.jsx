// assets
import { DashboardOutlined } from '@ant-design/icons';
import WindowIcon from '@mui/icons-material/Window';

// icons
const icons = {
  DashboardOutlined,
  WindowIcon
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
  id: 'group-dashboard',
  // title: 'Navigation',
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard/default',
      icon: icons.WindowIcon,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
