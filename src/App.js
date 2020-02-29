import React from 'react';
import Box from '@material-ui/core/Box'
import Screen from './components/Screen'
import Buttons from './components/Buttons'

function App() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      <Box>
        <Screen />
        <Buttons />
      </Box>
    </Box>
  );
}

export default App;
