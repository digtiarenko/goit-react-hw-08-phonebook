import { useSelector, useDispatch } from 'react-redux';
import { getUserName } from '../../../redux/auth/authSelectors';
import { logOut } from '../../../redux/auth/authOperations';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// import { Link } from 'react-router-dom';

function UserMenu() {
  const userName = useSelector(getUserName);
  const dispatch = useDispatch();
  return (
    <Box
      sx={{
        flexShrink: 1,
        alignItems: 'center',
        fontSize: 14,
        display: { xs: 'flex', sm: 'flex' },
      }}
    >
      <Box sx={{ display: { sm: 'flex', xs: 'none' } }}>
        <p
          variant="h6"
          component="a"
          style={{
            fontFamily: 'monospace',
            fontWeight: 700,
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          Hi, {userName} |
        </p>
      </Box>

      <Button
        key="Register"
        onClick={() => {
          dispatch(logOut());
        }}
        sx={{ my: 2, color: 'white', display: 'block' }}
      >
        Log Out
      </Button>
    </Box>
  );
}

export default UserMenu;
