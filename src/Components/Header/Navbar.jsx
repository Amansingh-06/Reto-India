import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import CartPage from '../CartPage/CartPage';
import { useSelector } from 'react-redux';


function Navbar({ setcartpage, cartPage }) {
    const totalQuantity = useSelector(state => state.cart.totalQuantity);

  return (
      <div className='w-full flex justify-end align-center p-5 px-10 fixed z-10'>
          <div className='p-3 border-2  rounded-full relative '>
              <FaCartShopping className='text-3xl cursor-pointer' onClick={()=>{setcartpage(!cartPage)}} />
              <p className='absolute -top-1 -right-1 text-xl text-red-600 '>{totalQuantity}</p>
          </div>
          {cartPage && (
              <CartPage />
         )} 
    </div>
  )
}

export default Navbar