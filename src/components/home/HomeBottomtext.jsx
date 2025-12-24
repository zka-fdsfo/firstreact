import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomtext = () => {
  return (
    <div className=' font-[f1] flex justify-center items-center gap-5 p-7 uppercase '>
      <Link className=' hover:border-[#d3fd50]  hover:text-[#d3fd50]  text-[5vw] border-[0.2vw] leading-[5.5vw] border-white px-10 py-1 rounded-full '  to='/project' >Project</Link>
      <Link className=' hover:border-[#d3fd50]  hover:text-[#d3fd50]  text-[5vw] border-[0.2vw] leading-[5.5vw] border-white px-10 py-1 rounded-full ' to='/agent' >Agents</Link>
    </div>
  )
}

export default HomeBottomtext