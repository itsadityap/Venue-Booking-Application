import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Fragment } from 'react';
import { LibraryIcon } from '@heroicons/react/solid';
import Head from 'next/head';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/itsadityap">
        Aditya Pandey
      </Link>{' '}
      {new Date().getFullYear()}
    </Typography>
  );
}

function RedirectLogin(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Already have an account? '}
      <Link color="inherit" href="/login"> 
        Login
      </Link>{' '}
    </Typography>
  );
}

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

export default function SignUpApprover() 
{
  const notifyError = () => toast.error('Error in Signing you Up🤨, Please Check if your passwords match or you email is in correct format!', {
    position: "top-right",
    autoClose: 6000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });

  const notifySuccess = () => toast.success('Signup Successful🥳, redirecting you to login page', {
      position: "top-right",
      autoClose: 6000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const notifyErrorAlreadySignup = () => toast.error('Error in Signing you Up🤨, You are already signed up!', {
      position: "top-right",
      autoClose: 6000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const handleSubmit = async (event) => 
  {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  
    let email = data.get('email');
    let password = data.get('password');
    let cnfpassword = data.get('confirmpassword');
    let designation = data.get('designation');
    let full_name = data.get('name');

    await axios.post(`${process.env.NEXT_PUBLIC_BASEURLLOCAL}reviewer/signup`, 
    {email,password,full_name,designation}).then((res) => {
      if(res.status === 200 && cnfpassword === password)
      {
        notifySuccess();
        setTimeout(() => {
          window.location.href = '/login';
        }, 1000);
      }
      else
      {
        notifyError();
      }
    }).
      catch((err) => 
      {
      if(err.response.status === 400)
      {
        notifyErrorAlreadySignup();
      }
      else
      notifyError();
    });
  };

  return (
    <Fragment>
      <Head>
        <title>SignUp | Approver</title>
        <meta
          name="description"
          content="Signup Page"
        />
      </Head>
      <div>
    <ThemeProvider theme={lightTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          md={7}
          sx={{
            backgroundImage: 'url(https://www.juit.ac.in/galleryimages/1.jpg)',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 4,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LibraryIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign Up As Approver
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="fullName"
                label="Full Name"
                name="name"
                autoComplete="name"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="designation"
                label="Designation"
                name="designation"
                autoComplete="designation"
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

              <TextField
                margin="normal"
                required
                fullWidth
                name="confirmpassword"
                label="Confirm Password"
                type="password"
                id="cnfpassword"
                autoComplete="current-password"
              />
            
            <Button className='hover:bg-fuchsia-600 hover:text-white' variant="outlined" type='submit' fullWidth disableElevation>
              Sign Up
            </Button>
              <RedirectLogin sx={{ mt: 4 }} />
              
              <Copyright sx={{ mt: 4 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
    <ToastContainer />
    </div>
    </Fragment>
  );
}