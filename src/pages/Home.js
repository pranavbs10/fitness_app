import React from 'react'
import { useState } from 'react'
import { Box } from '@mui/material'
import HeroBanner from '../components/HeroBanner.js'
import SearchExercises from '../components/SearchExercises.js'
import Exercises from '../components/Exercises.js'

const Home = () => {
  const [bodyPart, setBodyPart] = useState('all')
  const [exercises, setExercises] = useState([]);

  return (
    <Box>
      <HeroBanner />
      <SearchExercises exercises={exercises} setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Exercises exercises={exercises} setExercises={setExercises} bodyPart={bodyPart} />
    </Box>
  )
}

export default Home