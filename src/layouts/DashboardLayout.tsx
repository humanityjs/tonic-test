import { Box, CssBaseline } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const DashboardLayout = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        bgcolor: '#F9F8FF',
        width: '100%',
        alignItems: 'flex-start',
      }}
    >
      <CssBaseline />

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: '#F9F8FF',
          minHeight: '100vh',
          width: {
            xl: 'calc(100% - 160px)',
            lg: 'calc(100% - 120px)',
            md: 'calc(100% - 100px)',
            sm: 'calc(100% - 80px)',
            xs: 'calc(100% - 60px)',
          },
          transition: 'all 0.3s ease-in-out',
        }}
      >
        {/* Page Content */}
        <Box sx={{ py: '38px', pl: '8px', pr: '35px' }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
