import React from 'react'
import { Link } from 'react-router-dom'

function Card({product, count, updateCount}) {

    // let titledlug = product.title.replace(/\s+/g,'-').tolowerCase();
  return (
    <div className='w-[400px]'>
        <div className=''>
            <img src={product.image} alt='' className='w-[150px] border-0'/>
        </div>
        <div className=''>
            <Link to={`/product/${product.id}`}>{product.title}</Link>
            {/* <p>{product.description}</p> */}
            <p>PER, {product.price}</p>

            <button onClick={updateCount}>+</button>
            <span>{count.count}</span>
        </div>
    </div>
  )
}

export default Card