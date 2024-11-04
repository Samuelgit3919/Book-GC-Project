'use client'
import { useState, useEffect } from 'react'
import Loading from './components/Loading/Loading';

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
    <div>
      <h1 className="text-center">Welcome to Home Page</h1>
      {/* Render your content here */}
      {data && <p>{data.name}</p>} {/* Example usage of fetched data */}
    </div>
  );
}
