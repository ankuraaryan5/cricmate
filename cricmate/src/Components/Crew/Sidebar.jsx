import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className='flex flex-col items-start w-full gap-1 py-1 border border-slate-500 rounded-lg p-2'>
    
        <button ><Link to={'/dashboard'}>Dashboard</Link></button>
        <button ><Link to={'/series'}>Series</Link></button>
        <button ><Link to={'/match'}>Match</Link></button>
        <button ><Link to={'/score'}>Score</Link></button>
        <button ><Link to={'/news'}>News</Link></button>
    </div>
  )
}

export default Sidebar