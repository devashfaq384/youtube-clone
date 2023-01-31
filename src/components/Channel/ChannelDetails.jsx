import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
// import { Videos , ChannelCard } from './'
import { fetchFromApi } from '../utils/Api'
import ChannelCard from '../VideoDetails/ChannelCard'
import Videos from '../VideoDetails/Videos'

const ChannelDetails = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])

  useEffect(() => {
    // search?part=snippet&q=${selectedCategory}
    fetchFromApi(`channels?part=snippet&id=${id}`)
      .then((data) => {
        setChannelDetail(data.items[0])
      })
    fetchFromApi(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => {
        console.log(data.items[0])
        setVideos(data.items)
        // setChannelDetail(videos)
      })
  }, [id])

  // console.log(videos)


  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{
          background: 'linear-gradient(90deg , rgba(0,238, 247,1)0%, rgba(206,3,184,1)100%, rgba(0,212,255,1) 100% )',
          zIndex: 10,
          height: '300px',
        }}
        />
        <ChannelCard channelDetails={channelDetail} />

      </Box>
      <Box diplay="flex" justifyContent='center' alignItems='center' >
        <Box sx={{ mr: { sm: '100px' } }} >
          <Videos videos={videos} ></Videos>
        </Box>
      </Box>
    </Box>
  )
}

export default ChannelDetails