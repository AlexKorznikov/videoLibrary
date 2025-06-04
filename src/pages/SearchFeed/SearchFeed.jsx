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
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const [ videos, setVideos ] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${searchTerm}`).then((data) => setVideos(data.items))
  }, [searchTerm]);

  return (
    <Box p={2} sx={{
      overflowY: 'auto',
      flex: 2,
      height: '90vh',
    }}>
      <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: 'white' }}>
        Search results for: <span style={{ color: redColor }}>{searchTerm}</span>
      </Typography>
      <Videos videos={videos} />
    </Box>
  )
}
export default SearchFeed
