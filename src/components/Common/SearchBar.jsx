import React, { useState } from 'react'
import { HiMagnifyingGlass, HiMiniXMark } from 'react-icons/hi2'
import { motion } from 'framer-motion'
const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  const handleSearchToggle = () => {
    setIsOpen(!isOpen)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    console.log('Search term: ', searchTerm)
    setIsOpen(!isOpen)
  }

  return (
    <div  className={`${isOpen ? 'flex items-center absolute w-full h-full top-0 left-0 z-50 bg-white' : 'flex items-center'}`}>
        {isOpen ? (
            <motion.form initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.3}} onSubmit={handleSearch} className='mx-10 md:mx-0 relative flex items-center justify-center w-full gap-2'>
                <div className='relative  w-full md:w-1/2'>
                    <input 
                        type="text" 
                        placeholder='Tìm kiếm' 
                        className='bg-gray-100 px-4 py-2 pl-2 pr-12 rounded-lg focus:outline-none w-full placeholder:text-gray-700' 
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button type='submit' className='cursor-pointer h-full absolute right-3  text-gray-600 hover:text-gray-800'>
                        <HiMagnifyingGlass className='h-6 w-6' />
                    </button>
                </div>
                <button className='border border-gray-700 text-gray-700 p-2 rounded-full hover:text-gray-600 cursor-pointer' onClick={handleSearchToggle}>
                    <HiMiniXMark />
                </button>
            </motion.form>
        ) : (
            <button className='cursor-pointer' onClick={handleSearchToggle}>
                <HiMagnifyingGlass className='h-6 w-6' />
            </button>
        )}
    </div>
  )
}

export default SearchBar