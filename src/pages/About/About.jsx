import { Paper, Grid, Container, styled } from '@mui/material';
import { aboutContent } from 'data/about';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
function About() {
  return (
    <Container maxWidth="sm">
      <Grid container m={2} spacing={2}>
        <Grid justifyContent="center" item width="100%">
          <Item elevation={8}>About the project</Item>
        </Grid>
        {Object.entries(aboutContent).map(([key, value], i) => (
          <Grid key={i} container m={2}>
            <Grid item mr={1} width="20%">
              <Item elevation={8}>{key.toUpperCase()}</Item>
            </Grid>
            <Grid item sx={{ whiteSpace: 'pre-line' }} width="78%">
              <Item elevation={8}>{value}</Item>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default About;
