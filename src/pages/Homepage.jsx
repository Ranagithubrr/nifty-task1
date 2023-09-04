import React, { useEffect, useState } from 'react'
import Products from '../components/Products';

const Homepage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await fetch('https://dummyjson.com/products?limit=10');
            const data = await response.json();
            if (response.ok) {
                setProducts(data.products);
                setLoading(false);
                setError('');
            } else {
                console.log('failed to fetch')
                setLoading(false);
                setError('Failed to Fetch Data')
            }
        }
        catch (err) {
            console.log('error');
            setLoading(false);
            setError('Failed to Fetch Data')
        }
    }
    useEffect(() => {
        fetchData();
    }, [])
    console.log(products);
    return (
        <div className=''>
            <div className="flex relative">
                {
                    loading ? <div className='w-4/5 flex items-center justify-center h-32'><span>Loading . . .</span></div> :
                        <div className="w-4/5 m-auto">
                            <h2 className='font-semibold text-2xl text-center py-2'>Our Products</h2>
                            {
                                error && <span className='block text-red-800 text-center'>There is an error to fetch Data</span>
                            }
                            <div className='grid grid-cols-4 gap-2 p-4'>
                                {
                                    products.map((ele) => {
                                        return (
                                            <Products Item={ele} />
                                        )
                                    })
                                }
                            </div>
                        </div>
                }

            </div>
        </div>
    )
}

export default Homepage;