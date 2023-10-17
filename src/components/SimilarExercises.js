import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import HorizontalScrollBar from './HorizontalScrollBar'
import Loader from './Loader'

const SimilarExercises = ({ targetMuscleExercises, equipmentMuscleExercises}) => {
  return (
    <Box >
      <Typography variant='h3' color='#000' paddingLeft='20px'>
        Exercises that target the same muscle group
      </Typography>
      <Stack direction='row' mt='40px' sx={{ p: '0', position: 'relative'}}>
        {targetMuscleExercises.length ? <HorizontalScrollBar data={targetMuscleExercises} /> : <Loader />}
      </Stack>
      <Typography mt='80px' variant='h3' color='#000' paddingLeft='20px'>
        Exercises that use the same equipment
      </Typography>
      <Stack direction='row' mt='40px' sx={{ p: '20', position: 'relative'}}>
        {equipmentMuscleExercises.length ? <HorizontalScrollBar data={equipmentMuscleExercises} /> : <Loader />}
      </Stack>
    </Box>
  )
}

export default SimilarExercises