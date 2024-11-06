import React from 'react'
import { FaBookOpen } from 'react-icons/fa'
import { FaPeopleGroup } from 'react-icons/fa6'
import { MdAssistantNavigation, MdPriceChange } from 'react-icons/md'

const data = [
  {
    title: 'Clear Navigation',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    icon: <MdAssistantNavigation className='text-3xl text-purple-500'/>,
    // backgroundColor: '#8B0000'
  },
  {
    title: 'Price Comparison',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    icon: <MdPriceChange className='text-3xl text-purple-500'/>,
    // backgroundColor: '#8B0000'
  },
  {
    title: 'Personalized Service',
     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    icon: <FaBookOpen className='text-3xl text-purple-500'/>,
    // backgroundColor: '#8B0000'
  },
  {
    title: 'Community',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    icon: <FaPeopleGroup  className='text-3xl text-purple-500'/>,
    // backgroundColor: '#8B0000'
  }
]
const Service = () => {
  return (
    <div className='mx-0 flex px-5 bg-purple-200'>
      {
        data.map(item => (
          <div key={item.title} className='flex-1 p-5'>
            <div className='flex flex-col space-y-3 text-center items-center'>
              {item.icon}
              <div className='ml-3'>
                <h3 className='text-2xl font-bold'>{item.title}</h3>
                <p className='text-sm'>{item.description}</p>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Service
