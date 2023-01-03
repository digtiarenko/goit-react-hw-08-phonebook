import {
  Avatar,
  Button,
  CssBaseline,
  Grid,
  Link,
  TextField,
  Box,
  Typography,
  Container,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { logIn } from '../../redux/auth/authOperations';
const theme = createTheme();

export default function LoginPage() {
  const emailRegexp = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
  const dispatch = useDispatch();

  const validationSchema = yup.object({
    email: yup
      .string('Enter your email')
      .matches(emailRegexp, 'Phone number is not valid')
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string()
      .min(6, 'Password number should be of minimum 6 characters')
      .max(20, 'Password should be of maximum 20 characters')
      .required('Password is required'),
  });
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      dispatch(logIn(values));
      resetForm();
    },
  });

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
            onSubmit={formik.handleSubmit}
            Validate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              label="Email Address"
              id="email"
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
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
