import React from 'react';
import Box from '@material-ui/core/Box'
import Screen from './components/Screen'
import Buttons from './components/Buttons'

function App() {
  return (
    <main>
      <Box display="flex" justifyContent="center" alignItems="center" height="100%">
        <Box style={{
          background: "#aaa",
          padding: '0.7em',
          borderRadius: "5%"
        }}>
          <Screen />
          <Buttons />
        </Box>
      </Box>
      <footer>Made with <span style={{color: "#f00"}}>❤</span> by Idan Izicovich</footer>
    </main>
  );
}

export default App;
