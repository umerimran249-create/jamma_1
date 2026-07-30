import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'

// Routes will grow to match each page of the Canva design.
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}
