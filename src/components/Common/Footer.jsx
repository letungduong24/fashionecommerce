import React from 'react'
import { AiFillCopyrightCircle } from 'react-icons/ai'
import { BiCopyright } from 'react-icons/bi'
import { FiPhoneCall } from 'react-icons/fi'
import { RiInstagramLine, RiMetaLine, RiTiktokLine, RiTwitterXFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='border-t border-gray-200 pt-12'>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8">
            <div className="text-sm flex flex-col gap-2">
                <h3 className='font-semibold text-lg text-gray-800'>Nhận thông báo</h3>
                <p className='text-gray-500'>Đăng ký để nhận những thông báo mới nhất về sản phẩm, sự kiện, ưu đãi</p>
                <p className='font-medium'>Đăng ký để nhận ưu đãi 10% cho đơn đầu tiên</p>
                <form action="" className='flex'>
                    <input type="email" placeholder='Nhập Email của bạn' className='p-3 w-3/4 text-sm border border-gray-400 rounded-l-md focus:outline-none focus:ring-1 focus:ring-gray-500 transition-all'/>
                    <button type='submit' className='cursor-pointer bg-gray-800 text-white px-2 py-1 rounded-r-md hover:bg-gray-700'>Đăng ký</button>
                </form>
            </div>
            <div className="text-sm flex flex-col gap-2">
                <h3 className='font-semibold text-lg text-gray-800'>Mua sắm</h3>
                <Link to='/'>Mua mũ nam</Link>
                <Link to='/'>Mua túi nam</Link>
                <Link to='/'>Mua áo nam</Link>
                <Link to='/'>Mua quần nam</Link>
            </div>
            <div className="text-sm flex flex-col gap-2">
                <h3 className='font-semibold text-lg text-gray-800'>Hỗ trợ</h3>
                <Link to='/'>Liên hệ</Link>
                <Link to='/'>Về chúng tôi</Link>
                <Link to='/'>Chính sách đổi trả</Link>
                <Link to='/'>Chính sách bảo hành</Link>
            </div>
            <div className="text-sm flex flex-col gap-2">
                <h3 className='font-semibold text-lg text-gray-800'>Theo dõi chúng tôi</h3>
                <div className="flex gap-2 mb-2">
                    <Link to='/'><RiMetaLine /></Link>
                    <Link to='/'><RiTwitterXFill /></Link>
                    <Link to='/'><RiInstagramLine /></Link>
                    <Link to='/'><RiTiktokLine /></Link>
                </div>
                <h3 className='text-lg text-gray-800'>Hotline</h3>
                <a className='flex gap-2 items-center' href="tel:+84865641682"><FiPhoneCall /> +84 865641682</a>
            </div>
        </div>
        <div className="container mx-auto px-8 border-t border-gray-200 py-3 mt-12">
            <p className='flex gap-2 text-gray-500 text-sm justify-center items-center'><BiCopyright /> 2025, TheShop. All Rights Reserved.</p>
        </div>
    </footer>
  )
}

export default Footer