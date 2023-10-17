import React from 'react'
import { Typography, Stack, Button } from '@mui/material'

import BodyPartImage from '../assets/icons/body-part.png'
import TargetImage from '../assets/icons/target.png'
import EquipmentImage from '../assets/icons/equipment.png'

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail
const extraDetail = [
  {
    icon: BodyPartImage,
    name: bodyPart
  },
  {
    icon: TargetImage,
    name: target
  },
  {
    icon: EquipmentImage,
    name: equipment
  }
]

  return (
    <Stack gap='60px' sx={{flexDirection: { lg: 'row' }, p:'20px', alignItems:'center' }}>
      <img src={gifUrl} alt={name} loading='lazy' className='detail-image' />
      <Stack sx={{ gap: { lg: '35px', xs: '20px' }, paddingLeft: {lg: '120px'}}}>
        <Typography sx={{ fontSize: { lg: '40px', xs: '30px' }, padding:'4px 20px' }} fontWeight={500} color='#fff' backgroundColor='#000' textTransform="capitalize">
          {name}
        </Typography>
        {extraDetail?.map((item) => (

          <Stack key={item.name} direction='row' gap='24px' alignItems='center'>
            <Button sx={{background: '#fff', borderRadius: '50%'}}>
              <img src={item.icon} alt={bodyPart} style={{ width: '40px', height: '50px' }}/>
            </Button>
            <Typography variant='h5' fontWeight={300} textTransform='capitalize' color='#000'>
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  )
}

export default Detail