import React, { useState } from 'react'
import addcart from '../assets/images/icon-add-to-cart.svg'
import plus from '../assets/images/icon-increment-quantity.svg'
import minus from '../assets/images/icon-decrement-quantity.svg'

const Card = ({ id, title, desc, price, image, quantity, updateCart }) => {

  return (
    <div className='w-[70%] my-5'>
      <div className='w-[100%] relative'>
        <div className='w-[100%] absolute bottom-[-25px]'>
          {quantity === 0 ? (
            <button
              className='w-[190px] bg-white mx-auto border-2 border-Rose400 font-semibold pl-6 pr-8 py-3 rounded-3xl flex'
              onClick={() => updateCart(id, 1)}
            >
              <img className='mx-2' src={addcart} alt="Add to cart" /> Add to Cart
            </button>
          ) : (
            <div className='w-[190px] bg-Red mx-auto border-2 border-Rose400 font-semibold py-3 rounded-3xl flex justify-around items-center'>
              <div className='w-[20px] rounded-full border-white border-2 aspect-square flex justify-center items-center'>
                <button
                  className='text-lg font-bold'
                  onClick={() => updateCart(id, quantity - 1)}
                >
                  <img src={minus} alt="" />
                </button>
              </div>
              <span className='mx-4 text-lg text-white'>{quantity}</span>
              <div className='w-[20px] rounded-full border-white border-2 aspect-square flex justify-center items-center'>
                <button
                  className='text-lg font-bold'
                  onClick={() => updateCart(id, quantity + 1)}
                >
                  <img src={plus} alt="" />
                </button>
              </div>
            </div>
          )}
        </div>
        <img className={`rounded-lg ${quantity === 0 ? "" : "border-Red border-4"}`} src={image} alt={title} />
      </div>
      <div className='mt-10'>
        <p>{title}</p>
        <p className='text-[20px] laptop:text-[16px] font-semibold text-Rose900'>{desc}</p>
        <p className='text-[20px] font-medium text-Red'>{price}</p>
      </div>
    </div>
  )
}

export default Card