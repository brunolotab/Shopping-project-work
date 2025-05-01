import React from 'react'
import { useParams } from 'react-router-dom'

function Detail({products}) {

    const {productid} = useParams();
    

    const item = products.find(((p)=>p.id == productid))
    // const item2 = products2.find(((p)=>p.id == productid2))
    console.log(item.title);
    console.log(item.description);
    console.log(item);
    console.log(item.image);
    console.log(item.price);
    
  return (
    <div className='border p-[12px] w-[400px]'>
       <div className='w-[250px] h-[370px]'><img className='w-[100%]' src={item.image} alt=''/></div>
        <h3>Product Title: {item.title}</h3>
        <h3>Description: {item.description}</h3>
          <h3 className='bg-[#1B59F8]'>price: ${item.price}</h3>
        <h3>Rate: {item.rating.rate}</h3>
        <h3>Count: {item.rating.count}</h3>


        
    </div>
  )
}

export default Detail