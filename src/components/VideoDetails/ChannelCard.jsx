import React from 'react'
import { Box, Typography, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { demoProfilePicture } from '../utils/constants'

const ChannelCard = ({ channelDetails }) => {
  // console.log(channelDetails, 'this is CHcard')
  return (
    <Box sx={{ boxShadow: 'none', borderRadius: '20px', dispaly: 'flex', justifyContent: 'center', alignItems: "center", width: { xs: '356px', md: '320px' }, height: '326px', margin: 'auto' }} >
      <Link to={`/channel/${channelDetails?.id?.channelId}`} >
        <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: "center", color: '#fff' }} >
          < CardMedia
            image={`${channelDetails?.snippet?.thumbnails?.high?.url}` || demoProfilePicture}
            alt={channelDetails?.snippet?.title} sx={{ margin: 'auto', borderRadius: '50%', height: '170px', width: '180px', mb: 2, border: '1px solid #e3e3e3' }} />
          <Typography variant="h6" style={{ overflow: 'hidden' }} >
            {channelDetails?.snippet?.title}
            <CheckCircle sx={{ fontSize: 14, color: 'gray', ml: '5px' }} ></CheckCircle>
          </Typography>
          {channelDetails?.statistics?.subscriberCount &&
            (<Typography >
              {parseInt(channelDetails?.statistics?.subscriberCount).toLocaleString()} Subscribers
            </Typography>)}
        </CardContent>
      </Link>
    </Box >
  )
}

export default ChannelCard