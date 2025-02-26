import React from 'react'

const CartContents = () => {
  const cartProducts = [
    {
        productId: 1,
        name: 'Áo phông',
        size: 'L',
        color: 'Đỏ',
        quantity: 1,
        price: 15,
        image: 'https://picsum.photos/200'
    },
    {
        productId: 1,
        name: 'Áo phông',
        size: 'L',
        color: 'Đỏ',
        quantity: 1,
        price: 15,
        image: 'https://picsum.photos/200'
    },
    {
        productId: 2,
        name: 'Quần jeans',
        size: 'L',
        color: 'Xanh',
        quantity: 1,
        price: 25,
        image: 'https://picsum.photos/200'
    },
  ]
  return (
    <div>
        {
            cartProducts.map((product, index) => (
                <div key={index} className="flex items-start justify-between py-4 border-b border-gray-200">
                    <div className="flex items-start">
                        <img src={product.image} alt="" className='w-20 h-24 object-cover mr-4 rounded'/>
                        <div className="">
                            <h3>{product.name}</h3>
                            <p className='text-sm text-gray-500'>
                                Size: {product.size} | Màu: {product.color}
                            </p>
                            <div className="flex items-center mt-2">
                                <button className='border border-gray-500 rounded px-2 py-0.5 text-xl font-medium'>-</button>
                                <span className='mx-4'>{product.quantity}</span>
                                <button className='border border-gray-500 rounded px-2 py-0.5 text-xl font-medium'>+</button>
                            </div>
                        </div>
                    </div>
                    <div className="">
                                <p>{product.price.toLocaleString()} vnđ</p>
                                <button className='cursor-pointer text-red-600 p-1'>Xóa</button>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default CartContents