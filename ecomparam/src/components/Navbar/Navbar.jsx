import React from 'react'
import { Link } from 'react-router-dom'

function Navbar({count}) {
  return (
    <div className='flex justify-between items-center'>
        <h1>Header Component</h1>
        <ul className='flex justify-between w-1/4'>
            <li> <Link to='/home'>Home</Link></li>
            <li> <Link to='/about'>About</Link></li>
            <li> <Link to='/signin'>Signin</Link></li>
        </ul>
        <h1>{count.count}</h1>
    </div>
  )
}

export default Navbar