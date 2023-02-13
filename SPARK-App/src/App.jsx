import { useState } from 'react'
import MenuBar from './components/menubar/MenuBar'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import CreateChapter from './pages/CreateChapter'
import Chapters from './pages/Chapters'
import ViewCalculators from './pages/ViewCalculators'
import CreateSubchapter from './pages/CreateSubchapter'
import Sidebar from './components/sidebar/Sidebar'
import MiniDrawer from './components/MiniDrawer'
import PrimarySearchAppBar from './components/test'
function App() {

  return (
    <>
      <div className="App">
        <MiniDrawer/>
      </div>
    </>
  )
}

export default App
