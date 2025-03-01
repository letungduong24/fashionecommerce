import React from 'react'
import { GrMoney } from "react-icons/gr";
import { FaUser } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';

const orders = [
    {
        id: 123,
        user: {
            name: 'John',
            phone: '0865641682'
        },
        totalPrice: 110,
        status: 'Chờ duyệt',
        createdAt: '2022-06-06'
    },
    {
        id: 11,
        user: {
            name: 'John',
            phone: '0865641682'
        },
        totalPrice: 110,
        status: 'Chờ duyệt',
        createdAt: '2022-06-06'
    },
    {
        id: 11,
        user: {
            name: 'John',
            phone: '0865641682'
        },
        totalPrice: 110,
        status: 'Chờ duyệt',
        createdAt: '2022-06-06'
    },
    {
        id: 11,
        user: {
            name: 'John',
            phone: '0865641682'
        },
        totalPrice: 110,
        status: 'Chờ duyệt',
        createdAt: '2022-06-06'
    },
    {
        id: 11,
        user: {
            name: 'John',
            phone: '0865641682'
        },
        totalPrice: 110,
        status: 'Chờ duyệt',
        createdAt: '2022-06-06'
    },
    {
        id: 11,
        user: {
            name: 'John',
            phone: '0865641682'
        },
        totalPrice: 110,
        status: 'Chờ duyệt',
        createdAt: '2022-06-06'
    },
    {
        id: 11,
        user: {
            name: 'John',
            phone: '0865641682'
        },
        totalPrice: 110,
        status: 'Chờ duyệt',
        createdAt: '2022-06-06'
    },
    {
        id: 11,
        user: {
            name: 'John',
            phone: '0865641682'
        },
        totalPrice: 110,
        status: 'Chờ duyệt',
        createdAt: '2022-06-06'
    },
    {
        id: 11,
        user: {
            name: 'John',
            phone: '0865641682'
        },
        totalPrice: 110,
        status: 'Chờ duyệt',
        createdAt: '2022-06-06'
    },
    {
        id: 11,
        user: {
            name: 'John',
            phone: '0865641682'
        },
        totalPrice: 110,
        status: 'Chờ duyệt',
        createdAt: '2022-06-06'
    },
    {
        id: 11,
        user: {
            name: 'John',
            phone: '0865641682'
        },
        totalPrice: 110,
        status: 'Đã giao',
        createdAt: '2022-06-06'
    },
    {
        id: 11,
        user: {
            name: 'John',
            phone: '0865641682'
        },
        totalPrice: 110,
        status: 'Đang giao',
        createdAt: '2022-06-06'
    }
]
const AdminHome = () => {
  const navigate = useNavigate()
  return (
    <div className='flex flex-col h-full'>
        <h1 className='text-3xl font-bold mb-6'>Trang chủ</h1>
        <h2 className='mb-4 font-semibold text-2xl'>Thống kê</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <div className="p-4 shadow-md rounded-lg flex-col flex items-center justify-center">
                <h2 className=' font-semibold flex items-center gap-2 text-gray-600'>
                    <GrMoney className='hidden sm:block' />
                    Doanh thu tuần
                </h2>
                <p className='text-2xl font-bold text-blue-600'>10000</p>
            </div>
            <div className="p-4 shadow-md rounded-lg flex-col flex items-center justify-center">
                <h2 className=' font-semibold flex items-center gap-2 text-gray-600'>
                    <FaUser className='hidden sm:block' />
                    Người dùng
                </h2>
                <p className='text-2xl font-bold text-blue-600'>100</p>
            </div>
            <div className="p-4 shadow-md rounded-lg flex-col flex items-center justify-center">
                <h2 className=' font-semibold flex items-center gap-2 text-gray-600'>
                    <FaBoxOpen className='hidden sm:block' />
                    Đơn chờ duyệt
                </h2>
                <p className='text-2xl font-bold text-blue-600'>100</p>
            </div>
            <div className="p-4 shadow-md rounded-lg flex-col flex items-center justify-center">
                <h2 className=' font-semibold flex items-center gap-2 text-gray-600'>
                    <TbTruckDelivery className='hidden sm:block' />
                    Đơn đang giao
                </h2>
                <p className='text-2xl font-bold text-blue-600'>100</p>
            </div>
        </div>
        <h2 className='mb-4 font-semibold text-2xl'>Đơn hàng gần đây</h2>
        <div className="w-full rounded-lg overflow-auto shadow-md">
            <table className="w-full border-separate border-spacing-0">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="px-4 py-2 first:rounded-tl-lg last:rounded-tr-lg">Mã đơn</th>
                        <th className="px-4 py-2">Tên khách</th>
                        <th className="px-4 py-2">Số điện thoại</th>
                        <th className="px-4 py-2">Trạng thái</th>
                        <th className="px-4 py-2 last:rounded-tr-lg">Thời gian</th>
                    </tr>
                </thead>
                <tbody>
                    {orders && orders.length>0 ? (orders.map((order)=> (
                        <tr onClick={()=>{navigate('/order/1')}} className='hover:bg-gray-100 transition-all duration-300 cursor-pointer'>
                            <th className='px-4 py-3'>{order.id}</th>
                            <th className='px-4 py-3'>{order.user.name}</th>
                            <th className='px-4 py-3'>{order.user.phone}</th>
                            <th className={`px-4 py-3 
                                ${order.status === 'Chờ duyệt' ? 'text-red-400' : ''}
                                ${order.status === 'Đang giao' ? 'text-amber-500' : ''}
                                ${order.status === 'Đã giao' ? 'text-emerald-800' : ''}

                            `}>{order.status}</th>
                            <th className='px-4 py-3'>{new Date(order.createdAt).toLocaleDateString()}</th>
                        </tr>
                    ))) : (
                        <tr>                            
                            <th colSpan={5} className='px-4 py-3'>Không có đơn hàng nào gần đây</th>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default AdminHome