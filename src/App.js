import Navbar from './components/Navbar';
import { Container, Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Quiz from './pages/Quiz';

function App() {
  return (
    <>
      <Navbar/>
      <Container  sx = {{ 
             display : "flex",
             justifyContent : "center",
      }}
       >
             <Quiz/>
      </Container>
    </>
  );
}

export default App;
