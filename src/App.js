import './App.css';
import {
  Box,
  CircularProgress,
  Container,
  Stack,
  ThemeProvider,
  Typography,
} from '@mui/material';
import SurveyQuestion from './components/SurveyQuestion';
import { useFetchRandomQuestion } from './hooks/useFetchRandomQuestion';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import theme from './muiTheme';

function App() {
  const { fetchRandomQuestion, isLoading, question, isThereQuestions } =
    useFetchRandomQuestion();

  const render = () => {
    if (!isThereQuestions) {
      // user has answered all available questions
      return (
        <Stack alignItems='center' className='fade-in'>
          <img
            alt='congrats icon'
            width={200}
            height={200}
            src='/congrats_icon.png'
          />
          <Typography color={'primary'} variant='h6'>
            You have answered all the questions{' '}
          </Typography>
        </Stack>
      );
    } else {
      if (isLoading || !question) {
        return <CircularProgress />;
      } else {
        return (
          <SurveyQuestion
            fetchRandomQuestion={fetchRandomQuestion}
            question={question}
          />
        );
      }
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Stack height='90vh' justifyContent='center' alignItems='center'>
          {render()}
        </Stack>

        <ToastContainer
          position='bottom-center'
          autoClose={2000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Container>
    </ThemeProvider>
  );
}

export default App;
