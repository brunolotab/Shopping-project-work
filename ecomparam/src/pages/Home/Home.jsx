import React from 'react'

function Home({products,count, updateCount}) {
  return (
    <div>
        {
            products.map(product => <Card product={product} count={count} updateCount={updateCount}/>)
        }
    </div>
  )
}

export default Home