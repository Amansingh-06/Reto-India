import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, incrementQuantity, decrementQuantity } from '../Redux/CartSlice';

const CartPage = () => {
    const cartItems = useSelector(state => state.cart.items);
    const totalQuantity = useSelector(state => state.cart.totalQuantity);
    const dispatch = useDispatch();

    // Handle removing item from the cart
    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCart(id));
    };

    // Handle incrementing quantity
    const handleIncrement = (id) => {
        dispatch(incrementQuantity(id));
    };

    // Handle decrementing quantity
    const handleDecrement = (id) => {
        dispatch(decrementQuantity(id));
    };

    return (
        <div className='min-h-screen flex   bg-gray-100 py-10 absolute top-20 w-4/12'>
            <div className='w-full max-w-4xl bg-white rounded-lg shadow-xl p-8'>
                <h2 className='text-3xl font-semibold text-center mb-8 text-gray-800'>Your Cart</h2>
                {cartItems.length === 0 ? (
                    <p className='text-center text-xl text-gray-600'>Your cart is empty</p>
                ) : (
                    <div>
                        {cartItems.map(item => (
                            <div key={item.id} className='flex items-center justify-between border-b border-gray-200 py-4'>
                                <img src={item.src} alt={item.title} className='w-16 h-16 object-cover rounded-md' />
                                <div className='flex-1 ml-4'>
                                    <h3 className='text-xl font-medium text-gray-800'>{item.name}</h3>
                                    <p className='text-gray-600'>Price: ${item.price}</p>
                                </div>
                                <div className='flex items-center'>
                                    <button
                                        onClick={() => handleDecrement(item.id)}
                                        className='bg-gray-300 hover:bg-gray-400 text-white font-semibold py-1 px-3 rounded-md mr-2'>
                                        -
                                    </button>
                                    <span className='text-lg font-semibold'>{item.quantity}</span>
                                    <button
                                        onClick={() => handleIncrement(item.id)}
                                        className='bg-gray-300 hover:bg-gray-400 text-white font-semibold py-1 px-3 rounded-md ml-2'>
                                        +
                                    </button>
                                </div>
                                <button
                                    onClick={() => handleRemoveFromCart(item.id)}
                                    className='ml-4 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md'>
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                )}
                {cartItems.length > 0 && (
                    <div className='mt-6'>
                        <h3 className='text-xl font-semibold text-gray-800'>
                            Total Items: <span className='font-bold'>{totalQuantity}</span>
                        </h3>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartPage;
