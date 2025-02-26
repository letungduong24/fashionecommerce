import React from 'react'
import { Link } from 'react-router-dom'
import featured from '../../assets/Top/1.jpg'
const FeaturedCollection = () => {
  return (
    <section className='py-16 px-4'>
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center bg-gray-700 rounded-3xl">
            <div className="lg:w-1/2 p-8 text-center lg:text-left">
                <h2 className='text-lg font-semibold text-white'>Gọn gàng và thu hút</h2>
                <h2 className='text-4xl lg:text-5xl font-bold text-white mb-6'>Bộ sưu tập thu đông 2025</h2>
                <p className='text-lg text-white mb-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus eius facere ipsum error inventore odit!</p>
                <Link to='/collections/all' className='bg-gray-900 text-white px-6 py-3 rounded-lg text-lg hover:bg-gray-500 transition-all duration-300'>Mua ngay</Link>
            </div>
            <div className="lg:w-1/2 lg:h-150 h-100 w-full">
                <img className='w-full h-full object-cover rounded-t-3xl lg:rounded-e-3xl' src={featured} alt="" />
            </div>
        </div>
    </section>
  )
}

export default FeaturedCollection