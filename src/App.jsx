import React from 'react'
import { Box } from "@mui/material";
import { AppRoutes } from "./routes/AppRoutes.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";

const App = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "#000" }}>
        <NavBar />
        <AppRoutes />
      </Box>
    </>
  )
}

export default App
