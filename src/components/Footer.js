import React from 'react'
import { Box, Typography, Stack } from '@mui/material'
import Logo from '../assets/images/Logo.png'

const Footer = () => {
  return (
    <Box sx={{ width: '100%', height: '80px', backgroundColor: '#000', mt: '60px'}}>
      <Stack direction='row'>
        <img src={Logo} style={{width: '64px', height: '68px', margin:'0px 20px', paddingTop: '6px' }}/>
        <Stack>
          <Typography className='footer-content' paddingTop='12px' fontWeight='700' color='#fff'>SAIYAN FITNESS</Typography>
          <Typography className='footer-content' paddingTop='2px' fontWeight='600' color='#8B0000'>PRANAV</Typography>
        </Stack>
      </Stack>
    </Box>
  )
}

export default Footer