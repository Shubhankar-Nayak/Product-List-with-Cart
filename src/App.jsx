import { useState, useEffect } from 'react'
import './App.css'
import Card from './components/Card.jsx'
import Cart from './components/Cart.jsx'
import data from './components/product-data.json'
import baklava from './assets/images/image-baklava-mobile.jpg'
import brownie from './assets/images/image-brownie-mobile.jpg'
import cake from './assets/images/image-cake-mobile.jpg'
import creme from './assets/images/image-creme-brulee-mobile.jpg'
import macaron from './assets/images/image-macaron-mobile.jpg'
import meringue from './assets/images/image-meringue-mobile.jpg'
import panna from './assets/images/image-panna-cotta-mobile.jpg'
import tiramisu from './assets/images/image-tiramisu-mobile.jpg'
import waffle from './assets/images/image-waffle-mobile.jpg'

import baklavad from './assets/images/image-baklava-desktop.jpg'
import brownied from './assets/images/image-brownie-desktop.jpg'
import caked from './assets/images/image-cake-desktop.jpg'
import cremed from './assets/images/image-creme-brulee-desktop.jpg'
import macarond from './assets/images/image-macaron-desktop.jpg'
import meringued from './assets/images/image-meringue-desktop.jpg'
import pannad from './assets/images/image-panna-cotta-desktop.jpg'
import tiramisud from './assets/images/image-tiramisu-desktop.jpg'
import waffled from './assets/images/image-waffle-desktop.jpg'

const images = { baklava, brownie, cake, creme, macaron, meringue, panna, tiramisu, waffle };
const imagesd = { baklavad, brownied, caked, cremed, macarond, meringued, pannad, tiramisud, waffled };

function App() {
  const [cart, setCart] = useState({});

  const updateCart = (id, quantity) => {
    setCart((prevCart) => {
      if (quantity === 0) {
        const updatedCart = { ...prevCart };
        delete updatedCart[id];
        return updatedCart;
      }
      return { ...prevCart, [id]: quantity };
    });
  };

  const cartItems = data
    .filter((item) => cart[item.id]) 
    .map((item) => ({
      ...item,
      quantity: cart[item.id],
  }));

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='w-[100%] h-full font-RedHatText laptop:flex laptop:flex-row laptop:justify-center laptop:py-20'>

      <div className='laptop:w-[60%]'>
        <h1 className='text-[40px] font-bold ml-6 mb-5'>Desserts</h1>
        <div className='flex flex-col justify-center items-center laptop:flex-none laptop:grid laptop:grid-cols-3'>
          {data.map((i) => (
            <Card 
              key={i.id}
              id={i.id} 
              title={i.title} 
              desc={i.desc} 
              price={i.price} 
              image={isMobile ? images[i.imageKey] : imagesd[i.imageKeyd]}
              quantity={cart[i.id] || 0}
              updateCart={updateCart} 
            />
          ))}
        </div>
      </div>
      
      <div className='laptop:w-[30%]'>
        <Cart cartItems={cartItems} updateCart={updateCart} />
      </div>
    </div>
  )
}

export default App
