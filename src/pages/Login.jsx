import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import loginImg from '../assets/Bag/1.jpg'
const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User login: ', {email, password})
  }

  return (
    <div className='flex'>
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12">
        <form onSubmit={handleSubmit} className='w-full max-w-md bg-white p-8 rounded-lg border shadow-sm'>
            <div className="flex justify-center mb-6">
                <h2 className='text-xl font-medium'>TheShop</h2>
            </div>
            <h2 className='text-2xl font-bold text-center mb-6'>Đăng nhập</h2>
            <div className="mb-4">
                <label className='block text-sm font-semibold mb-2'>Email</label>
                <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => {setEmail(e.target.value)}}
                    className='w-full p-2 border rounded'
                    placeholder='username@email'
                />
            </div>
            <div className="mb-4">
                <label className='block text-sm font-semibold mb-2'>Mật khẩu</label>
                <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => {setPassword(e.target.value)}}
                    className='w-full p-2 border rounded'
                    placeholder='Mật khẩu'
                />
            </div>
            <button 
                type='submit' 
                className='cursor-pointer w-full bg-gray-700 text-white p-2 rounded-lg font-semibold hover:bg-gray-600 transition-all duration-300'
            >
                Đăng nhập
            </button>
            <p className='mt-6 text-center text-sm'>
                Chưa có tài khoản?
                <Link to='/register' className='text-gray-600'> Đăng ký</Link>
            </p>
        </form>
      </div>  
      <div className="hidden md:block w-1/2 h-150 bg-gray-800">
            <img className='h-full w-full object-cover' src={loginImg} alt="" />
      </div>
    </div>
  )
}

export default Login