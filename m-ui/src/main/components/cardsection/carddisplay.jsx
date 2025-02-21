import { Stack } from '@mui/material'
import React from 'react'
import Firstcard from './firstcard'
import Secondcard from './secondcard'
import Thirdcard from './thirdcard'

function CardDisplay() {
  return (
   <Stack direction= 'row' gap={3} m={4}>
    <Firstcard/>
    <Secondcard/>
    <Thirdcard/>

   </Stack>
  )
}

export default CardDisplay
