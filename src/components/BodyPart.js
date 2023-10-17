import React from 'react'
import { Stack, Typography } from '@mui/material'
import Icon from '../assets/icons/gym.png'

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack  
        type="button"
        alignItems="center"
        justifyContent="center"
        className="bodyPart-card"
        sx={bodyPart === item ?  { borderTop: '4px solid #8B0000', background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' }
        : { background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' }}
        onClick = {() => {
          setBodyPart(item);
          window.scrollTo({ top: 1350, left: 100, behavior: 'smooth' });
        }}
        >
        <img src={Icon} alt='gym' style={{ width: '40px', height: '40px' }} />
        <Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color="#000000" textTransform="capitalize"> {item}</Typography>
    </Stack>
  )
}

export default BodyPart