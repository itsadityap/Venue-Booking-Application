import { styled } from '@mui/material/styles';
import { Typography, Container, Box } from '@mui/material';
import { useEffect } from 'react';

const StyledContent = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

export default function Page404() {

    useEffect(() => {
      setTimeout(() => 
      {
        window.location.href = '/login'
      }, 4000)
    }, [])
  return (
    <>
      <Container>
        <StyledContent sx={{ textAlign: 'center', alignItems: 'center' }}>
          <Typography variant="h3" paragraph>
            Sorry, page not found!
          </Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL? Be sure to check your
            spelling. Redirecting to your home page in 4 sec.
          </Typography>

          <Box
            component="img"
            src="/banner2.jpg"
            sx={{ height: 260, mx: 'auto', my: { xs: 5, sm: 10 } }}
          />
      
        </StyledContent>
      </Container>
    </>
  );
}