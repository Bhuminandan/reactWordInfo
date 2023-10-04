import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-screen py-5 flex items-center justify-between bg-slate-800 text-white px-2 md:px-20'>
      <NavLink className={'text-2xl font-bold'} to={'/'}>Dictionary APP</NavLink>
      <div className="right flex items-center justify-center gap-5">
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/history'}>History</NavLink>
      </div>
    </div>
  )
}

export default Navbar