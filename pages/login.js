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
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

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

function RedirectHome(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'No account? '}
      <Link color="inherit" href="/"> 
        Back to Home
      </Link>{' '}
    </Typography>
  );
}

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

export default function Login() {

  const [ loginAs , setLoginAs ] = useState('requester');
  const router = useRouter();

  const authHandler = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let baseurl = ''

    if(loginAs==='requester')
    {
       baseurl = `http://localhost:4000/api/v1/user/login`
    }
    else
    {
       baseurl = `http://localhost:4000/api/v1/reviewer/login`
    }
    let email = data.get('email')
    let password = data.get('password')

    await axios.post(baseurl,{email,password})
      .then((res) => {
        console.log(res.data);
        
        if(typeof document !== 'undefined')
        {
            document.cookie = `jwt=${res.data.token}`
        }

        if(loginAs==='requester')
        { 
            router.push('/dashboardRequester/pending')
        }
        else
        {
          if(typeof window !== undefined)
          {
            window.location.href='/dashboardApprover/pending'
          }
          router.push('/dashboardApprover/pending')
        }
      }).catch((err) => {
        console.log(err)
      })
  };
  
  const handleChange = (event) => {
    setLoginAs(event.target.value);
  };

  return (
    <Fragment>
      <Head>
        <title>Login</title>
        <meta
          name="description"
          content="Login Page"
        />
      </Head>
      <div>
    <ThemeProvider theme={lightTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          md={7}
          sx={{
            backgroundImage: 'url(https://www.juit.ac.in/galleryimages/2fc4ef03fc5b87a1a44dbcda5bfc0254.jpg)',
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
            <Link href='/'>
              <Avatar sx={{ m: 4, bgcolor: 'secondary.main' }}>
                <LibraryIcon />
              </Avatar>
            </Link>
  
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <Box component="form" noValidate onSubmit={authHandler} sx={{ mt: 1 }}>
              
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Login As</FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label-option"
                  defaultValue="requester"
                  name="radio-buttons-group"
                  value={loginAs}
                  onChange={handleChange}
                >
                  <FormControlLabel value="requester" control={<Radio />} label="Requester" />
                  <FormControlLabel value="approver" control={<Radio />} label="Approver" />
                </RadioGroup>
              </FormControl>

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
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />  
            <Button className='hover:bg-fuchsia-600 hover:text-white' variant="outlined" type='submit' fullWidth disableElevation>
              Login
            </Button>
              <RedirectHome sx={{ mt: 5 }} />
              
              <Copyright sx={{ mt: 9 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
    </div>
    </Fragment>
  );
}