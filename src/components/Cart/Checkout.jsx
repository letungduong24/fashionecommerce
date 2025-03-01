import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaCcPaypal } from "react-icons/fa";
import PaypalButton from './PaypalButton';

const cartProducts = [
    {
        productId: 1,
        name: 'Áo phông',
        size: 'L',
        color: 'Đỏ',
        quantity: 1,
        price: 15,
        image: 'https://picsum.photos/200'
    },
    {
        productId: 1,
        name: 'Áo phông',
        size: 'L',
        color: 'Đỏ',
        quantity: 1,
        price: 15,
        image: 'https://picsum.photos/200'
    },
    {
        productId: 2,
        name: 'Quần jeans',
        size: 'L',
        color: 'Xanh',
        quantity: 1,
        price: 25,
        image: 'https://picsum.photos/200'
    },
  ]
const Checkout = () => {
  const navigate = useNavigate()

  const [checkoutID, setCheckoutID] = useState(null)

  const [shippingAddress, setShippingAddress] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    address1: '',
    address2: '',
    address3: '',
    city: '',
  })

  const handleCheckout = (e) => {
    e.preventDefault()
    setCheckoutID(123)
  }
  
  const handlePaymentSuccess = (details) => {
    console.log('payment successful', details);
    navigate('/order-confirmation')
  }

  return (
    <div className='flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6'>
        <div className="bg-white rounded-lg p-1">
            <h2 className='text-2xl uppercase mb-6'>Thanh toán</h2>
            <form onSubmit={handleCheckout} className=''>
                <h3 className='text-lg mb-4'>Thông tin</h3>
                <div className="mb-4">
                    <label htmlFor="" className='block text-gray-700'>Email</label>
                    <input type="email" value='username@email' className='bg-gray-200 w-full p-2 border rounded' disabled/>
                </div>
                <div className="mb-4 grid grid-cols-2 gap-4">
                    <div className="">
                        <label htmlFor="" className='block text-gray-700'>Họ</label>
                        <input 
                            type="text" 
                            onChange={(e) => setShippingAddress({...shippingAddress, firstName: e.target.value})} 
                            value={shippingAddress.firstName} 
                            className='w-full p-2 border rounded'
                            required
                        />
                    </div>
                    <div className="">
                        <label htmlFor="" className='block text-gray-700'>Tên</label>
                        <input 
                            type="text" 
                            onChange={(e) => setShippingAddress({...shippingAddress, lastName: e.target.value})} 
                            value={shippingAddress.lastName} 
                            className='w-full p-2 border rounded'
                            required
                        />
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="" className='block text-gray-700'>SĐT</label>
                    <input
                        type="number" 
                        value={shippingAddress.phone} 
                        className='w-full p-2 border rounded'
                        onChange={(e) => setShippingAddress({...shippingAddress, phone: e.target.value})} 
                    />
                </div>
                <h3 className='text-lg mb-4'>Địa chỉ</h3>
                <div className="mb-4 grid grid-cols-2 gap-4">
                    <div className="">
                        <label htmlFor="" className='block text-gray-700'>Tên đường, số nhà</label>
                        <input 
                            type="text" 
                            onChange={(e) => setShippingAddress({...shippingAddress, address1: e.target.value})} 
                            value={shippingAddress.address1} 
                            className='w-full p-2 border rounded'
                            required
                        />
                    </div>
                    <div className="">
                        <label htmlFor="" className='block text-gray-700'>Phường/xã</label>
                        <input 
                            type="text" 
                            onChange={(e) => setShippingAddress({...shippingAddress, address2: e.target.value})} 
                            value={shippingAddress.address2} 
                            className='w-full p-2 border rounded'
                            required
                        />
                    </div>
                </div>
                <div className="mb-4 grid grid-cols-2 gap-4">
                    <div className="">
                        <label htmlFor="" className='block text-gray-700'>Quận/Huyện</label>
                        <input 
                            type="text" 
                            onChange={(e) => setShippingAddress({...shippingAddress, address3: e.target.value})} 
                            value={shippingAddress.address3} 
                            className='w-full p-2 border rounded'
                            required
                        />
                    </div>
                    <div className="">
                        <label htmlFor="" className='block text-gray-700'>Tỉnh/Thành phố</label>
                        <input 
                            type="text" 
                            onChange={(e) => setShippingAddress({...shippingAddress, city: e.target.value})} 
                            value={shippingAddress.city} 
                            className='w-full p-2 border rounded'
                            required
                        />
                    </div>
                </div>
                {!checkoutID ? (
                    <button className='bg-gray-700 text-white hover:bg-gray-600 transition-all duration-300 w-full px-4 py-2 cursor-pointer rounded-lg'>Thanh toán</button>
                ) : (
                    <PaypalButton amount={100} onSuccess={handlePaymentSuccess} onError={(err) => alert('Payment failed. Try again')}/>
                )}
            </form>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className='text-lg mb-4'>Chi tiết hóa đơn</h3>
            <div className="border-t border-gray-300 mb-4">
                {cartProducts.map((product, index) => (
                    <div key={index} className='flex items-start justify-between py-2 border-b border-gray-300'>
                        <div className="flex items-start">
                            <img src={product.image} className='w-20 h-24 object-cover mr-4' alt="" />
                            <div className="">
                                <h3 className='text-md'>{product.name}</h3>
                                <p className='text-gray-500'>Size: {product.size}</p>
                                <p className='text-gray-500'>Màu: {product.color}</p>
                            </div>
                        </div>
                        <p className='text-lg font-medium'>{product.price} vnđ</p>
                    </div>
                ))}
            </div>
            <div className="flex justify-between items-center text-lg mb-4">
                <p>Tổng</p>
                <p className=''>100 vnđ</p>
            </div>
            <div className="flex justify-between items-center text-lg pb-4 border-b border-gray-300">
                <p>Phí vận chuyển</p>
                <p className=''>Miễn phí</p>
            </div>
            <div className="flex justify-between items-center text-lg mt-4">
                <p>Thành tiền</p>
                <p className='font-bold'>100 vnđ</p>
            </div>
        </div>
    </div>
  )
}

export default Checkout