import React, { useState } from 'react'
import { HiOutlineShoppingBag, HiOutlineUser } from 'react-icons/hi'
import { HiBars3BottomRight } from 'react-icons/hi2'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import CartDrawer from '../Layout/CartDrawer'
import CartContents from '../Cart/CartContents'
import { IoMdClose } from 'react-icons/io'

const Navbar = () => {
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);

  const toggleCartDrawer = () => {
    setCartDrawerOpen(!cartDrawerOpen);
  }

  const toggleNavDrawer = () => {
    setNavDrawerOpen(!navDrawerOpen);
  }

  return (
    <>
        <nav className='container mx-auto flex items-center py-4 px-6 justify-between relative'>
            <div className="">
                <Link to='/' className='text-2xl font-medium'>TheShop</Link>
            </div>
            <div className="hidden md:flex space-x-6">
                <Link to='/collections/all' className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
                    Mũ nam
                </Link>
                <Link to='#' className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
                    Túi nam
                </Link>
                <Link to='#' className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
                    Áo nam
                </Link>
                <Link to='#' className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
                    Quần nam
                </Link>
            </div>
            <div className="flex items-center space-x-4">
                <Link to='/profile'>
                    <HiOutlineUser className='h-6 w-6 text-gray-700 flex justify-center'/>
                </Link>
                <button onClick={toggleCartDrawer} className='relative hover:text-black cursor-pointer'>
                    <HiOutlineShoppingBag className='h-6 w-6 text-gray-700' />
                    <span className='absolute -top-2 -right-3 bg-gray-700 text-white text-xs rounded-full px-2 py-0.5'>4</span>
                </button>
                <div className="overflow-hidden">
                    <SearchBar />
                </div>
                <button onClick={toggleNavDrawer} className='md:hidden h-full cursor-pointer'>
                    <HiBars3BottomRight className='h-6 w-6 text-gray-700' />
                </button>
            </div>
        </nav>
        <CartDrawer drawerOpen={cartDrawerOpen} toggleCartDrawer={toggleCartDrawer}/>
        <div className={`fixed top-0 right-0 w-full sm:w-1/2 md:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${
            navDrawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
            <div className="flex justify-end p-4">
                <button onClick={toggleNavDrawer}>
                    <IoMdClose className='h-6 w-6 text-gray-600 cursor-pointer'/>
                </button>
            </div>
            <div className="flex-grow p-4 overflow-y-auto">
                <h2 className='text-xl font-semibold mb-4'>TheShop</h2>
                <nav className='space-y-4'>
                    <Link to='/collections/all' onClick={toggleNavDrawer} className='block text-gray-600 hover:text-black'>Mũ nam</Link>
                    <Link to='/' onClick={toggleNavDrawer} className='block text-gray-600 hover:text-black'>Túi nam</Link>
                    <Link to='/' onClick={toggleNavDrawer} className='block text-gray-600 hover:text-black'>Ao nam</Link>
                    <Link to='/' onClick={toggleNavDrawer} className='block text-gray-600 hover:text-black'>Quần nam</Link>

                </nav>
            </div>
        </div>
    </>
  )
}

export default Navbar