import React, { useEffect, useState } from 'react'
import exampleDetail1 from '../../assets/Top/1.jpg'
import exampleDetail2 from '../../assets/Bot/1.jpg'
import { toast } from 'sonner'
import ProductGrid from './ProductGrid'
    const selectedProduct = {
        name: 'Áo khoác',
        price: 120,
        originalPrice: 150,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, numquam?',
        brand: 'FashionBrand',
        material: 'Da',
        size: ['S', 'M', 'L', 'XL'],
        colors: ['red', 'black'],
        images: [exampleDetail1,exampleDetail2,exampleDetail1]
    }

    const similarProducts = [
        {
            id: 1,
            name: 'Áo khoác',
            price: 120,
            images: [exampleDetail1],
        },
        {
            id: 2,
            name: 'Áo khoác 2',
            price: 120,
            images: [exampleDetail1],
        },
        {
            id: 3,
            name: 'Áo khoác 3',
            price: 120,
            images: [exampleDetail1],
        },
        {
            id: 4,
            name: 'Áo khoác 4',
            price: 120,
            images: [exampleDetail1],
        },
    ]

const ProductsDetails = () => {

  const [mainImage, setMainImage] = useState('')
  const [selectedSize, setSelectedSize] = useState('')
  const [selectedColor, setSelectedColor] = useState('')
  const [selectedQuantity, setSelectedQuantity] = useState(1)
  const [isButtonDisabled, setIsButtonDisabled] = useState(false)

  useEffect(() => {
    if(selectedProduct?.images?.length > 0){
        setMainImage(selectedProduct.images[0])
    }
  }, [selectedProduct])

  const handleQuatityChange = (action) => {
    if(action === 'plus') setSelectedQuantity((prev) => prev+1)
    if(action === 'minus' && selectedQuantity > 1) setSelectedQuantity((prev) => prev-1)
  }

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor){
        toast.error('Vui lòng chọn size và màu sắc trước khi thêm vào giỏ hàng!', {
            duration: 1000,
        })
        return
    }
    setIsButtonDisabled(true)
    setTimeout(() => {
        toast.success('Thêm vào giỏ hàng thành công', {
            duration: 1000
        })
        setIsButtonDisabled(false)
    }, 500)
  }

  return (
    <div className='p-6'>
        <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
            <div className="flex flex-col md:flex-row">
                <div className="hidden md:flex flex-col space-y-4 mr-6">
                    {selectedProduct.images.map((image, index) => (
                        <img 
                            className={`w-20 h-20 object-cover rounded-lg cursor-pointer ${image == mainImage ? 'border' : ''} hover:scale-105 transition-all duration-300`} 
                            key={index} 
                            src={image} 
                            alt="" 
                            onClick={() => setMainImage(image)}
                            />
                    ))}
                </div>
                <div className="md:w-1/2">
                    <div className="relative w-full aspect-square">
                        <img
                        src={mainImage}
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover rounded-lg"
                        />
                    </div>
                </div>
                <div className="md:hidden overflow-x-scroll space-x-4 my-4 flex w-full">
                    {selectedProduct.images.map((image, index) => (
                        <img 
                            className={`flex-none w-15 h-15 object-cover rounded-lg cursor-pointer ${image == mainImage ? 'border' : ''} hover:scale-105 transition-all duration-300`} 
                            key={index} 
                            src={image} 
                            alt="" 
                            onClick={() => setMainImage(image)}
                            />
                    ))}
                </div>

                <div className="md:w-1/2 md:ml-10">
                    <h1 className='text-2xl md:text-3xl font-bold mb-2'>{selectedProduct.name}</h1>
                    <p className='text-lg text-gray-600 mb-1 line-through'>{selectedProduct.originalPrice} vnđ</p>
                    <p className='text-xl text-gray-600 mb-4 font-semibold'>{selectedProduct.price} vnđ</p>
                    <p className='text-gray-600 mb-4'>{selectedProduct.description}</p>
                    <div className="mb-4">
                        <p className="text-gray-700 mb-2 font-semibold">Màu: </p>
                        <div className="flex gap-2 mt-2">
                            {selectedProduct.colors.map((color, index) => (
                                <button 
                                    key={index} 
                                    className={`w-8 h-8 rounded-full cursor-pointer ${color === selectedColor ? 'ring-3 ring-white' : ''}`}
                                    style={{backgroundColor: color, filter: 'brightness(0.5)'}}
                                    onClick={() => {setSelectedColor(color)}}
                                >
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="mb-4">
                        <p className="text-gray-700 font-semibold">Size: </p>
                        <div className="flex gap-2 mt-2">
                            {selectedProduct.size.map((size) => (
                                <button 
                                    className={`px-4 py-2 border cursor-pointer ${size === selectedSize ? 'bg-gray-300' : ''}`}
                                    onClick={() => {setSelectedSize(size)}}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="mb-4">
                        <p className='text-gray-700'>Số lượng</p>
                        <div className="flex items-center space-x-4 mt-2">
                            <button onClick={() => {handleQuatityChange('minus')}} className='cursor-pointer px-2 py-1 bg-gray-200 rounded text-lg'>-</button>
                            <span className='text-lg'>{selectedQuantity}</span>
                            <button onClick={() => {handleQuatityChange('plus')}} className='cursor-pointer px-2 py-1 bg-gray-200 rounded text-lg'>+</button>
                        </div>
                    </div>

                    <button 
                        disabled={isButtonDisabled}
                        onClick={handleAddToCart}
                        className={`bg-gray-700 text-white py-2 px-6 rounded w-full mb-4 hover:bg-gray-600 cursor-pointer transition-all duration-300 ${isButtonDisabled ? 'cursor-not-allowed opacity-50' : ''}`}
                    >
                        {isButtonDisabled ? 'Đang thêm vào giỏ hàng...' : 'Thêm vào giỏ hàng'}
                    </button>

                    <div className="mt-4 text-gray-700">
                        <h3 className='text-xl font-bold mb-4'>Đặc trưng</h3>
                        <table className='w-full text-left text-sm text-gray-700'>
                            <tbody>
                                <tr>
                                    <td className='py-1'>Brand:</td>
                                    <td className='py-1'>{selectedProduct.brand}</td>
                                </tr>
                                <tr>
                                    <td className='py-1'>Chất liệu: </td>
                                    <td className='py-1'>{selectedProduct.material}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="mt-20">
                <h2 className='text-2xl text-center font-medium mb-4'>Bạn có thể thích</h2>
                <ProductGrid products={similarProducts} />
            </div>
        </div>
    </div>
  )
}

export default ProductsDetails