import React from 'react'
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'
import { Stack, Box } from '@mui/material'

const Videos = (props) => {
  // console.log(props.videos)
  if (!props.videos?.length) return 'Loading....'
  return (
    <Stack direction={props.direction || 'row'} flexWrap="wrap" justifyContent='start' gap={2} >
      {props.videos.map((item) => {
        return (
          <Box>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard channelDetails={item} />}
          </Box>
        )
      })}
    </Stack>
  )
}

export default Videos