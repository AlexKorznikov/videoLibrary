import React, {
  useEffect,
  useState
} from 'react'
import {
  Box,
  Stack,
  Typography
} from "@mui/material";
import SideBar from "../../components/SideBar/SideBar.jsx";
import Videos from "../../components/Videos/Videos.jsx";
import { redColor } from "../../utils/constants.jsx";
import { fetchFromApi } from "../../utils/fetchFromAPI.js";

const Feed = () => {
  const [ selectedCategory, setSelectedCategory ] = useState('JS Mastery');
  const [ videos, setVideos ] = useState([]);
  // console.log(videos)

  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${selectedCategory}`).then((data) => setVideos(data.items))
  }, [selectedCategory]);

  return (
    <Stack sx={{
      flexDirection: {
        xs: 'column',
        md: 'row'
      }
    }}>
      <Box sx={{
        height: {
          xs: 'auto',
          md: '94vh',
        },
        borderRight: '1px solid #3d3d3d',
        px: {
          xs: '0',
          md: 2,
        }
      }}>
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography className='copyright' variant='body2' sx={{
          mt: 1.5,
          color: '#fff6'
        }}>
          Copyright 2025 Alex&copy;
        </Typography>
      </Box>
      <Box p={2} sx={{
        overflowY: 'auto',
        flex: 2,
        height: '90vh',
      }}>
        <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: 'white'}}>
          {selectedCategory} <span style={{ color: redColor}}>Videos</span>
        </Typography>
        <Videos videos={videos}/>
      </Box>
    </Stack>
  )
}
export default Feed
