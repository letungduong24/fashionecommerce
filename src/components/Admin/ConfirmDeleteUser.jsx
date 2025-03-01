import React from 'react'
import { FiAlertCircle } from "react-icons/fi";

const ConfirmDeleteUser = ({isShow, setIsShow, id}) => {
  const handleDelete = () => {
    console.log('Deleted user: ', id)
    setIsShow(false)
  }
  return (
    <div className={`-m-6 inset-0 absolute flex justify-center items-center ${isShow ? 'block' : 'hidden'}`}>
        <div className="bg-gray-800 rounded-lg p-6">
            <h2 className='text-lg font-bold mb-2 flex items-center gap-2 text-white'><FiAlertCircle className='text-red-400'/>Bạn có muốn xóa người dùng?</h2>
            <div className="w-full flex justify-end gap-2">
                <button onClick={handleDelete} className="cursor-pointer hover:text-red-300 transition-all duration-300 px-2 py-1 text-red-400 font-bold rounded-lg">Xóa</button>
                <button onClick={() => setIsShow(false)} className="font-semibold cursor-pointer hover:text-gray-200 transition-all duration-300 text-white px-2 py-1 rounded-lg">Hủy</button>
            </div>
        </div>
    </div>
  )
}

export default ConfirmDeleteUser