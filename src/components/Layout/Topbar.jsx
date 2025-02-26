import React from 'react'
import { IoLogoInstagram } from 'react-icons/io'
import { RiTwitterXLine } from 'react-icons/ri'
import { TbBrandMeta } from 'react-icons/tb'

const Topbar = () => {
  return (
    <div className='bg-gray-800 text-white'>
        <div className="container mx-auto flex justify-between items-center py-3 px-4">
            <div className="hidden md:flex items-center space-x-4">
                <a href="#" className='hover:text-gray-300'>
                    <TbBrandMeta className='h-5 w-5'/>
                </a>
                <a href="#" className='hover:text-gray-300'>
                    <IoLogoInstagram className='h-5 w-5'/>
                </a>
                <a href="#" className='hover:text-gray-300'>
                    <RiTwitterXLine className='h-5 w-5'/>
                </a>
            </div>
            <div className="text-sm text-center flex-grow">
                <span>Vận chuyển toàn quốc - Miễn phí vận chuyển cho đơn hàng từ 100.000vnđ</span>
            </div>
            <div className="hidden md:block text-sm">
                <a href="tel:+84865641682" className='hover:text-gray-300'>+84865641682</a>
            </div>
        </div>
    </div>
  )
}

export default Topbar