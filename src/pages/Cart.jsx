import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../contexts/cartcontext'

const Cart = () => {

    const { cart, setCart } = useContext(CartContext);
    const DecreaseClicked = (id) => {
        const found = cart.find((element) => element.id === id);
        if (found.quantity > 1) {
            setCart(prevCart => prevCart.map(item =>
                item.id === id ? { ...item, quantity: item.quantity - 1 } : item
            ));
        } else {
            const updatedCart = cart.filter(item => item.id !== id);
            setCart(updatedCart);
        }
    }
    const IncreaseClicked = (id) => {
        setCart(prevCart => prevCart.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        ));

    }
    const [nettotal, setNetTotal] = useState(0);

    const GetTotalAmount = () => {
        let total = 0; 
        cart.map((ele) => {
            let itemTotal = ele.quantity * ele.price;
            total += itemTotal;
        });
        setNetTotal(total); 
    };

    useEffect(() => {
        GetTotalAmount();
    }, [cart]);

    return (
        <div className='rounded border shadow mt-5 sticky top-5 p-2 w-full md:w-2/3 m-auto'>
            <h4 className='font-semibold text-2xl text-center'>Cart</h4>
            <span className='font-semibold text-sm block text-center'>Added Items</span>
            {/* single item start*/}
            <div className='border p-2'>
                <div className='flex py-1'>
                    <div className='w-1/6 lg:w-1/5'>
                        <span className='block text-sm font-bold'>SL</span>
                    </div>
                    <div className='w-1/5'>
                        <span className='block text-sm font-bold'>Item Name</span>
                    </div>
                    <div className='w-1/5'>
                        <span className='block text-sm font-bold'>Price</span>
                    </div>
                    <div className='w-1/5'>
                        <span className='block text-sm font-bold'>Quantity</span>
                    </div>
                    <div className='w-2/5 lg:w-1/5'>
                        <span className='block text-sm font-bold'>Action</span>
                    </div>
                    <div className='w-1/5'>
                        <span className='block text-sm font-bold'>Total</span>
                    </div>
                </div>
                {
                    cart.length === 0 ? <div className='text-center py-10'>
                        <span>No Items Added Yet, Please Add Some</span>
                    </div> : (
                        cart.map((ele, index) => {
                            const { id, name, price, quantity } = ele;
                            return (
                                <div className='flex py-1'>
                                    <div className='w-1/6 lg:w-1/5'>
                                        <span className='block text-sm font-semibold'>{index + 1}</span>
                                    </div>
                                    <div className='w-1/5'>
                                        <span className='block text-sm font-semibold'>{name}</span>
                                    </div>
                                    <div className='w-1/5'>
                                        <span className='block text-sm font-semibold'>{`${price}`}</span>
                                    </div>
                                    <div className='w-1/5'>
                                        <span className='block text-sm font-semibold'>{quantity}</span>
                                    </div>
                                    <div className='w-2/5 lg:w-1/5'>
                                        <button className='bg-gray-200 px-2 rounded font-bold' onClick={() => DecreaseClicked(id)}>-</button>
                                        <button className='px-3'>{quantity}</button>
                                        <button className='bg-gray-200 px-2 rounded font-bold' onClick={() => IncreaseClicked(id)}>+</button>
                                    </div>
                                    <div className='w-1/5'>
                                        <span className='block text-sm font-semibold'>${quantity * price}</span>
                                    </div>
                                </div>
                            )
                        })
                    )

                }
            </div>
            {
                cart.length !== 0 && <>

                    <div className='border-t-2 w-full lg:w-1/2 ml-auto mt-5'>
                        <div className='flex justify-between'>
                            <div>
                                <span className='block text-sm font-semibold'>Net Total</span>
                            </div>
                            <div>
                                <span className='block text-sm font-semibold'> ${nettotal}</span>
                            </div>
                        </div>
                        <div className='flex justify-between'>
                            <div>
                                <span className='block text-sm font-semibold'>Tax</span>
                            </div>
                            <div>
                                <span className='block text-sm font-semibold'> $0</span>
                            </div>
                        </div>
                        <div className='flex justify-between'>
                            <div>
                                <span className='block text-sm font-semibold'>Vat</span>
                            </div>
                            <div>
                                <span className='block text-sm font-semibold'> $0</span>
                            </div>
                        </div>
                        <div className='flex justify-between border-t-2'>
                            <div>
                                <span className='block text-xl font-semibold'>Grand Total</span>
                            </div>
                            <div>
                                <span className='block text-xl font-semibold'> ${nettotal}</span>
                            </div>
                        </div>
                    </div>
                    <div className='text-right py-4'>
                        <button className='bg-green-500 rounded px-5 py-1 text-sm font-semibold text-gray-100'>Check Out Now</button>
                    </div>
                </>
            }
            {/* single item end*/}
        </div>
    )
}

export default Cart