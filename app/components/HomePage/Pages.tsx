import React from 'react'
import Service from './Service'
import Trending from './Trending'

const Pages = () => {
  return (
    <div>
        <Service />
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <Trending />
      </div>   
    </div>
  )
}

export default Pages
