import React from 'react'
import { Link } from 'react-router-dom'

function Card({ product, count, updateCount }) {

  // let titledlug = product.title.replace(/\s+/g,'-').tolowerCase();
  return (
    <div className='p-[10px] '>
      
        <div className='pb-[4px] w-[200px] h-[200px] '>
          <img src={product.image} alt='' className='w-[90%]' />
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