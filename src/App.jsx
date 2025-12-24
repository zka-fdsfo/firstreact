
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/home'
import Agent from './pages/agent'
import Project from './pages/project'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Nav from './components/common/nav/nav'
import Fullnav from './components/common/nav/Fullnav'
import Footer from './components/common/footer'
import Other from './pages/other'


const App = () => {
  return (
    <div className='relative w-full min-h-screen text-white overflow-x-hidden '>
      <Nav />
      <Fullnav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/agent' element={<Agent />} />
        <Route path='/project' element={<Project />} />    
        <Route path='/other' element={<Other />} />    
      </Routes>
      <Footer />
      
    </div>
  )
}

export default App
