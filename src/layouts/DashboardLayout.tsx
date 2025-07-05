import { Box, CssBaseline } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const DashboardLayout = () => {
  return (
    <Box sx={{ display: 'flex', bgcolor: '#F9F8FF', width: '100%' }}>
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
        }}
      >
        {/* Page Content */}
        <Box sx={{ py: '38px', pl: '8px' }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
