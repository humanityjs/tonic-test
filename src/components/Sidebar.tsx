import {
  DashboardOutlined,
  PolylineOutlined,
  PrivacyTipOutlined,
  SettingsOutlined,
  SmartToyOutlined,
  TuneOutlined,
} from '@mui/icons-material';
import { Avatar, Box, Divider, Drawer, List } from '@mui/material';
import logo from '../assets/logo.png';
import NavLink from './NavLink';

const drawerWidth = 160;

const navigationItems = [
  { path: '/', icon: <DashboardOutlined />, name: 'Dashboard' },
  { path: '/findings', icon: <TuneOutlined />, name: 'Findings' },
  { path: '/reports', icon: <PolylineOutlined />, name: 'Reports' },
  { path: '/security', icon: <PrivacyTipOutlined />, name: 'Security' },
];

const userItems = [
  { path: '/settings', icon: <SettingsOutlined />, name: 'Settings' },
  { path: '/chat', icon: <SmartToyOutlined />, name: 'Chat' },
];

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        'width': drawerWidth,
        'flexShrink': 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          bgcolor: '#F9F8FF',
          borderRight: '0px solid transparent',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        },
      }}
    >
      {/* Logo Section */}
      <Box sx={{ p: 2, pt: 3, textAlign: 'center' }}>
        <img
          src={logo}
          alt="Tonic Logo"
          style={{
            height: 32,
            width: 'auto',
            maxWidth: '100%',
          }}
        />
      </Box>

      <Box
        sx={{
          flexGrow: 1,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <List
          sx={{
            px: 1,
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {navigationItems.map((item) => {
            return (
              <NavLink key={item.path} path={item.path} icon={item.icon} />
            );
          })}
        </List>

        <Divider sx={{ width: '30%' }} />

        <List
          sx={{
            px: 1,
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {userItems.map((item) => {
            return (
              <NavLink key={item.path} path={item.path} icon={item.icon} />
            );
          })}
        </List>
      </Box>

      <Box sx={{ pb: 3 }}>
        <Avatar
          sx={{
            width: 40,
            height: 40,
            bgcolor: '#1976d2',
            backgroundImage: `url(https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </Box>
    </Drawer>
  );
};

export default Sidebar;
