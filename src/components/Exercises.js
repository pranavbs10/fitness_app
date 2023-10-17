import React, { useEffect, useState } from 'react'
import Pagination from '@mui/material/Pagination'
import { Box, Stack, Typography } from '@mui/material'

import ExerciseCard from './ExerciseCard'
import { exerciseOptions, exersiseOptions, fetchData } from '../utils/fetchData'

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setcurrentPage] = useState(1)
  const exercisesPerPage = 9;
  const indexOfLastExercise = currentPage * exercisesPerPage
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise)

  const paginate = (e, value) => {
    setcurrentPage(value)

    window.scrollTo({top: 1350, behavior: 'smooth'})
  }

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = []

      if (bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=1500', exerciseOptions)
      }
      else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions)
      }
      setExercises(exercisesData)
    }
      fetchExercisesData();
  }, [bodyPart]);

  return (
    <Box sx={{mt: {lg: '110px'}}}
      mt='50px'
      p='20px'>
      <Typography variant='h4' ml='6px' mt='-50px' mb='28px' paddingLeft='16px' paddingTop='10px' width='300px' height='65px' style={{color: '#fff', backgroundColor: '#000'}}>Showing results</Typography>
      <Stack direction='row' sx={{ gap: { lg: '110px', xs: ' 50px' }}}
            flexWrap='wrap' justifyContent='center'>
              {currentExercises.map((exercise, index) => (
                <ExerciseCard key={index} exercise={exercise} />
              ))}
      </Stack>
       <Stack mt='100px' alignItems='center'>
            {exercises.length > 9 && (
              <Pagination
               defaultPage={1}
               count={Math.ceil(exercises.length / exercisesPerPage)}
               size='large'
               page={currentPage}
               onChange={paginate}
                />
            )}
       </Stack>
    </Box>
  )
}

export default Exercises