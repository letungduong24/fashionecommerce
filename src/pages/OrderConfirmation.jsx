import React from 'react'
const checkout = {
    id: '123123',
    createdAt: new Date(),
    checkoutItems: [
        {
            productId: '1',
            name: 'Jacket',
            color: 'black',
            size: 'M',
            price: '150',
            quantity: 1,
            image: 'https://picsum.photos/150?random=1'
        },
        {
            productId: '2',
            name: 'Jackettt',
            color: 'black',
            size: 'M',
            price: '150',
            quantity: 1,
            image: 'https://picsum.photos/150?random=1'
        },
        {
            productId: '3',
            name: 'Jackett',
            color: 'black',
            size: 'M',
            price: '150',
            quantity: 1,
            image: 'https://picsum.photos/150?random=1'
        },
    ],
    shippingAddress: {
        address1: '123 Kim Ngưu',
        address2: 'Trung Liệt',
        address3: 'Hai Bà Trưng',
        city: 'Hà Nội'
    },
    firstName: 'Lê',
    lastName: 'Dương',
    phone: '0865641528'
}
const OrderConfirmation = () => {
  
  const calculateEstimatedDelivery = (createdAt) => {
    const orderDate = new Date(createdAt);
    orderDate.setDate(orderDate.getDate() + 10)
    return orderDate.toLocaleDateString()
  }  
     
  return (
    <div className='max-w-4xl mx-auto p-6 bg-white'>
        <h1 className='text-4xl font-bold text-center text-gray-700 mb-8'>Cảm ơn bạn vì đã mua hàng</h1>
        {checkout && (
        <div className='p-6 rounded-lg border'>
            <div className="flex justify-between mb-10">
                <div className="">
                    <h2 className='text-xl font-semibold'>Mã đơn hàng: {checkout.id}</h2>
                    <p className='text-gray-500'>Thời gian: {new Date(checkout.createdAt).toLocaleDateString()}</p>
                </div>
                <div className="">
                    <p className='text-gray-700 text-sm'>Dự kiến giao hàng: {calculateEstimatedDelivery(checkout.createdAt)}</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="p-2 border border-gray-500 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2">Phương thức thanh toán</h4>
                    <p className="text-gray-600 mb-2">PayPal</p>
                </div>
                <div className="p-2 border border-gray-500 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2">Địa chỉ</h4>
                    <p className="text-gray-600 mb-">{checkout.shippingAddress.address1}, {checkout.shippingAddress.address2}</p>
                    <p className='text-gray-600 mb-2'>{checkout.shippingAddress.address3}, {checkout.shippingAddress.city}</p>
                </div>
                <div className="p-2 border border-gray-500 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2">Thông tin người nhận</h4>
                    <p className="text-gray-600 mb-">{checkout.firstName} {checkout.lastName}</p>
                    <p className='text-gray-600 mb-2'>{checkout.phone}</p>
                </div>
            </div>
            <div className="flex flex-col gap-3">
                {checkout.checkoutItems.map((item)=> (
                    <div key={item.productId} className='flex items-center'>
                        <img src={item.image} alt="" className='w-16 h-16 object-cover rounded-md mr-4'/>
                        <div className="">
                            <h4 className='text-md font-semibold'>{item.name}</h4>
                            <p className='text-sm text-gray-500'>
                                {item.color} | {item.size}
                            </p>
                        </div>
                        <div className="ml-auto text-right">
                            <p className='text-md'>{item.price} vnđ</p>
                            <p className='text-sm text-gray-500'>Số lượng: {item.quantity}</p>
                        </div>
                    </div>   
                ))}
            </div>
            
        </div>
        )}
    </div>
  )
}

export default OrderConfirmation