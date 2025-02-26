import React from 'react'
import Hero from '../components/Layout/Hero'
import ItemCollectionSection from '../components/Products/ItemCollectionSection'
import NewArrival from '../components/Products/NewArrival'
import ProductsDetails from '../components/Products/ProductsDetails'
import FeaturedCollection from '../components/Products/FeaturedCollection'

const Home = () => {
  return (
    <>
        <Hero />
        <ItemCollectionSection />
        <NewArrival />
        <h2 className='text-3xl text-center font-bold mb-4'>Best Seller</h2>
        <ProductsDetails />
        <FeaturedCollection />
    </>
  )
}

export default Home