import React, { useEffect, useRef, useState } from 'react'
import { FaFilter } from 'react-icons/fa'
import exampleArrival from '../assets/Top/1.jpg'
import FilterSidebar from '../components/Products/FilterSidebar'
import SortOptions from '../components/Products/SortOptions'
import ProductGrid from '../components/Products/ProductGrid'
const fetchedProducts = [
    {
      id: '1',
      name: 'Áo khoác',
      price: 120,
      images: exampleArrival
    },
    {
      id: '2',
      name: 'Áo khoác',
      price: 120,
      images: exampleArrival
    },
    {
      id: '3',
      name: 'Áo khoác',
      price: 120,
      images: exampleArrival
    },
    {
      id: '4',
      name: 'Áo khoác',
      price: 120,
      images: exampleArrival
    },
    {
      id: '5',
      name: 'Áo khoác',
      price: 120,
      images: exampleArrival
    },
    {
      id: '6',
      name: 'Áo khoác',
      price: 120,
      images: exampleArrival
    },
    {
      id: '7',
      name: 'Áo khoác',
      price: 120,
      images: exampleArrival
    },
    {
      id: '8',
      name: 'Áo khoác',
      price: 120,
      images: exampleArrival
    },
  ]
const CollectionsPage = () => {
  const [products, setProducts] = useState([])
  
  const sidebarRef = useRef(null)

  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const handleClickOutside = (e) => {
    if(sidebarRef.current && !sidebarRef.current.contains(e.target)){
      setIsSidebarOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })

  useEffect(() => {
    setTimeout(() => {
        setProducts(fetchedProducts)
    }, 1000)
  }, [])
  return (
    <div className='flex flex-col lg:flex-row px-8'>
        <button onClick={toggleSidebar} className="cursor-pointer lg:hidden border p-2 flex justify-center items-center rounded-lg my-4">
            <FaFilter className='mr-2 text-gray-700' />
        </button>
        <div ref={sidebarRef} className={`${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} fixed z-50 bottom-0 top-0 right-0 w-2/3 bg-white transition-all duration-300 overflow-y-auto lg:w-1/4 lg:static h-full lg:translate-x-0`}>
          <FilterSidebar />
        </div>
        <div className="w-full lg:w-3/4 flex-col lg:p-4">
          <h2 className='text-2xl font-semibold'>Tất cả sản phẩm</h2>
          <SortOptions />
          <ProductGrid products={fetchedProducts} />
        </div>
    </div>
  )
}

export default CollectionsPage