import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom'

const ExerciseCard = ({ exercise }) => {
  return (
    <Link className='exercise-card' to={`/exercise/${exercise.id}`}>
        <img src={exercise.gifUrl} alt={exercise.name} loading='lazy'/>
        <Stack direction='row' mt='5px'>
            <Button sx={{ ml: '21px', color: '#fff', backgroundColor: '#8b0000', fontSize: '12px', fontWeight: 600,
            borderRadius: '20px', width: '100px', textTransform: 'capitalize'}}>
                {exercise.bodyPart}
            </Button>
            <Button sx={{ ml: '21px', color: '#fff', backgroundColor: '#000000', fontSize: '12px', fontWeight: 600,
            borderRadius: '20px', width: '100px', textTransform: 'capitalize'}}>
                {exercise.target}
            </Button>
        </Stack>
            <Typography sx={{ ml: '25px', mt: '10px', color: '#000', fontWeight: 'bold', fontSize: '16px', textTransform: 'capitalize' }}>{exercise.name}</Typography>
    </Link>

  )
}

export default ExerciseCard