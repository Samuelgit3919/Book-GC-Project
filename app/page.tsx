'use client'
import { useState, useEffect } from 'react'
import Loading from './components/Loading/Loading';
import { FaArrowRight } from 'react-icons/fa';
import { HiOutlineCollection } from 'react-icons/hi';
import { FaPeopleGroup } from 'react-icons/fa6';
import Carousel from 'react-responsive-carousel'

interface Data {
  id: number;
  name: string;
}

export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch('/api/data');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result: Data = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);


  if (loading) {
    return <Loading />;
  }
 

  return (
    <section className='mx-3'>
      <div className='flex justify-start items-center my-12'>
        <div className='w-2/5 ml-24 mt-8'>
          <h1 className='font-bold text-4xl'>Welcome to BookCompass <br /> Online Book Navigator</h1>
          <p className='my-8'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime suscipit dolor placeat nemo ea eius reprehenderit, eum esse. Quisquam pariatur doloribus numquam eos quo hic soluta in porro vitae provident?
          </p>
          <div className='flex items-center gap-4'>
            <div className=' font-bold'>
              <span className='flex items-center gap-2'>
                <HiOutlineCollection className='text-3xl'/> 68+k
              </span>
              <p className='font-normal'>Book Collections</p>
            </div>

            <div className='font-bold'>
              <span className='flex items-center gap-2'>
                <FaPeopleGroup className='text-3xl'/>
                   25,567
              </span>
              <p className='font-normal'>Customers</p>
            </div>
          </div>

          <div className='flex mt-12  text-white '>
            <button className='text-white p-2  bg-red-700 rounded-md'><a href="#" className='flex items-center gap-3'>Go to collections <FaArrowRight /></a></button>
          </div>
        </div>

        <div className='border-2 flex items-center justify-center border-purple-600 rounded-sm w-3/5 h-[70vh]'>
           <p className='text-3xl'>Slider Images</p>
        </div>
      </div>
      {data && <p>{data.name}</p>} {/* Example usage of fetched data */}
    </section>

  );
}
