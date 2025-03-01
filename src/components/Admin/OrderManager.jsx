import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const pendingOrder = [
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
]

const deliveringOrder = [
    {
        id: 123,
        user: {
            name: 'John',
            phone: '0865641682'
        },
        totalPrice: 110,
        status: 'Đang giao',
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
    }, 
]

const doneOrder = [
    {
        id: 123,
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
        status: 'Đã giao',
        createdAt: '2022-06-06'
    }, 
]

const OrderManager = () => {
  const navigate = useNavigate()
  const [tab, setTab] = useState('pending')
  const [orders, setOrders] = useState(pendingOrder)
  const handleChangeTab = (type, typeOrders) => {
    setTab(type)
    setOrders(typeOrders)
  }
  return (
    <div className='flex flex-col h-full'>
        <h1 className='text-3xl font-bold mb-6'>Quản lý đơn hàng</h1>
        <div className="flex h-full shadow-md w-full p-4 gap-3 flex-col">
            <div className="flex justify-between mb-4">
                <div className="text-sm s w-full flex justify-center items-center">
                    <button 
                        onClick={() => {handleChangeTab('pending', pendingOrder)}}
                        className={`${tab === 'pending' ? 'border-b border-blue-600 text-blue-600' : 'text-gray-600 hover:text-gray-700 hover:border-b hover:border-gray-300 '}   
                        w-full px-4 py-2 font-bold cursor-pointer`}
                    >
                        Chờ xác nhận
                    </button>
                </div>
                <div className="text-sm w-full flex justify-center items-center">
                <button 
                        onClick={() => {handleChangeTab('delivering', deliveringOrder)}}
                        className={`${tab === 'delivering' ? 'border-b border-blue-600 text-blue-600' : 'text-gray-600 hover:text-gray-700 hover:border-b hover:border-gray-300 '}   
                        w-full px-4 py-2 font-bold cursor-pointer`}
                    >
                        Đang giao
                    </button>
                </div>
                <div className="text-sm w-full flex justify-center items-center">
                <button 
                        onClick={() => {handleChangeTab('done', doneOrder)}}
                        className={`${tab === 'done' ? 'border-b border-blue-600 text-blue-600' : 'text-gray-600 hover:text-gray-700 hover:border-b hover:border-gray-300 '}   
                        w-full px-4 py-2 font-bold cursor-pointer`}
                    >
                        Đã giao
                    </button>                
                </div>
            </div>
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
    </div>
  )
}

export default OrderManager