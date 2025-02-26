import { param } from 'framer-motion/client';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
const FilterSidebar = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    category: '',
    color: '',
    size: [

    ],
    material: [

    ],
    brand: [

    ],
    minPrice: 0,
    maxPrice: 100,
  })
  
  const [priceRange, setPriceRange] = useState([0, 100])

  const categories = ['Áo', 'Quần', 'Túi', 'Mũ']

  const colors = ['blue', 'white', 'black', 'gray', 'green']

  const sizes = ['S', 'M', 'L', 'XL']

  const materials = ['Da', 'Cotton', 'Denim']

  const brands = ['Urban', 'Modern', 'Street']

  const handleFilterChange = (e) => {
      const {name, value, checked, type} = e.target;
      let newFilters = {...filters}
      if(type === 'checkbox'){
        if(checked){
            newFilters[name] = [...(newFilters[name] || []), value]
        } else {
            newFilters[name] = newFilters[name].filter((item) => item!==value)
        }
      } else{
        newFilters[name] = value
      }
      setFilters(newFilters);
      updateURLParams(newFilters);
  }

  const updateURLParams = (newFilters) => {
    const params = new URLSearchParams();
    Object.keys(newFilters).forEach((key) => {
        if(Array.isArray(newFilters[key]) && newFilters[key].length > 0) {
            params.append(key, newFilters[key].join(','))
        } else if (newFilters[key]){
            params.append(key, newFilters[key]);
        }
    });
    setSearchParams(params);
    navigate(`?${params.toString()}`)
  }

  const handlePriceChange = (e) => {
    const newPrice = e.target.value
    setPriceRange([0, newPrice])
    const newFilters = {...filters, minPrice: 0, maxPrice: newPrice};
    setFilters(newFilters)
    updateURLParams(newFilters)
  }

  useEffect(() => {
    const params = Object.fromEntries([...searchParams])
    setFilters((prevFilters) => ({
        category: params.category || prevFilters.category || '',
        color: params.color || prevFilters.color || '',
        size: params.size ? params.size.split(',') : prevFilters.size || [],
        brand: params.brand ? params.brand.split(',') : prevFilters.brand || [],
        material: params.material ? params.material.split(',') : prevFilters.material || [],
        minPrice: params.minPrice || prevFilters.minPrice || 0,
        maxPrice: params.maxPrice || prevFilters.maxPrice || 100,
    }));
    setPriceRange([0, params.maxPrice || 100])
  }, [searchParams])

  return (
    <div className='px-8'>
        <h2 className='py-6 text-lg font-semibold'>Bộ lọc</h2>
        <div className="mb-6">
            <label htmlFor="" className="block text-gray-600 font-medium mb-2">
                Thể loại
            </label>
            {categories.map((category) => (
               <div key={category} className='flex items-center mb-1'>
                    <input 
                        onChange={handleFilterChange}
                        value={category} 
                        type="radio" 
                        name='category' 
                        className='mr-2 h-4 w-4 text-gray-500 focus:ring-gray-400 border-gray-300'
                        checked={filters.category === category}
                    />
                    <span className='text-gray-700'>{category}</span>
               </div> 
            ))}
        </div>
        <div className="mb-6">
            <label htmlFor="" className="block text-gray-600 font-medium mb-2">
                Màu sắc
            </label>
            <div className="flex flex-wrap gap-2">
                {colors.map((color) => (
                    <button 
                        style={{backgroundColor: color}} 
                        key={color} 
                        name='color'
                        value={color} 
                        onClick={handleFilterChange}
                        className={`${filters.color === color ? 'ring-3 ring-gray-700' : ''} w-8 h-8 rounded-full border-gray-500 border cursor-pointer transition-all duration-300 hover:scale-105`}
                    >
                    </button>
                ))}
            </div>
        </div>
        <div className="mb-6">
            <label htmlFor="" className="block text-gray-600 font-medium mb-2">
                Size
            </label>
            {sizes.map((size) => (
               <div key={size} className='flex items-center mb-1'>
                    <input 
                        onChange={handleFilterChange}
                        value={size} 
                        type="checkbox" 
                        checked={filters.size.includes(size)}
                        name='size' 
                        className='mr-2 h-4 w-4 text-gray-500 focus:ring-gray-400 border-gray-300'
                    />
                    <span className='text-gray-700'>{size}</span>
               </div> 
            ))}
        </div>
        <div className="mb-6">
            <label htmlFor="" className="block text-gray-600 font-medium mb-2">
                Hãng
            </label>
            {brands.map((brand) => (
               <div key={brand} className='flex items-center mb-1'>
                    <input 
                        onChange={handleFilterChange}
                        value={brand} 
                        type="checkbox" 
                        name='brand' 
                        checked={filters.brand.includes(brand)}
                        className='mr-2 h-4 w-4 text-gray-500 focus:ring-gray-400 border-gray-300'
                    />
                    <span className='text-gray-700'>{brand}</span>
               </div> 
            ))}
        </div>
        <div className="mb-6">
            <label htmlFor="" className="block text-gray-600 font-medium mb-2">
                Chất liệu
            </label>
            {materials.map((material) => (
               <div key={material} className='flex items-center mb-1'>
                    <input 
                        onChange={handleFilterChange}
                        value={material} 
                        type="checkbox" 
                        checked={filters.material.includes(material)}
                        name='material' 
                        className='mr-2 h-4 w-4 text-gray-500 focus:ring-gray-400 border-gray-300'
                    />
                    <span className='text-gray-700'>{material}</span>
               </div> 
            ))}
        </div>
        <div className="mb-6">
            <label htmlFor="" className="block text-gray-600 font-medium mb-2">
                Giá
            </label>
            <input type="range" min={0} max={100} value={priceRange[1]} onChange={handlePriceChange} name='priceRange' className='w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer'/>
            <div className="flex justify-between text-gray-600 mt-2">
                <span>{priceRange[0]} vnđ</span>
                <span>{priceRange[1]} vnđ</span>
            </div>
        </div>
    </div>
  )
}

export default FilterSidebar