import React from 'react'
import heroImg from '../../assets/hero.jpg'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <section className='relative'>
        <img src={heroImg} alt="" className='w-full h-[400px] md:h-[600px] lg-[800px] object-cover'/>
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center text-white p-6">
                <h1 className='text-4xl md:text-7xl lg:text-9xl font-bold tracking-tighter uppercase mb-4'>The Shop</h1>
                <p className='text-sm tracking-tighter md:text-lg mb-6'>Tiệm quần áo nam chất lượng với dịch vụ giao nhanh toàn quốc.</p>
                <Link to='#' className='bg-gray-600/0 border border-gray-400 text-white px-6 py-2 rounded text-lg hover:bg-gray-600/100 transition-all duration-300'>Mua ngay</Link>
            </div>
        </div>
    </section>
  )
}

export default Hero