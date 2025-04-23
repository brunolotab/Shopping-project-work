import React from 'react'
import { useParams } from 'react-router-dom'

function Detail() {

    const {productid} = useParams();

    const item = products.find(((p)=>p.id == productid))
  return (
    <div className='flex justify-center w-[700px]'>
        <img className='w-12' src={productid.image} alt=''/>
        <h1>Product Title: {productid.tile}</h1>
        <h1>Description: {productid.description}</h1>
    </div>
  )
}

export default Detail