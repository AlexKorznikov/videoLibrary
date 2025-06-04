import React from 'react'
import {
  Routes,
  Route
} from "react-router-dom";
import { ChannelDetail, Feed, SearchFeed, VideoDetail } from "../pages/index.js";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Feed />} />
      <Route path="/video/:id" element={<VideoDetail />} />
      <Route path="/channel/:id" element={<ChannelDetail />} />
      {/* <Route path="/channel/:id" element={<ChannelDetail key={id} />} /> добавить ключ при необходимости*/}
      <Route path="/search/:searchTerm" element={<SearchFeed />} />
    </Routes>
  )
}
