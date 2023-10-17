import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'

import NavBar from './components/NavBar.js'
import Footer from './components/Footer.js'
import Home from './pages/Home.js'
import ExerciseDetails from './pages/ExerciseDetails'

function App() {
  return (
    <Box width='400px' color='green' sx={{ width: { xl: '1488px' }}} m='auto'>
      <NavBar />
      <Routes>
        <Route path='/' element = {<Home />}/>
        <Route path='/exercise/:id' element = {<ExerciseDetails />}/>
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
