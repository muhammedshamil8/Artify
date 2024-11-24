import React, { useState, useEffect, useRef } from 'react'
import Button from '@/components/Ui/Button'
import ArrowBtn from '@/components/Ui/ArrowBtn'
import useNavigateHook from '@/composables'
import { Search, Share2, Download, Loader } from 'lucide-react'
import { PosterStar, Poster } from '@/assets/icons'
import { motion, AnimatePresence } from "motion/react"
import { RWebShare } from "react-web-share";
import ResultPoster from '@/components/Ui/ResultPoster'
import html2canvas from 'html2canvas';

function index() {
  const { handleNavigate } = useNavigateHook();
  const [imageUrl, setImageUrl] = useState('');
  const [search, setSearch] = useState('');
  const [programs, setPrograms] = useState([]);
  const [filteredPrograms, setFilteredPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProgram, setSelectedProgram] = useState(null);

  useEffect(() => {
    const poster = document.getElementById('resultPosterId');

    // Use html2canvas to render the poster content into a canvas
    html2canvas(poster).then((canvas) => {
      const imageUrl = canvas.toDataURL('image/png'); // Create image URL from canvas
      setImageUrl(imageUrl);
    });
  }, []);
  useEffect(() => {
    setLoading(true);
    try {
      const fetchDummyPrograms = async () => {
        const dummyPrograms = [
          { name: 'Song', id: '123', poster: Poster },
          { name: 'Dance', id: '124', poster: Poster },
          { name: 'Drama', id: '125', poster: Poster },
          { name: 'Music', id: '126', poster: Poster },
          { name: 'Art', id: '127', poster: Poster },
          { name: 'Poetry', id: '128', poster: Poster },
          { name: 'Painting', id: '129', poster: Poster },
          { name: 'Sketching', id: '130', poster: Poster },
        ];
        setFilteredPrograms(dummyPrograms);
        setPrograms(dummyPrograms);
        setSelectedProgram(dummyPrograms[0]);
      };

      fetchDummyPrograms();
    } catch (error) {
      console.log('Failed to fetch data');
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleDownload = () => {
    // Find the poster div (replace "resultPosterId" with the actual ID of your poster)
    const poster = document.getElementById('resultPosterId');

    // Use html2canvas to render the poster content into a canvas
    html2canvas(poster).then((canvas) => {
      const imageUrl = canvas.toDataURL('image/png'); // Create image URL from canvas
      setImageUrl(imageUrl);
      const link = document.createElement('a'); // Create a temporary link element
      link.href = imageUrl;
      link.download = 'poster.png'; // Set download filename
      link.click(); // Trigger the download
    });
  };


  const handleShare = async () => {
    const poster = document.getElementById('resultPosterId'); 
  
    // Capture the content of the element as a canvas
    html2canvas(poster).then((canvas) => {
      // Convert the canvas to a Blob
      canvas.toBlob(async (blob) => {
        if (!blob) return;
  
        // Create a File object from the Blob
        const file = new File([blob], 'poster.png', { type: 'image/png' });
  
        // Check if the Web Share API supports file sharing
        if (navigator.share) {
          try {
            // Share the image as a file
            await navigator.share({
              title: 'Poster Share',
              text: 'Check out this awesome poster!',
              files: [file], // Pass the image file
            });
            console.log('Shared successfully!');
          } catch (err) {
            console.error('Error sharing:', err);
          }
        } else {
          console.warn('Web Share API not supported or file sharing not supported');
        }
      });
    });
  };




  useEffect(() => {
    if (search !== '') {
      const filteredProgram = programs.filter((program) => program.name.toLowerCase().includes(search.toLowerCase()));
      setFilteredPrograms(filteredProgram);
    } else if (search === '') {
      setFilteredPrograms(programs);
    }

  }, [search, programs]);

  return (
    <motion.div
      className='relative min-h-screen z-20 flex flex-col select-none'
      initial={{ x: "100vw", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-100vw", opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >

      <div className='pt-8 px-2 z-20'>
        <div className='flex w-full justify-center  gap-4'>
          <div className='flex justify-start items-end p-3 z-20'> <ArrowBtn direction='left' onClick={() => handleNavigate('/')} /></div>
          <div className='items-center justify-center flex-1 p-3 -ml-20'>
            <Button className="mx-auto bg-white">
              <span className='text-center mx-auto font-semibold py-2'> Result</span>
            </Button>
          </div>
        </div>

        {/* search input */}
        <div className='flex flex-col items-center justify-center gap-4 p-2 pb-10 mt-8'>
          <div className='relative  h-fit overflow-hidden w-full mx-auto max-w-[400px]'>
            <div className='border-[1px] border-[#716F6F] w-full max-w-[400px]  rounded-full flex items-center mx-auto shadow-sm shadow-[#FE346E26]'>

              <div className='p-2'>
                <Search size={20} />
              </div>
              <input type="search" placeholder="Search Result" className="pl-4 flex-1 border-none outline-none  p-2 rounded-md w-full max-w-[500px] px-4 bg-transparent"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <div className='absolute bg-white rounded-full w-2 h-4 left-8 -top-3 border-[1px] border-[#716F6F]' />
              <div className='absolute bg-white rounded-full w-2 h-4 left-8 -bottom-3 border-[1px] border-[#716F6F]' />

            </div>
          </div>
        </div>

        {/* poster */}
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.6,
            ease: 'easeInOut'
          }}
        >
          <div className='border rounded-lg border-black min-h-[360px] mx-auto min-w-[300px] max-w-[500px] overflow-hidden flex flex-col shadow-sm '>
            <div className='flex-1 flex-grow  basis-[85%]' id="resultPosterId" >
              <ResultPoster />
            </div>
            <div className='grid grid-cols-3 h-[20px] basis-[15%] border-t border-black overflow-hidden'>

              <div className='col-span-2 flex  items-center justify-center gap-3  relative'>
                <RWebShare
                  data={{
                    text: "Like humans, flamingos make friends for life",
                    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBnuRaF10nJF2Rj1UVdJNK8_aRjLc4R0JhlQ&s',
                    title: "Flamingos",
                  }}
                  onClick={() => console.log('share clicked')}
                >
                  <button className='flex  items-center justify-center gap-3'>    <span ><Share2 /></span><p className='font-semibold'>Share Now</p></button>
                </RWebShare>

                <img src={PosterStar} alt='star' className='absolute left-3 -top-5 z-50 stroke-1 stroke-gray-200' />
                <img src={PosterStar} alt='star' className='absolute right-2 -bottom-6 z-50 stroke-1 stroke-gray-200' />

              </div>
              <div className='flex items-center justify-center border-l border-black relative py-2'>
                <span onClick={handleDownload} className='cursor-pointer'>
                  <Download className='stroke-2' />
                </span>
                <img src={PosterStar} alt='star' className='absolute right-0 -top-6 z-50 stroke-1 stroke-gray-200' />
              </div>
            </div>
          </div>
        </motion.div>

        <Button className="mx-auto bg-white mt-4" onClick={() => handleShare()}>
          <span className='text-center mx-auto font-semibold py-2'> Share Poster</span>
        </Button>

      </div>


      <section className='z-20 flex flex-wrap w-full mx-auto gap-4 py-10 items-start justify-center'>
        {loading ? (
          <p className='flex items-center justify-center mx-auto text-black'><Loader className="animate-spin" />&nbsp; Loading...</p>
        ) : (
          <AnimatePresence>
            {filteredPrograms.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={
                  { opacity: 0, y: -10 }
                }
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                  ease: 'easeInOut'
                }}

                onClick={() => setSelectedProgram(program)}
                className='flex items-center justify-between gap-4 py-1.5 px-8 md:px-10 border border-[#2e2d2d] bg-white rounded-md w-fit cursor-pointer transition-all ease-in-out duration-300 hover:bg-gray-200 hover:-translate-y-2 hover:shadow-xl hover:z-10'
              >
                <p className='font-semibold'>{program.name}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        )}
      </section>

      <div className="absolute w-full flex flex-col justify-between top-0 h-full z-0">
        {[
          { bg: '#5F01D191', position: 'absolute -left-10' },
          { bg: '#FE346E91', position: 'absolute -right-10' },
          { bg: '#1089FE91', position: 'absolute -left-10 -bottom-40' },
          { bg: '#20BBAD91', position: 'absolute -right-10 bottom-0' },
        ].map((item, index) => (
          <div className="relative" key={index}>
            <div
              className={`rounded-full w-24 h-24 blur-[50px] ${item.position}`}
              style={{ backgroundColor: item.bg }}
            />
          </div>
        ))}
      </div>

    </motion.div>
  )
}

export default index