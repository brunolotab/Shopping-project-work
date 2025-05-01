import React from 'react'
import { Link } from 'react-router-dom'

function Card({ product, count, updateCount}) {
  console.log(product);
  

  // let titledlug = product.title.replace(/\s+/g,'-').tolowerCase();
  return (
    <div className='p-[10px] '>
      
        <div className='pb-[4px] w-[200px] h-[250px] border-4 overflow-hidden align-middle flex  '>
          <img src={product.image} alt='' className=' object-cover ' />
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