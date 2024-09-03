import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Home'
import EntryPage from './EntryPage/EntryPage'


function App() {

  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/entry/:id' element={<EntryPage />} />
    </Routes>
  )
}

export default App
