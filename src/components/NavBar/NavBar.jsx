import {
  Stack,
  Typography
} from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from '../../utils/constants.jsx'
import SearchBar from "../SearchBar/SearchBar.jsx";

const NavBar = () => {
  return (
    <Stack direction='row' p={2} sx={{
      position: 'sticky',
      backgroundColor: 'black',
      top: 0,
      justifyContent: 'space-between',
    }}>
      <Link to='/' style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="logo" height={45} />
        <Typography variant='h6' sx={{
          fontWeight: 'bold',
          color: '#ed2d2d',
          marginLeft: '20px',
        }}>VideoLibrary</Typography>
      </Link>
      <SearchBar />
    </Stack>
  )
}
export default NavBar
