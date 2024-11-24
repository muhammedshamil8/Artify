import React, { useEffect, useState } from 'react'
import Button from '@/components/Ui/Button'
import ArrowBtn from '@/components/Ui/ArrowBtn'
import useNavigateHook from '@/composables'
import Card from './components/Card'
import { motion } from "motion/react"
import { Loader } from 'lucide-react'

function Index() {
  const { handleNavigate } = useNavigateHook();
  const [cardsData, setCardsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const dummyData = [
    {
      name: 'Arts',
      points: 100
    },
    {
      name: 'Science',
      points: 90
    },
    {
      name: 'Commerce',
      points: 80
    },
    {
      name: 'Bvoc',
      points: 70
    }
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        setTimeout(() => {
          setCardsData(dummyData);
          setLoading(false);
        }, 1000);
      } catch (error) {
        setError('Failed to fetch data');
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <motion.div
      initial={{ x: "100vw", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-100vw", opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className='relative z-20 pt-8 min-h-screen px-2'>
        <div className='flex w-full justify-center  gap-4 z-30'>
          <div className='flex justify-start items-end p-3 z-20'>
            <ArrowBtn className="z-20" direction='left' onClick={() => handleNavigate('/')} />
          </div>
          <div className='items-center justify-center flex-1 p-3 -ml-20'>
            <Button className="mx-auto z-20">
              <span className='text-center mx-auto font-semibold py-2'>Leader Board</span>
            </Button>
          </div>
        </div>

        <div className='flex flex-col items-center justify-center w-full gap-8 p-2 py-10 z-40'>
          {loading && <p className='flex items-center justify-center mx-auto'><Loader className="animate-spin" />&nbsp; Loading...</p>}
          {
            cardsData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.2,
                  duration: 0.6,
                  ease: 'easeInOut'
                }}
              >
                <Card key={index} position={index + 1} data={item} />
              </motion.div>
            ))
          }
        </div>


        <div className="absolute w-full flex flex-col justify-between top-0 h-full  z-0">
          <div className='relative'>
            <div className='rounded-full bg-[#5F01D191] w-24 h-24 blur-[50px] absolute -left-10' />
          </div>
          <div className='relative'>
            <div className='rounded-full bg-[#FE346E91] w-24 h-24 blur-[50px] absolute -right-10' />
          </div>
          <div className='relative'>
            <div className='rounded-full bg-[#1089FE91] w-24 h-24 -bottom-40 blur-[50px] absolute -left-10' />
          </div>
          <div className='relative'>
            <div className='rounded-full bg-[#20BBAD91] w-24 h-24 bottom-0 blur-[50px] absolute -right-10' />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Index
