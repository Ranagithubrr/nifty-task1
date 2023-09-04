import React, { useContext } from 'react';
import CartIcon from '../img/cart.png';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/cartcontext';

const Header = () => {
  const { cart } = useContext(CartContext); 
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div>
      <div className='flex justify-between bg-gray-200 px-20 py-3'>
        <div className='flex items-center'>
          <img src="https://niftyitsolution.com/images/nifty_logo.png" alt="" className='h-20' />
          <h4 className='font-bold text-2xl pl-4'>NIFTY <span className='text-blue-600'>IT</span> SOLUTION LTD</h4>
        </div>
        <div className='flex items-center'>
          <ul className='flex items-center'>
            <li className='px-4 font-semibold cursor-pointer'><Link to="/">Home</Link></li>
            <li className='px-4 font-semibold cursor-pointer'><Link to="/about">About Us</Link></li>
            <li className='px-4 font-semibold cursor-pointer'><Link to="/contact">Contact Us</Link></li>
            <li className='px-4 font-semibold cursor-pointer relative'>
              <Link to="cart">
                <span className='border-2 rounded-full border-gray-800 px-2 absolute -top-3 right-0'>{totalQuantity}</span>
                <img src={CartIcon} alt="Cart" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header;