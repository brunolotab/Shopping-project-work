import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import About from './pages/About/About';
import Footer from './components/Footer/Footer';
import Detail from './pages/Details/Detail';
import Signin from './pages/Signin/Signin';
import { products } from './data/products';


function App() {

  const menWear = products.filter((id)=>{return id.category === 'jewelery'})

  const [storeProducts, setStoreProducts] = useState(menWear);
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
            <Route path='/about' element={<About />} />
            <Route path='/signin' element={<Signin />} />
            <Route path='/product/:productid' element={<Detail />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
