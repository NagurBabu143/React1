import { Box, Typography } from '@mui/material'
import React from 'react'

function Herotext() {
  return (
    <Box sx={{
        display:'flex',
        width:'100%',
        height:'500px',
        justifyContent:'center',
        alignItems:'center'
    }}>
        <Typography variant='h3' fontWeight='500'>
            Post gradyate program in React
        </Typography>
    </Box>
  )
}

export default Herotext
