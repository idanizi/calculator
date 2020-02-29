import React from 'react'
import Box from '@material-ui/core/Box'
import { useStoreState } from "easy-peasy";
export default function () {

    const currentNumber = useStoreState(state => state.currentNumber)

    return (
      <Box style={{ border: "1px black solid", padding:"0.5em", margin:"2vh 0" }}>
        <Box style={{ border: "1px black solid" }}>
          {currentNumber}
        </Box>
      </Box>
    );
  }
