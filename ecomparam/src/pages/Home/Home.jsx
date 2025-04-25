import React from 'react'
// import Card from './pages/Signin/Signin';
import Card from '../../components/Card/Card';
// import Card from './';


function Home({products,count, updateCount}) {
  return (
    <div>
        {/* {
            products.map(product => <Card product={product} count={count} updateCount={updateCount}/>)
        } */}
        {
          products.map(product =>  <div key={product.id}><Card product ={product} count={count} updateCount={updateCount} /> </div>)
        }
        
        
    </div>
  )
}

export default Home