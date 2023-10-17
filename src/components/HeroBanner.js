import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material'
import Banner from '../assets/images/Banner.jpg'

const HeroBanner = () => {
  return (
    <Box sx={{ mt: { lg: '100px', xs: '70px'},
    ml: { sm: '50px' }}} position ='relative' p = '20px'>
        
        <Typography color='#ffffff' backgroundColor='#000000'
        fontSize='25px' p='10px' width='180px' mb='35px' >
            Fitness Club
        </Typography>
        
        <Typography color='#000000' fontSize='20px' 
        fontWeight='600' mb='25px'>
            TRAIN IN<span style={{color:'#8B0000'}}>SAIYAN</span><br/>
            OR REMAIN THE SAME
        </Typography>
        
        <Button color='error' variant='text'><a href='#exercises' 
        style={{color: 'white', backgroundColor: '#8B0000', fontWeight: '400',
        padding: '8px', textTransform: 'none', textDecoration: 'none',
        }}>Explore Exercises</a></Button>
        
        <Typography fontWeight={600} color='grey'
        sx={{ opacity: '0.1', 
        display: { lg: 'block', xs: 'none'}, fontSize: '100px'}}>
            SUPER SAIYAN
        </Typography>
        
        <img src={Banner} alt='Hero-banner' className='hero-banner-img' />
    </Box>
  )
}

export default HeroBanner