import React, { useState, useEffect, useRef } from 'react'
import Button from '@/components/Ui/Button'
import ArrowBtn from '@/components/Ui/ArrowBtn'
import useNavigateHook from '@/composables'
import { Search, Share2, Download, Loader } from 'lucide-react'
import { PosterStar, Poster } from '@/assets/icons'
import { motion, AnimatePresence } from "motion/react"
import { Skeleton } from '@/components/Ui/Skelton'
import ResultPoster from '@/components/Ui/ResultPoster'
import html2canvas from 'html2canvas';

function index() {
  const { handleNavigate } = useNavigateHook();
  const [imageUrl, setImageUrl] = useState('');
  const [search, setSearch] = useState('');
  const [programs, setPrograms] = useState([]);
  const [filteredPrograms, setFilteredPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingPoster, setLoadingPoster] = useState(true);
  const [selectedProgram, setSelectedProgram] = useState(null);
  const ApiUrl = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    setLoading(true);
    try {

      const fetchPrograms = async () => {
        const response = await fetch(`${ApiUrl}/users/events`, {
          method: 'GET',
        });
        console.log(response);

        if (!response.ok) {
          throw new Error('Failed to fetch program data');
        }

        const { data } = await response.json();

        // Format the response data
        const formattedData = data.map((program) => ({
          label: program.name,
          value: program._id,
          stage: program.event_type.is_onstage ? 'On Stage' : 'Off Stage',
        }));

        await handleSelectProgram(formattedData[0]);
        // console.log(formattedData);
        setPrograms(formattedData);
        setLoading(false);
      }

      fetchPrograms();
    } catch (error) {
      console.log('Failed to fetch data');
      setLoading(false);
    }
  }, []);

  const handleDownload = () => {
    const poster = document.getElementById('resultPosterId');

    html2canvas(poster).then((canvas) => {
      const imageUrl = canvas.toDataURL('image/png'); // Create image URL from canvas
      setImageUrl(imageUrl);
      const link = document.createElement('a'); // Create a temporary link element
      link.href = imageUrl;
      if (selectedProgram) {
        link.download = `${selectedProgram.programName}-result.png`; // Set the download attribute to the program name
      } else {
        link.download = 'poster.png';
      }
      link.click();
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
              text: `Check out this awesome poster! 🎉 come and check other results ${'https://artify-beryl.vercel.app/'}`,
              files: [file], // Pass the image file
            });
            console.log('Shared successfully!');
          } catch (err) {
            console.error('Error sharing:', err);
          }
        } else {
          console.warn('Web Share API not supported or file sharing not supported');
          alert('Sorry, file sharing is not supported on your device please download the image and share it manually');
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


  const handleSelectProgram = async (program) => {
    setLoadingPoster(true);
    try {
      const response = await fetch(`${ApiUrl}/users/result/event/${program.value}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch program data');
      }

      const { data } = await response.json();

      const formattedData = data.map((program) => ({
        programName: program.name,
        stageStatus: program.is_onstage ? 'on_stage' : 'off_stage',
        winners: program.winningRegistrations.map((winner) => ({
          position: winner.position,
          participants: winner.eventRegistration.participants.user.map((participant) => ({
            name: participant.name,
            department: participant.department,
            year: participant.year_of_study,
          })),
        })),
      }));
      // console.log(formattedData);
      setSelectedProgram(formattedData[0]);
      setLoadingPoster(false);
    } catch (error) {
      console.error('Failed to select program', error);
      setLoadingPoster(false);
    }
  };

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
        {loadingPoster ? (
          <div>
            <p className='flex items-center justify-center mx-auto text-black p-3'>
              <Skeleton className="min-h-[400px] mx-auto min-w-full max-w-[400px]  rounded-xl bg-slate-300" />
            </p>
          </div>
        ) : (
          selectedProgram ? (
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
              <div className='border rounded-lg border-black min-h-[360px] mx-auto min-w-[300px] max-w-[400px] overflow-hidden flex flex-col shadow-sm '>
                <div className='flex-1 flex-grow  basis-[85%]' id="resultPosterId" >
                  <ResultPoster result={selectedProgram} />
                </div>
                <div className='grid grid-cols-3 h-[20px] basis-[15%] border-t border-black overflow-hidden'>

                  <div className='col-span-2 flex  items-center justify-center gap-3  relative'>
                    <button className='flex  items-center justify-center gap-3' onClick={() => handleShare()}>
                      <span ><Share2 /></span><p className='font-semibold'>Share Now</p>
                    </button>
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
          ) : (
            <div>
              <p className='flex items-center justify-center mx-auto text-black'>No result to display</p>
            </div>
          )
        )}

      </div>


      <section className='z-20 flex flex-wrap w-full mx-auto gap-4 py-10 items-start justify-center'>
        {loading ? (
          Array.from({ length: 7 }).map((_, index) => (
            <Skeleton className="h-10 w-40  px-8  bg-slate-300" key={index} />
          ))
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

                onClick={() => handleSelectProgram(program)}
                className='flex items-center justify-between gap-4 py-1.5 px-8 md:px-10 border border-[#2e2d2d] bg-white rounded-md w-fit cursor-pointer transition-all ease-in-out duration-300 hover:bg-gray-200 hover:-translate-y-2 hover:shadow-xl hover:z-10'
              >
                <p className='font-semibold'>{program.label}</p>
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
