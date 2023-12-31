import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

const ExerciseVideos = ({ exerciseVideos, name}) => {
  return (
    <Box sx={{ mt: { lg: '30px', xs: '20px' }}} p='20px'>
      <Typography variant='h3' mb='33px' textTransform='capitalize' color='#000'>
        Watch <span style={{color: '#8B0000'}}>{name}</span> exercise videos
      </Typography>
      <Stack justifyContent='flex-start' flexWrap='wrap' alignItems='center' sx={{flexDirection: { lg: 'row' }, gap: { lg: '80px', xs: 0 }}}>
        {exerciseVideos?.slice(0, 3).map((item, index) => (
          <a key={index} className='exercise-video' href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
          target='_blank' rel='noreferrer'>
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Typography style={{color: '#000', fontWeight:'800'}}>{item.video.title}</Typography>
            <Typography style={{color: '#000', fontWeight:'500'}}>{item.video.channelName}</Typography>
          </a>
        ))}
      </Stack>
    </Box>
  )
}

export default ExerciseVideos