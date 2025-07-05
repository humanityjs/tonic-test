import { ListItem, ListItemButton, ListItemIcon } from '@mui/material';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function NavLink(item: { path: string; icon: React.ReactNode }) {
  const location = useLocation();
  const isActive = location.pathname === item.path;
  return (
    <ListItem
      key={item.path}
      disablePadding
      sx={{ mb: 0.5, padding: 0, width: '55px' }}
    >
      <ListItemButton
        component={Link}
        to={item.path}
        sx={{
          'height': '55px',
          'justifyContent': 'center',
          'padding': 0,
          'borderRadius': 2,
          'bgcolor': isActive ? 'rgba(65, 107, 255, 0.1)' : 'transparent',
          '&:hover': {
            bgcolor: isActive ? 'rgba(65, 107, 255, 0.1)' : '#f5f5f5',
          },
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            justifyContent: 'center',
            color: isActive ? '#416BFF' : '#B8B4CC',
            fontSize: '24px',
          }}
        >
          {item.icon}
        </ListItemIcon>
      </ListItemButton>
    </ListItem>
  );
}

export default NavLink;
