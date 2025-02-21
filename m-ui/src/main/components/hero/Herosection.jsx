import { Box, Stack } from '@mui/material'
import React from 'react'
import Herotext from './Herotext'
import Heroimage from './Heroimage'

const Herosection = () => {
  return (
    <Stack direction='row'spacing={2} justifyContent='space-between'>
        <Box sx={{flex:'2'}}>
            <Herotext/>
        </Box>
        <Box sx={{flex:'1'}}>
            <Heroimage/>
        </Box>
    </Stack>
  )
}

export default Herosection
