import React from 'react'
import { IoMdClose } from 'react-icons/io'
import { FaBars } from 'react-icons/fa'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { HiHome } from "react-icons/hi2";
import { FaUser } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";
import { CiShop } from "react-icons/ci";

const AdminSidebar = ({toggleSidebar, isSidebarOpen}) => {
  const navigate = useNavigate()
  const handleLogout = () => {
    navigate('/')
  }
  return (
    <>
        <div className="items-center flex lg:hidden p-4 bg-gray-900 text-white z-20 gap-3">
            <button onClick={toggleSidebar}><FaBars /></button>
            <h3 className='font-medium'>Trang quản trị</h3>
        </div>
        <div className={`flex flex-col fixed w-3/4 lg:w-1/4 xl:w-1/5 bg-gray-900 top-0 left-0 bottom-0 z-50 p-6 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:static lg:translate-x-0 transition-all duration-300`}>
            <div className="">
                <div className="flex justify-end lg:hidden">
                    <button onClick={toggleSidebar} className='text-white p-2'><IoMdClose /></button>
                </div>
                <div className=" text-white flex justify-center items-center font-bold text-2xl border-b border-gray-600 pb-6">
                    <Link to='#'>TheShop Admin</Link>
                </div>
                <div className="">
                    <NavLink 
                        className={({ isActive }) => 
                            `text-lg rounded-lg font-semibold text-white my-3 flex gap-2 items-center 
                            transition-all duration-300 hover:scale-105 hover:border-none w-full p-3 ${isActive ? 'bg-blue-600' : ''}`
                        }                          
                        to='/admin' end
                    >
                        <HiHome />
                        Trang chủ
                    </NavLink>
                    <NavLink 
                        className={({ isActive }) => 
                            `text-lg rounded-lg font-semibold text-white my-3 flex gap-2 items-center 
                            transition-all duration-300 hover:scale-105 hover:border-none w-full p-3 ${isActive ? 'bg-blue-600' : ''}`
                        }     
                        to='/admin/users' end
                     
                    >
                        <FaUser />
                        Quản lý đơn hàng
                    </NavLink>
                    <NavLink 
                        className={({ isActive }) => 
                            `text-lg rounded-lg font-semibold text-white my-3 flex gap-2 items-center 
                            transition-all duration-300 hover:scale-105 hover:border-none w-full p-3 ${isActive ? 'bg-blue-600' : ''}`
                        }                          
                        to='/admin/orders'
                    >
                        <FaBoxOpen />
                        Quản lý đơn hàng
                    </NavLink>
                    <NavLink 
                        className={({ isActive }) => 
                            `text-lg rounded-lg font-semibold text-white my-3 flex gap-2 items-center 
                            transition-all duration-300 hover:scale-105 hover:border-none w-full p-3 ${isActive ? 'bg-blue-600' : ''}`
                        }                          
                        to='/admin/user'
                    >
                        <AiFillProduct  />
                        Quản lý sản phẩm
                    </NavLink>
                    <NavLink 
                        className={({ isActive }) => 
                            `text-lg rounded-lg font-semibold text-white my-3 flex gap-2 items-center 
                            transition-all duration-300 hover:scale-105 hover:border-none w-full p-3 ${isActive ? 'bg-blue-600' : ''}`
                        }                          
                        to='/admin/user'
                    >
                        <CiShop   />
                        Cửa hàng
                    </NavLink>
                </div>
            </div>
            <div className="w-full">
                <button onClick={handleLogout} className='text-white w-full bg-gray-600 py-3 rounded-lg hover:bg-gray-500 transition-all duration-300 cursor-pointer'>Đăng xuất</button>
            </div>
        </div>
       
    </>
  )
}

export default AdminSidebar