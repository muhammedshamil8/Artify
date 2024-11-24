import React, { useEffect, useState } from 'react'
import Button from '@/components/Ui/Button'
import ArrowBtn from '@/components/Ui/ArrowBtn'
import useNavigateHook from '@/composables'
import Card from './components/Card'
import IndividualCard from './components/IndividualCard'
import { motion } from "motion/react"
import { Loader, Share2 } from 'lucide-react'
import ShareNowButton from './components/ShareButton'

function Index() {
  const { handleNavigate } = useNavigateHook();
  const [teamData, setTeamData] = useState([]);
  const [individualData, setIndividualData] = useState([]);
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

  const dummyData2 = [
    {
      name: 'John Doe',
      points: 100
    },
    {
      name: 'James ',
      points: 90
    },
    {
      name: 'Jane Doe',
      points: 80
    },
    {
      name: 'Jenny Doe',
      points: 70
    },
    {
      name: 'shukooooooorr havu',
      points: 65
    },
    {
      name: 'copilot',
      points: 60
    },
    {
      name: 'pilot',
      points: 55
    },
    {
      name: 'captain',
      points: 50
    },
    {
      name: 'co-captain',
      points: 45
    },
    {
      name: 'first officer',
      points: 40
    }
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        setTimeout(() => {
          setTeamData(dummyData);
          setIndividualData(dummyData2);
          setLoading(false);
        }, 1000);
      } catch (error) {
        setError('Failed to fetch data');
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // blur bg eleemts
  const circles = [
    { bg: '#5F01D191', position: '-left-10 top-0' },
    { bg: '#FE346E91', position: '-right-10 top-0' },
    { bg: '#1089FE91', position: '-left-10 -bottom-40' },
    { bg: '#20BBAD91', position: '-right-10 bottom-0' },
    { bg: '#5F01D191', position: '-left-10 top-0' },
    { bg: '#FE346E91', position: '-right-10 top-0' },
    { bg: '#1089FE91', position: '-left-10 -bottom-40' },
    { bg: '#20BBAD91', position: '-right-10 bottom-0' },
  ];

  const cardColors = [
    {
      text: '#F7C261',
      num: '#E5A224',
      shadow: '#E5A22440'
    },
    {
      text: '#959393',
      num: '#535353',
      shadow: '#B7B5B54D'
    },
    {
      text: '#D8914A',
      num: '#B46415',
      shadow: '#B96A1C40'
    },
    {
      text: '#4583BF',
      num: '#125494',
      shadow: '#12549440'
    },
  ];

  return (
    <motion.div
      className='relative z-20 pt-8 min-h-screen px-2 flex flex-col'
      initial={{ x: "100vw", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-100vw", opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className='flex w-full justify-center  gap-4 z-30'>
        <div className='flex justify-start items-end p-3 z-20'>
          <ArrowBtn className="z-20" direction='left' onClick={() => handleNavigate('/')} />
        </div>
        <div className='items-center justify-center flex-1 p-3 -ml-20'>
          <Button className="mx-auto z-20">
            <span className='text-center mx-auto text-lg !font-extrabold py-2'>Leader Board</span>
          </Button>
        </div>
      </div>
      <div className='flex items-end justify-end max-w-[350px] w-full mx-auto  my-2 z-10'>
        {/* <span className='border border-black rounded-full text-xs leading-3 py-1.5 px-3 flex items-center justify-center gap-2 cursor-pointer'><Share2 size={15}  fill='black'/>Share Now</span> */}
        <ShareNowButton />
      </div>
      <div className='flex flex-col items-center justify-center w-full gap-8 p-2 pb-6 z-40'>
        {loading && <p className='flex items-center justify-center mx-auto'><Loader className="animate-spin" />&nbsp; Loading...</p>}
        {
          teamData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.2,
                duration: 0.6,
                ease: 'easeInOut'
              }}
              className='w-full max-w-[350px]'
            >
              <Card key={index} position={index + 1} data={item} />
            </motion.div>
          ))
        }
      </div>

      <h1 className='text-2xl font-semibold mx-auto py-6'>Individual Rank</h1>
      {/* individual result */}
      <div className='flex flex-col items-center justify-center w-full gap-8 p-2 pb-10 z-40'>
        {loading && <p className='flex items-center justify-center mx-auto'><Loader className="animate-spin" />&nbsp; Loading...</p>}
        {
          individualData.map((item, index) => (
            <motion.div
              className='w-full max-w-[350px]'
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.2,
                duration: 0.6,
                ease: 'easeInOut'
              }}
            >
              <IndividualCard key={index} position={index + 1} data={item} />
            </motion.div>
          ))
        }
      </div>



      <div className="absolute w-full flex flex-col justify-between top-0 h-full z-0">
        {circles.map((circle, index) => (
          <div className="relative" key={index}>
            <div
              className={`rounded-full w-24 h-24 blur-[50px] absolute ${circle.position}`}
              style={{ backgroundColor: circle.bg }}
            />
          </div>
        ))}
      </div>

    </motion.div>
  )
}

export default Index
