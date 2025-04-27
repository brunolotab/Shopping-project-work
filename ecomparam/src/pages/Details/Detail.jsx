import React from 'react'
import { useParams } from 'react-router-dom'

function Detail({products}) {

    const {productid} = useParams();

    const item = products.find(((p)=>p.id == productid))
    console.log(item.title);
    console.log(item.description);
    console.log(item);
    console.log(item.image);
    console.log(item.price);
    
  return (
    <div className='border p-[12px] w-[400px]'>
        <div className='w-[250px] h-[400px]'><img className='w-[100%]' src={item.image} alt=''/></div>
        <h3>Product Title: {item.title}</h3>
        <h3>Description: {item.description}</h3>
        <h3>Description:${item.price}</h3>
    </div>
  )
}

export default Detail