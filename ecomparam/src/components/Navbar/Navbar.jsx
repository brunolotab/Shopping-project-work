import React from 'react'
import { Link } from 'react-router-dom'

function Navbar({ count }) {


  const admins = JSON.parse(localStorage.getItem("item"))

  console.log(admins);



  return (
    <div className='flex justify-between items-center p-[8px] border bg-[pink] '>
      <h1>Header Component</h1>
      <ul className='flex justify-between w-1/3  list-none'>
        {
          admins ?
            <>
              <li> <Link to='/' className='bg-[#b99f00] p-[12px]' style={{ color: '#ffff' }}>Home</Link></li>
              <li> <Link to='/home'>Jewery</Link></li>
              <li> <Link to='/home2'>Cloths</Link></li>
              <li> <Link to='/home3'>Electronics</Link></li>
              <li> <Link to='/about'>About</Link></li>
              <li> <Link to='/signin' className='p-[8px] bg-[blue]' style={{ color: '#ffff' }}>Signin</Link></li>
            </>
            :
            <>
              <li> <Link to='/' className='bg-[#b99f00] p-[12px]' style={{ color: '#ffff' }}>Home</Link></li>
              <li> <Link to='/about'>About</Link></li>
              <li> <Link to='/signin' className='p-[8px] bg-[blue]' style={{ color: '#ffff' }}>Signin</Link></li>
            </>

        }
      </ul>
      <div className='flex gap-[1.5rem]'>
        <h2>{count.count}</h2>
        <h2>Items in the Cart</h2>
      </div>
    </div>
  )
}

export default Navbar