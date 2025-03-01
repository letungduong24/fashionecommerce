import React, { use, useState } from 'react'
import ConfirmDeleteUser from './ConfirmDeleteUser'
const users = [
    {
        id: 1,
        email: 'duong@mail.com',
        role: 'Khách hàng',
    },
    {
        id: 2,
        email: 'duong@mail.com',
        role: 'Khách hàng',
    },
    {
        id: 3,
        email: 'duong@mail.com',
        role: 'Khách hàng',
    },
    {
        id: 4,
        email: 'duong@mail.com',
        role: 'Khách hàng',
    },
   
]
const UserManager = () => {
  const [isShowForm, setIsShowForm] = useState(false)
  const [isDeleteConfirm, setIsDeleteConfirm] = useState(false)
  const [deleteId, setDeleteId] = useState('')
  const handleToggleForm = () => {
    setIsShowForm(!isShowForm)
  }
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'Nhân viên'
  })
  const handleFormChange = (e) => {
    setFormData({...formData, [e.target.name]:e.target.value})
  }
  const handleFormSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }
  const handleDelete = (id) => {
    setDeleteId(id)
    setIsDeleteConfirm(true)
  }
  return (
    <div className='flex flex-col h-full relative'>
        <ConfirmDeleteUser
          isShow={isDeleteConfirm}
          setIsShow={setIsDeleteConfirm}
          id={deleteId}
        />
        <h1 className='text-3xl font-bold mb-6'>Quản lý người dùng</h1>
        <div className="flex h-full shadow-md w-full p-4 gap-3 flex-col-reverse md:flex-row">
            <div className="w-full md:w-1/2">
                <h2 className='mb-4 font-semibold text-lg'>Danh sách người dùng</h2>
                <div className="w-full rounded-lg overflow-auto shadow-md">
                    <table className="w-full border-separate border-spacing-0">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-4 py-2 first:rounded-tl-lg last:rounded-tr-lg">UID</th>
                                <th className="px-4 py-2">Email</th>
                                <th className="px-4 py-2">Vai trò</th>
                                <th className="px-4 py-2 last:rounded-tr-lg">Thời gian</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users && users.length>0 ? (users.map((user)=> (
                                <tr className='hover:bg-gray-100 transition-all duration-300'>
                                    <th className='px-4 py-3'>{user.id}</th>
                                    <th className='px-4 py-3'>{user.email}</th>
                                    <th className='px-4 py-3'>{user.role}</th>
                                    <th onClick={() => handleDelete(user.id)} className='hover:text-red-600 transition-all duration-200 text-red-400 px-4 py-3 cursor-pointer'>Xóa</th>
                                </tr>
                            ))) : (
                                <tr>                            
                                    <th colSpan={5} className='px-4 py-3'>Không có đơn hàng nào gần đây</th>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="w-full md:w-1/2 h-fit font-semibold">
                <h2 className='hidden md:block mb-4 font-semibold text-lg'>Thêm người dùng</h2>
                <button onClick={handleToggleForm} className='mb-2 inline-block md:hidden bg-gray-600 text-white rounded-lg px-4 py-2'>{isShowForm ? 'Đóng' : 'Thêm người dùng'}</button>
                <form className={`w-full p-3 rounded-lg shadow-lg ${isShowForm ? 'block' : 'hidden md:block'}`} onSubmit={handleFormSubmit}>
                    <div className="mb-4 w-full">
                        <label className='text-sm text-gray-600 block mb-1'>Email</label>
                        <input name='email' onChange={handleFormChange} value={formData.email} className='border-gray-600 border w-full p-2 rounded-lg' type="email" />
                    </div>
                    <div className="mb-4 w-full">
                        <label className='text-sm text-gray-600 block mb-1'>Mật khẩu</label>
                        <input name='password' onChange={handleFormChange} value={formData.password} className='border-gray-600 border w-full p-2 rounded-lg' type="password" />
                    </div>
                    <div className="mb-4 w-full">
                        <label className='text-sm text-gray-600 block mb-1'>Vai trò</label>
                        <select name='role' onChange={handleFormChange} value={formData.role} className='border-gray-600 border w-full p-2 rounded-lg'>
                            <option value="Nhân viên">Nhân viên</option>
                            <option value="Admin">Admin</option>
                            <option value="Khách hàng">Khách hàng</option>
                        </select>
                    </div>
                    <div className="mb-4 w-full">
                        <button className='bg-gray-700 hover:bg-gray-500 transition-all duration-300 rounded-lg w-full py-2 text-white cursor-pointer'>Thêm</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default UserManager