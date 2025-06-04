import React, {
  useEffect,
  useState
} from 'react'
import { useParams } from "react-router-dom";
import { fetchFromApi } from "../../utils/fetchFromAPI.js";
import { Box } from "@mui/material";
import ChannelCard from "../../components/ChannelCard/ChannelCard.jsx";
import Videos from "../../components/Videos/Videos.jsx";

const ChannelDetail = () => {
  const [ channelDetail, setChannelDetail ] = useState(null);
  const [ videos, setVideos ] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    fetchFromApi(`channels?part=snippet&id=${id}`).then((data) => setChannelDetail(data?.items[0]));
    fetchFromApi(`search?channelId=${id}&part=snippet&order=date`).then((data) => setVideos(data?.items));
  }, [id]);

  return (
    <Box minHeight='95vh'>
      <Box>
        <div style={{
          background: 'linear-gradient(90deg,rgba(131, 58, 180, 1) 0%, rgba(191, 63, 63, 1) 100%, rgba(252, 176, 69, 1) 100%)',
          zIndex: 10,
          height: '300px',
        }}/>
        <ChannelCard channelDetail={channelDetail} marginTop='-110px'/>
      </Box>
      <Box display='flex' p={2}>
        <Box sx={{
          ml: {
            sm: '100px'
          },
        }}>
          <Videos videos={videos} />
        </Box>
      </Box>
    </Box>
  )
}
export default ChannelDetail
