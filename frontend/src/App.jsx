import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Home'
import CafePage from './CafePage'


function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cafe/:id' element={<CafePage />} />
    </Routes>
  )
}

export default App
