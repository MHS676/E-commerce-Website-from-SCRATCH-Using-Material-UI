import { Button, Container } from '@mui/material';
import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title = "React Material UI - Home";
  }, []);

  return (
    <div className="App">
      <Container
      disableGutters
      maxWidth = "xl"
      SX = {{
        background: "#fff",
      }}
      >
        <Button variant='contained'>Test</Button>
      </Container>
    </div>
  );
}

export default App;
