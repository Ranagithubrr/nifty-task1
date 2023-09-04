import React, { useContext } from 'react'
import { CartContext } from '../contexts/cartcontext';

const Products = (props) => {
    const { title, thumbnail, price, category, description, id } = props.Item;

    const { cart, setCart } = useContext(CartContext);

    const newItemAdded = {
        id:id,
        name:title,
        price:price,
        quantity:1,              
    }

    const AddCartHandle = (newItem) => {
        const itemexist = cart.find(item => item.id === newItem.id);
        if (itemexist) {
            setCart(prevCart => prevCart.map(item =>
                item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
            ));
        } else {
            setCart(prevCart => [...prevCart, newItemAdded]);
        }
        console.log(cart);
    }
    return (
        <div className='border rounded px-2 py-3 shadow relative'>
            <img src={thumbnail} alt="" className='h-32 w-38 rounded m-auto' />
            <div className=''>
                <span className='font-semibold text-sm mt-2 block text-gray-500 my-4'>Product Details</span>
                <div className='pb-5'>
                    <div className='flex'>
                        <div className='w-2/5'>
                            <span className='block text-sm font-semibold text-gray-700'>Product Name</span>
                        </div>
                        <div className='w-3/5'>
                            <span className='block text-sm font-semibold text-gray-700'>: {title}</span>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='w-2/5'>
                            <span className='block text-sm font-semibold text-gray-700'>Price</span>
                        </div>
                        <div className='w-3/5'>
                            <span className='block text-lg font-bold text-gray-700'>: ${price}</span>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='w-2/5'>
                            <span className='block text-sm font-semibold text-gray-700'>Category</span>
                        </div>
                        <div className='w-3/5'>
                            <span className='block text-sm font-semibold text-gray-700'>: {category}</span>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='w-2/5'>
                            <span className='block text-sm font-semibold text-gray-700'>Description</span>
                        </div>
                        <div className='w-3/5 line-clamp-3'>
                            <span className='block text-sm font-semibold text-gray-700'>: {description}</span>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-center  pt-5'>
                    <button class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 my-2 px-4 rounded absolute bottom-0"
                        onClick={() => AddCartHandle(newItemAdded)}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Products