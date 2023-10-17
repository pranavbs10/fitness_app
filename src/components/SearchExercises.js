import React, { useState, useEffect } from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { fetchData, exerciseOptions } from '../utils/fetchData';
import HorizontalScrollBar from './HorizontalScrollBar';

const SearchExercises = ({ exercises, setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/bodyPartList`, exerciseOptions)
        setBodyParts(['all', ...bodyPartsData])
    }

    fetchExercisesData()
  }, [])

  const handleSearch = async () => {
      if(search) {
        const exerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises?limit=1500`, exerciseOptions)
        
        const searchedExercises = exerciseData.filter((exercise) => 
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
        )

        window.scrollTo({ top: 1350, left: 100, behavior: 'smooth' });
        setSearch('')
        setExercises(searchedExercises)
      }
  }

  return (
    <Stack alignItems={'center'} mt='45px' justifyContent={'center'} p='20px'>
        <Typography fontWeight={600} color='#fff' 
        backgroundColor='#000000'
        p='20px' mb='12px' 
        sx={{width: {lg: '280px', xs: '180px'}, padding: {lg: '20px', sm: '6px'}, fontSize: {lg:'24px', xs:'14px'}}}>
            &nbsp;&nbsp;&nbsp; Find Exercises
        </Typography>
        <Box mt='20px' mb='20px'>
            <TextField
            height="60px" 
            sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '1170px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px' }}
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase()) }
            placeholder="Search Exercises"
            type="text"
            ml='-200px'/>
            
            <Button className='search-btn' 
            sx={{ color: 'white', backgroundColor: '#8B0000', position: 'relative',
            width: {lg: '175px', xs: '80px'}, fontSize: 
            { lg: '20px', xs: '14px' }, height: '56px' }}
            onClick={handleSearch}>
            Search</Button>
        </Box>
        <Box sx={{ position: 'relative', width: '100%', p: '20px'}}>
          <HorizontalScrollBar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyPart/>
        </Box>
    </Stack>

  )
}

export default SearchExercises