import React, { useEffect, useState } from 'react'
import { HiCheck } from "react-icons/hi";
import { HiOutlineX } from "react-icons/hi";
import { TbListDetails } from "react-icons/tb";
import { Link } from 'react-router-dom';

const MyOrders = () => {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    setTimeout(() => {
        const mockOrders = [
            {
                id: 1,
                createdAt: new Date(),
                shippingAddress: {city: 'Hà Nội', country: 'Việt Nam'},
                orderItems: [
                    {
                        name: 'Product 1',
                        image: 'https://picsum.photos/500/500'
                    },
                    {
                        name: 'Product 2',
                        image: 'https://picsum.photos/500/500'
                    }
                ],
                totalPrice: 100,
                isDelivered: true,
            },
            {
                id: 2,
                createdAt: new Date(),
                shippingAddress: {city: 'Hà Nội', country: 'Việt Nam'},
                orderItems: [
                    {
                        name: 'Product 2',
                        image: 'https://picsum.photos/500/500'
                    }
                ],
                totalPrice: 100,
                isDelivered: true,
            },
            {
                id: 3,
                createdAt: new Date(),
                shippingAddress: {city: 'Hà Nội', country: 'Việt Nam'},
                orderItems: [
                    {
                        name: 'Product 3',
                        image: 'https://picsum.photos/500/500'
                    }
                ],
                totalPrice: 100,
                isDelivered: false,
            },
        ]
        setOrders(mockOrders);
    }, 1000)
  }, [])

  return (
    <div className='max-w-7xl mx-auto p-4 sm:p-6'>
        <h2 className='text-xl sm:text-2xl font-bold mb-6'>Đơn hàng</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
            {orders && orders.length >0 ? (
                orders.map((order)=>(
                    <div className='flex gap-4 shadow rounded-2xl p-3'>
                        <img src={order.orderItems[0].image} className='h-23 w-23 rounded-2xl' alt="" />
                        <div className="flex flex-col justify-between grow">
                            <div className="">
                                <p className='text-gray-600 font-medium'>{order.orderItems[0].name}</p>
                                <p className={`${order.orderItems.length > 1 ? 'block' : 'hidden'} text-gray-600 text-sm`}>và {order.orderItems.length - 1} sản phẩm khác</p>
                            </div>
                            <div className="">
                                <div className="w-fit">
                                    <p className={`text-sm font-medium px-1 py-0.5 rounded-lg ${order.isDelivered ? 'bg-emerald-200 text-emerald-900' : 'bg-amber-300 text-amber-900'}`}>{order.isDelivered ? 'Đã giao' : 'Đang giao'}</p>
                                </div>
                                <p className='block font-bold text-gray-700'>Tổng: {order.totalPrice} vnđ</p>
                            </div>
                        </div>
                        <Link to={`/order/1`}>
                            <TbListDetails className='text-3xl text-gray-600'/>
                        </Link>
                    </div>
                ))
            ) : (
                <p className=''>Bạn không có đơn hàng nào</p>
            )}
        </div>
    </div>
  )
}

export default MyOrders