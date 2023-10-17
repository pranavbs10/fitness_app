import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material' 
import Logo from '../assets/images/Logo.png'

const Navbar = () => {
  return (
    <Stack
    direction='row'
    justifyContent='space-around'
    sx={{ gap: { sm: '122px', xs: '40px'}, 
    mt: {sm: '20px', xs: '20px'},
    justifyContent: 'none'}}>

        <Link to='/'>
            <img src={Logo} alt='logo' style={{
                width: '48px', height: '48px', margin:
                '0px 20px' 
            }}/>
        </Link>

        <Stack 
        direction='row'
        gap='40px'
        fontSize='24px'
        alignItems='flex-end'>
            <Link to='/' style={
            {textDecoration: 'none', color: '#000000', 
            borderBottom: '3px solid grey'}}>
            Home</Link>

            <a href='#exercises' style={
            {textDecoration: 'none', color: '#000000'}}>
            Exercises</a>
        </Stack>
    </Stack>
  )
}

export default Navbar