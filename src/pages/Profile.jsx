import React from 'react'
import MyOrders from './MyOrders'
const user = {
    name: 'Lê Dương',
    email: 'leduong@gmail.com',
    phone: '0865641682'
}
const Profile = () => {
  return (
    <div className='min-h-screen flex flex-col'>
        <div className="flex-grow container mx-auto p-4 md:p-6">
            <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
                <div className="w-full md:w-1/3 lg:w-1/4 shadow-md rounded-lg p-6">
                    <h1 className="text-2xl md:text-3xl font-bold mb-4">{user.name}</h1>
                    <p className='text text-gray-600 mb-2'>Email:{user.email}</p>
                    <p className='text text-gray-600 mb-4'>SDT: {user.phone}</p>
                    <button className='cursor-pointer w-full bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-500 transition-all duration-300'>Đăng xuất</button>
                </div>
                <div className="w-full md:w-2/3 lg:w-3/4 shadow-md rounded-lg">
                    <MyOrders />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile