import React, { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Sidebar from '../Nav/Sidebar'
import Videos from '../VideoDetails/Videos'
import { fetchFromApi } from '../utils/Api'

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('Coding')
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => {
        setVideos(data.items)
      })
  }, [selectedCategory])


  return (
    <Stack sx={{
      flexDirection: {
        sx: 'column', md: 'row'
      }
    }}>
      <Box sx={{ height: { sx: 'auto', md: "92vh" }, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2 } }} >
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} ></Sidebar>
        <Typography className='copyright' variant='body2' sx={{ mt: 1.5, color: '#fff' }} >
          Copyright Ashfaq Ahmad 2023
        </Typography>
      </Box>
      
      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: 'white' }}>
          {selectedCategory}
          <span style={{ color: "#F31503" }}> Videos </span>
        </Typography>
        <Videos videos={videos} />
      </Box>

    </Stack>
  )
}

export default Feed