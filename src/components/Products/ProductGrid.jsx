import React from 'react'
import { Link } from 'react-router-dom'

const ProductGrid = ({products}) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3'>
        {products.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`} className='block'>
                <div className="bg-white rounded-lg">
                    <div className="w-full aspect-square mb-4">
                        <img className='w-full h-full object-cover rounded-2xl' src={product.images} alt="" />
                    </div>
                </div>
                <h3 className='text-sm mb-2 font-semibold'>{product.name}</h3>
                <h3 className='text-sm text-gray-600 font-semibold'>{product.price} vnđ</h3>
            </Link>
        ))}
    </div>
  )
}

export default ProductGrid