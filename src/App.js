import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material'
import Navbar from './components/Nav/Navbar';
import VideoDetails from './components/VideoDetails/VideoDetails';
import ChannelDetails from './components/Channel/ChannelDetails'
import SearchFeed from './components/Search/SearchFeed'
import Feed from './components/Feed/Feed'

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ background: '#000' }}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Feed></Feed>} />
          <Route path='/video/:id' element={<VideoDetails />} />
          <Route path='/channel/:id' element={<ChannelDetails />} />
          <Route path='/search/:searchTerm' element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
