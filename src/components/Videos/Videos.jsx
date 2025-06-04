import React from 'react'
import {
  Box,
  Stack
} from "@mui/material";
import VideoCard from "../VideoCard/VideoCard.jsx";
import ChannelCard from "../ChannelCard/ChannelCard.jsx";

const Videos = ({ videos }) => {
  // console.log(videos)

  return (
    <Stack direction='row' flexWrap='wrap' justifyContent='' gap={2}>
      {videos?.filter(item => item.id.videoId || item.id.channelId).map((item, index) => (
        <Box key={index}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  )
}
export default Videos
