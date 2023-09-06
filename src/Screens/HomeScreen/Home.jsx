import React, { useEffect } from 'react'
import Header from '../../Layout/Header/Header'
import Categories from '../../Layout/Categories/Categories'
import Products from '../../Layout/Products/Products'
import { useLocation } from 'react-router-dom'
import Newsletter from '../../Layout/Newsletter/Newsletter'

const Home = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div>
      <Header />
      <Categories />
      <Products />
      <Newsletter />
    </div>
  )
}

export default Home
