import React from 'react'
import { Link } from 'react-router-dom'

function Navbar({count}) {
  return (
    <div>
        <h1>Header Component</h1>
        <ul>
            <li> <Link to='/home'>Home</Link></li>
            <li> <Link to='/about'>About</Link></li>
            <li> <Link to='/signin'>Signin</Link></li>
        </ul>
        <h1>{count.count}</h1>
    </div>
  )
}

export default Navbar