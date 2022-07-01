import { Outlet, Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UserMenu from './UserMenu';
import AuthNav from './AuthNav';
import { getIsLoggedIn } from '../../redux/auth/authSelectors';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

const SharedLayout = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Link
              style={{
                display: { xs: 'flex' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontSize: 24,
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
              to="/"
            >
              PHONEBOOK
            </Link>

            <Box sx={{ flexGrow: 2, display: { xs: 'flex', sm: 'flex' } }}>
              <NavLink to="contacts">
                <Button
                  key="Contacts"
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  My contacts
                </Button>
              </NavLink>
            </Box>
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </Toolbar>
        </Container>
      </AppBar>
      <Container maxWidth="lg">
        <Outlet />
      </Container>
    </>
  );
};
export default SharedLayout;
