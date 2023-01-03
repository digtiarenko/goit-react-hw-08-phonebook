import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function AuthNav() {
  return (
    <Box
      sx={{
        flexShrink: 1,
        alignSelf: 'flex-end',
        display: { xs: 'flex', sm: 'flex' },
      }}
    >
      <NavLink to="login" style={{ textDecoration: 'none' }}>
        <Button key="LogIn" sx={{ my: 2, color: 'white', display: 'block' }}>
          Log in
        </Button>
      </NavLink>
      <Link to="register" style={{ textDecoration: 'none' }}>
        <Button key="Register" sx={{ my: 2, color: 'white', display: 'block' }}>
          Register
        </Button>
      </Link>
    </Box>
  );
}

export default AuthNav;
