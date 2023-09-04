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
          <Link to="/">
        <div className='flex items-center'>
          <img src="https://niftyitsolution.com/images/nifty_logo.png" alt="" className='h-20' />
          <h4 className='font-bold text-2xl pl-4 hidden sm:block'>NIFTY <span className='text-blue-600'>IT</span> SOLUTION LTD</h4>
        </div>
          </Link>
        <div className='flex items-center justify-between py-4 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 '>
          <ul className='lg:flex items-center space-x-4 sm:space-x-6 md:space-x-8 hidden lg:block'>
            <li className='font-semibold cursor-pointer'>
              <Link to="/">Home</Link>
            </li>
            <li className='font-semibold cursor-pointer'>
              <Link to="/about">About Us</Link>
            </li>
            <li className='font-semibold cursor-pointer'>
              <Link to="/contact">Contact Us</Link>
            </li>

          </ul>
          <span className='relative pl-4'>
            <Link to="cart" className='cursor-pointer'>
              <span className='border-2 rounded-full border-gray-800 px-2 absolute -top-3 right-0'>{totalQuantity}</span>
              <img src={CartIcon} alt="Cart" />
            </Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Header;