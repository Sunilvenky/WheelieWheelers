import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Trips from './pages/Trips'
import TripDetails from './pages/TripDetails'
import About from './pages/About'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trips" element={<Trips />} />
        <Route path="/trips/:id" element={<TripDetails />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
