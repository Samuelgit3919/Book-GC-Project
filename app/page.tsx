'use client'
import { useState, useEffect } from 'react'
import { FaArrowRight } from 'react-icons/fa';
import { HiOutlineCollection } from 'react-icons/hi';
import { FaPeopleGroup } from 'react-icons/fa6';
import Corousel from './components/corousel/Corousel';
import Pages from './components/HomePage/Pages';





export default function Home() {

    const images = [
      'https://i.pinimg.com/736x/9f/5c/3b/9f5c3b4f3e9bfbe4f777a54f2f4f742a.jpg',
      'https://i.pinimg.com/736x/9f/5c/3b/9f5c3b4f3e9bfbe4f777a54f2f4f742a.jpg',
      'https://i.pinimg.com/736x/9f/5c/3b/9f5c3b4f3e9bfbe4f777a54f2f4f742a.jpg',
       'https://i.pinimg.com/736x/9f/5c/3b/9f5c3b4f3e9bfbe4f777a54f2f4f742a.jpg',
      'https://i.pinimg.com/736x/9f/5c/3b/9f5c3b4f3e9bfbe4f777a54f2f4f742a.jpg',
      'https://i.pinimg.com/736x/9f/5c/3b/9f5c3b4f3e9bfbe4f777a54f2f4f742a.jpg',  
    ]
    // Add more image paths as needed
  
    return (
      <section className=''>
        <div className='flex justify-start items-center my-12'>
          <div className='w-2/5 ml-24 mt-8'>
            <h1 className='font-bold text-4xl'>Welcome to BookCompass <br /> Online Book Navigator</h1>
            <p className='my-8'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime suscipit dolor placeat nemo ea eius reprehenderit, eum esse. Quisquam pariatur doloribus numquam eos quo hic soluta in porro vitae provident?
            </p>
            <div className='flex items-center gap-4'>
              <div className=' font-bold'>
                <span className='flex items-center gap-2'>
                  <HiOutlineCollection className='text-3xl' /> 68+k
                </span>
                <p className='font-normal'>Book Collections</p>
              </div>

              <div className='font-bold'>
                <span className='flex items-center gap-2'>
                  <FaPeopleGroup className='text-3xl' />
                  25,567 
                </span>
                <p className='font-normal'>Customers</p>
              </div>
            </div>

            <div className='flex mt-12  text-white '>
              <button className='text-white p-2  bg-red-700 rounded-md'><a href="#" className='flex items-center gap-3'>Go to collections <FaArrowRight /></a></button>
            </div>
          </div>

          <div className=' flex items-center justify-center rounded-sm w-3/5 h-[70vh]'>
            <Corousel />
          </div>
        </div>
        <Pages />
      </section>

    );
}
