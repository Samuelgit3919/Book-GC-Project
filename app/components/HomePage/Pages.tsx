import React from 'react'
import Service from './Service'
import Trending from './Trending'
import BestSeller from './BestSeller'

const Pages = () => {
  return (
    <div>
        <Service />
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <Trending />
        
      </div> 
      <BestSeller/>
    </div>
  )
}

export default Pages
