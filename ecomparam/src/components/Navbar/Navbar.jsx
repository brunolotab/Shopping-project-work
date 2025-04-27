import React from 'react'
import { Link } from 'react-router-dom'

function Navbar({count}) {
  return (
    <div className='flex justify-between items-center p-[8px] border bg-[pink] '>
        <h1>Header Component</h1>
        <ul className='flex justify-between w-1/4 '>
            <li> <Link to='/home'>Home</Link></li>
            <li> <Link to='/about'>About</Link></li>
            <li> <Link to='/signin'>Signin</Link></li>
        </ul>
        <div className='flex gap-[2rem]'>
        <h2>{count.count}</h2>
        <h2>Items in the Cart</h2>
        </div>
    </div>
  )
}

export default Navbar