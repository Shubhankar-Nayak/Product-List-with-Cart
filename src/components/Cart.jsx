import React, { useState } from 'react'
import empty from '../assets/images/illustration-empty-cart.svg'
import carneu from '../assets/images/icon-carbon-neutral.svg'
import removeitem from '../assets/images/icon-remove-item.svg'
import confirm from '../assets/images/icon-order-confirmed.svg'

import baklava from '../assets/images/image-baklava-thumbnail.jpg'
import brownie from '../assets/images/image-brownie-thumbnail.jpg'
import cake from '../assets/images/image-cake-thumbnail.jpg'
import creme from '../assets/images/image-creme-brulee-thumbnail.jpg'
import macaron from '../assets/images/image-macaron-thumbnail.jpg'
import meringue from '../assets/images/image-meringue-thumbnail.jpg'
import panna from '../assets/images/image-panna-cotta-thumbnail.jpg'
import tiramisu from '../assets/images/image-tiramisu-thumbnail.jpg'
import waffle from '../assets/images/image-waffle-thumbnail.jpg' 

const images = {baklava,brownie,cake,creme,macaron,meringue,panna,tiramisu,waffle}

const Cart = ({ cartItems, updateCart }) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const totalPrice = cartItems.reduce((total, item) => total + item.price.slice(1) * item.quantity, 0);

  const handleConfirmOrder = () => {
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    cartItems.forEach((item) => updateCart(item.id, 0));
    setIsPopupVisible(false);
  };

  return (
    <div className='w-[90%] laptop:w-[450px] laptop:h-fit bg-white rounded-lg mx-auto p-5'>
      <h1 className='text-[25px] text-Red font-bold'>Your Cart({cartItems.length})</h1>
      {cartItems.length === 0 ? (
          <div className='flex flex-col justify-center items-center my-5'>
              <img src={empty} alt="" />
              <p className='text-Rose500 font-semibold mt-5'>Your added items will appear here.</p>
          </div>
      ) : (
          <div>
            <div className='laptop:max-h-[45vh] overflow-scroll overflow-x-hidden hide-scrollbar'>
              {cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between py-4 border-b-2">
                
                  <div>
                    <p className="text-Rose900 font-medium">{item.desc}</p>
                    <div className='flex mt-1'>
                        <p className='text-Red font-bold'>{item.quantity}x</p>
                        <p className='ml-5 mr-3 text-Rose500'>@ {item.price}</p>
                        <p className='text-Rose500 font-bold'>${(item.price.slice(1) * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>

                  <div className='w-[30px] flex justify-center items-center border-2 border-Rose300 rounded-full aspect-square'>
                    <button onClick={() => updateCart(item.id, 0)}><img src={removeitem} alt="" /></button>
                  </div>
    
              </div>
            ))}
            </div>

            <div className='flex justify-between items-center my-4'>
                <p className='font-medium'>Order Total</p>
                <p className='text-[30px] text-Rose900 font-bold'>${totalPrice.toFixed(2)}</p>
            </div>
            <div className='bg-Rose50 py-3 mb-8 rounded-lg flex justify-center items-center'>
                <img className='mx-2' src={carneu} alt="" />
                <p className='text-Rose900'>This is a <span className='font-semibold'>carbon-neutral</span> delivery</p>
            </div>
            <button className='w-[100%] py-3 bg-Red text-[18px] text-white font-medium rounded-full hover:bg-[#7c2d12]' onClick={handleConfirmOrder}>Confirm Order</button>
          </div>
      )}

      {isPopupVisible && (
        <div className="w-full h-full fixed inset-x-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-end laptop:items-center z-50">
          <div className="laptop:w-[40vw] laptop:h-fit bg-white rounded-xl p-8 shadow-lg w-[100%]">
            <img src={confirm} alt="confirm" />
            <h2 className="text-[40px] text-Rose900 leading-10 font-bold mt-6 mb-4">
              Order Confirmed
            </h2>
            <p className="text-Rose500 mb-5">
              We hope you enjoy your food!
            </p>

            <div className='bg-Rose100 rounded-lg'>
              <div className='max-h-[40vh] rounded-lg overflow-scroll hide-scrollbar'>
                {cartItems.map((item) => (
                  <div className='bg-Rose100 p-2 border-b-2 flex justify-between items-center'>
                    <div className='flex'>
                      <img className='w-[60px] rounded-lg mr-3' src={images[item.imageKey]} alt={item.title} />
                      <div className='w-[70%]'>
                        <p className='text-Rose900 font-medium whitespace-nowrap text-ellipsis overflow-hidden'>{item.desc}</p>
                        <div className='flex gap-4'>
                          <p className='text-Red font-bold'>{item.quantity}x</p>
                          <p className='text-Rose500'>@ {item.price}</p>
                        </div>
                      </div>
                    </div>
  
                    <p className='text-Rose900 font-bold'>${(item.price.slice(1) * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>

              <div className='flex justify-between items-center p-4 my-4'>
                <p>Order Total</p>
                <p className='text-[30px] text-Rose900 font-bold'>${totalPrice.toFixed(2)}</p>
              </div>
            </div>

            <button
              className="mt-6 w-[100%] py-2 bg-Red text-white font-medium rounded-full hover:bg-[#7c2d12]"
              onClick={handleClosePopup}
            >
              Start New Order
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart