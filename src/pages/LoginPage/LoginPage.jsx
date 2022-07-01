import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/authOperations';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme();

export default function LoginPage() {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const password = data.get('password');
    dispatch(logIn({ email, password }));
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              label="Email Address"
              id="email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Log In
            </Button>
            <Grid container>
              {/* <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid> */}
              <Grid item>
                <Link href="register" variant="body2">
                  {"Don't have an account? Register, please"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
    </ThemeProvider>
  );
}

// function LoginPage() {
//   const dispatch = useDispatch();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleChange = event => {
//     const { value, name } = event.target;
//     switch (name) {
//       case 'email':
//         return setEmail(value);
//       case 'password':
//         return setPassword(value);
//       default:
//         break;
//     }
//   };

//   const handleSubmit = event => {
//     event.preventDefault();
//     dispatch(logIn({ email, password }));
//     setEmail('');
//     setPassword('');
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit} className={styles.form}>
//         <label className={styles.label}>
//           <span>E-mail</span>
//           <input
//             className={styles.input}
//             onChange={handleChange}
//             type="email"
//             name="email"
//             value={email}
//             // pattern="[\-\w~!$%\^&*=+}{\'?]+(\.[\-\w~!$%\^&*=+}{\'?]+)*@([\w][\-a-zA-Z0-9_]*(\.[\-\w]+)*\.([cC][oO][mM]|[gG][oO][vV]))(:[0-9]{1,5})?]"
//             required
//             autoComplete="on"
//           />
//         </label>
//         <label className={styles.label}>
//           <span>Password </span>
//           <input
//             className={styles.input}
//             onChange={handleChange}
//             value={password}
//             type="password"
//             name="password"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//             autoComplete="on"
//           />
//         </label>

//         <button className={styles.btn} type="submit">
//           Let me in
//         </button>
//       </form>
//     </>
//   );
// }

// export default LoginPage;
