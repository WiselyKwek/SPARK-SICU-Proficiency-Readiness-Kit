import { useState } from 'react'
import MenuBar from './components/menubar/MenuBar'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import CreateChapter from './pages/CreateChapter'
import Chapters from './pages/Chapters'
import ViewCalculators from './pages/viewCalculator/ViewCalculators'
import CreateSubchapter from './pages/CreateSubchapter'
import Sidebar from './components/sidebar/Sidebar'
import MiniDrawer from './components/miniDrawer/MiniDrawer'
import PrimarySearchAppBar from './components/test'
import SubchapterContent from './pages/subchapterContent/SubchapterContent'
import Bookmarks from './pages/Bookmarks'
import Subchapters from './pages/Subchapters'

function App() {

  return (
    <>
      <div className="App">
        <MiniDrawer/>
        {/* <Routes>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/Bookmarks" element={<Bookmarks/>}/>
          <Route path="/Calculators" element={<ViewCalculators/>}/>
          <Route path="/Chapters" element={<Chapters/>}/>
          <Route path="/subchapterContent" element={<SubchapterContent/>}/>
          <Route path="/Chapters/:chapterId/subchapters" element={<Subchapters/>}/>
          <Route path="/CreateSubchapter" element={<CreateSubchapter/>}/>
        </Routes> */}
      </div>
    </>
  )
}

export default App
