import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {

  const [storeProducts, setStoreProducts] = useState(products);
  const [cartCount, setCartCount] = useState({ count: 0 });

  const updateCart = () => {
    setCartCount({ count: cartCount.count + 1 })
  }


  return (
    <>

      <BrowserRouter>
        <Navbar count={cartCount} />
        <Routes>
          <Route path='/home' element={<Home products={storeProducts} count={cartCount} updateCount={updateCart} />} />
          <Route parth='/about' element={<About />} />
          <Route parth='/signin' element={<Signin />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
