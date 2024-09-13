// routing
import { Route, Routes } from 'react-router-dom'
// context 
import { MainProvider } from './context/MainProvider'
// components
import BottomNav from './components/BottomNav'
// pages
import EntryPage from './EntryPage/EntryPage'
import Favorites from './Favorites'
import Home from './Home'
// css
import './App.css'


function App() {
  /**
   * ====
   * TODO
   * ====
   * - jwt
   * - login page
   * - user profiles
   * - fix scrolling bug
   * - fix bottom nav bug when scrolling
   * 
   * ====
   * DONE
   * ====
   * - favorites
   * - bottom navigation
   * - redux/conext
   * - Update Form
   */

  return (
    <>
      <MainProvider>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/favorites' element={<Favorites />} />
          <Route exact path='/entry/:id' element={<EntryPage />} />
        </Routes>
      </MainProvider>
      <BottomNav />
    </>
  )
}

export default App
