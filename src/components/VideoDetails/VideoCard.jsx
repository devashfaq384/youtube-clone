import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { demoThumbnailUrl, demoVideoUrl, demoChannelTitle, demoChannelUrl, demoVideoTitle } from '../utils/constants'

const VideoCard = (props) => {
  let videoId = props.video.id.videoId
  let thumbnails = props.video.snippet.thumbnails.high.url
  let title = props.video.snippet.title.slice(0, 60)
  let channelId = props.video.snippet.channelId
  console.log(channelId)
  // const a = snippet?.thumbnails?.high?.url
  // console.log(a)

  return (
    <Card sx={{ width: { md: '320px', xs: '100%' }, boxShadow: 'none', borderRadius: 'none' }} >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={`${thumbnails}`}
          alt={props.video.snippet.title}
          sx={{ width: 358, height: 180 }}
        />
      </Link>
      <CardContent sx={{ background: '#1e1e1e', height: '106px' }} >
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant='subtitle1' fontWeight='bold' color="white" >
            {title}
          </Typography>
        </Link>
        <Link to={channelId ? `/channel/${channelId}` : demoChannelUrl}>
          <Typography variant='subtitle1' fontWeight='bold' color="gray" >
            {props.video.snippet.channelTitle}
            <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px' }} ></CheckCircle>
          </Typography>
        </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard