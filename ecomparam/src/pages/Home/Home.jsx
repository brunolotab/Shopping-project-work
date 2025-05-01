import React from 'react'
// import Card from './pages/Signin/Signin';
import Card from '../../components/Card/Card';
// import Card from './';


function Home({products,count, updateCount}) {
  console.log(products);
  
  
  return (
    <div className='flex flex-wrap gap-[1rem] w-[100%] justify-center'>
        
        {
          products.map(product =>  <div key={product.id} className='border border-b-2 m-[12px] w-[250px]'><Card product ={product} count={count} updateCount={updateCount} /> </div>)
        }
     
      
        
        
    </div>
  )
}

export default Home