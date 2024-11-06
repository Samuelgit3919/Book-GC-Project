'use client'
import { useState, useEffect } from 'react'
import { FaArrowRight } from 'react-icons/fa';
import { HiOutlineCollection } from 'react-icons/hi';
import { FaPeopleGroup } from 'react-icons/fa6';
import Corousel from './components/corousel/Corousel';
import Pages from './components/HomePage/Pages';

export default function Home() {

 

  return (
    <section className='bg-purple-50 py-12'>
      <div className='container mx-auto md:ml-8 flex flex-col lg:flex-row items-center lg:space-x-8'>
        
        {/* Text Section */}
        <div className='w-full lg:w-2/5 px-6 text-center lg:text-left'>
          <h1 className='font-bold text-4xl lg:text-5xl text-purple-800 mb-6'>
            Welcome to BookCompass <br /> Online Book Navigator
          </h1>
          <p className='text-gray-700 mb-8'>
            Discover a world of books with ease. BookCompass provides an intuitive way to explore, compare, and purchase books online. Join a thriving community of readers!
          </p>
          
          {/* Stats Section */}
          <div className='flex justify-center lg:justify-start items-center gap-8 mb-8'>
            <div className='text-center flex flex-col items-center'>
              <HiOutlineCollection className='text-4xl text-purple-500 mb-2' />
              <p className='text-2xl font-bold text-purple-800'>68+k</p>
              <p className='text-gray-600'>Book Collections</p>
            </div>

            <div className='text-center flex flex-col items-center'>
              <FaPeopleGroup className='text-4xl text-purple-500 mb-2' />
              <p className='text-2xl font-bold text-purple-800'>25,567</p>
              <p className='text-gray-600'>Customers</p>
            </div>
          </div>

          {/* Button Section */}
          <div className='flex justify-center lg:justify-start'>
            <a href="#" className='inline-flex items-center gap-3 px-6 py-3 text-white font-semibold bg-purple-700 hover:bg-purple-800 transition rounded-md'>
              Go to Collections <FaArrowRight />
            </a>
          </div>
        </div>

        {/* Carousel Section */}
        <div className='w-full lg:w-3/5 mt-12 lg:mt-0'>
          <div className='overflow-hidden'>
            <Corousel />
          </div>
        </div>
      </div>

      {/* Additional Pages Component */}
      <Pages />
    </section>
  );
}
