import React from 'react'
import { IoMdClose } from 'react-icons/io';
import CartContents from '../Cart/CartContents';
import { useNavigate } from 'react-router-dom';

const CartDrawer = ({drawerOpen, toggleCartDrawer}) => {
  const navigate = useNavigate();
  const handleCheckout = () => {
    toggleCartDrawer()
    navigate('/checkout')
  }

  return (
    <div className={`fixed top-0 right-0 w-full sm:w-1/2 md:w-[30rem] h-full
                 bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50
                   ${drawerOpen ? 'translate-x-0' : 'translate-x-full'}
    `}>
        <div className="flex justify-end p-4">
            <button onClick={toggleCartDrawer}>
                <IoMdClose className='h-6 w-6 text-gray-600 cursor-pointer'/>
            </button>
        </div>
        <div className="flex-grow p-4 overflow-y-auto">
            <h2 className='text-xl font-semibold mb-4'>Giỏ hàng</h2>
            <CartContents />
        </div>
        <div className="p-4 bg-white sticky bottom-0">
            <button 
              onClick={handleCheckout}
              className='w-full bg-gray-800 text-white py-3 rounded-lg font-semibold hover:bg-gray-700 transition duration-300 cursor-pointer'
            >
              Thanh toán
              </button>
            <p className='text-xs text-gray-600 mt-2 text-center'>Phí vận chuyển và mã giảm giá sẽ được tính khi thanh toán.</p>
        </div>
    </div>
  )
}

export default CartDrawer

// truyền những thuộc tính xuất hiện trong return từ parent sang child. 
// chỉ cần truyền state và toggleFunction sang vì state được quản lý bởi setState bên parent
// parent sẽ quản lý toggleState của child