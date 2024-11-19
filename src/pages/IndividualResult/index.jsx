import React from 'react'
import Button from '@/components/Ui/Button'
import ArrowBtn from '@/components/Ui/ArrowBtn'
import useNavigateHook from '@/composables'
import { Search, Share2, Download } from 'lucide-react'
import { PosterStar, Poster } from '@/assets/icons'
import { motion } from "motion/react"

function index() {
  const { handleNavigate } = useNavigateHook();

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = `${Poster}`;
    link.download = 'poster.png';
    link.click();
  };

  const handleShare = async () => {
    const handleWhatsAppMessageShare = () => {
      const text = encodeURIComponent("Check out this cool poster! there is a package for react share but direct  whatsapp status i didnt see anything..");  // The text you want to share
      window.open(`https://wa.me/?text=${text}`, "_blank");
    };
    const handleWhatsAppMobileShare = () => {
      const statusText = "Check this out! Cool poster to share!";
      const encodedText = encodeURIComponent(statusText);
      const whatsappURL = `whatsapp://send?text=${encodedText}`;
      window.location.href = whatsappURL; // Triggers WhatsApp on mobile
    };
    handleWhatsAppMobileShare()
  };



  return (
    <motion.div
      initial={{ x: "100vw", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-100vw", opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className='pt-8 px-2'>
        <div className='flex w-full justify-center  gap-4'>
          <div className='flex justify-start items-end p-3 z-20'> <ArrowBtn direction='left' onClick={() => handleNavigate('/')} /></div>
          <div className='items-center justify-center flex-1 p-3 -ml-20'>
            <Button className="mx-auto ">
              <span className='text-center mx-auto font-semibold py-2'>Individual Result</span>
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
              <input type="search" placeholder="Search Result" className="pl-4 flex-1 border-none outline-none  p-2 rounded-md w-full max-w-[500px] px-4 bg-transparent" />
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
          <div className='border rounded-lg border-black h-[360px] mx-auto max-w-[300px] overflow-hidden flex flex-col shadow-sm '>
            <div className='flex-1 bg-pink-400 basis-[85%]'>

            </div>
            <div className='grid grid-cols-3 h-[20px] basis-[15%] border-t border-black overflow-hidden'>

              <div className='col-span-2  flex  items-center justify-center gap-3 relative'>
                <span onClick={handleShare}><Share2 /></span><p onClick={handleShare} className='font-semibold'>Share Now</p>
                <img src={PosterStar} alt='star' className='absolute left-3 -top-5 z-50 stroke-1 stroke-gray-200' />
                <img src={PosterStar} alt='star' className='absolute right-2 -bottom-6 z-50 stroke-1 stroke-gray-200' />

              </div>
              <div className='flex items-center justify-center border-l border-black relative'>
                <span onClick={handleDownload} className='cursor-pointer'>
                  <Download className='stroke-2' />
                </span>
                <img src={PosterStar} alt='star' className='absolute right-0 -top-6 z-50 stroke-1 stroke-gray-200' />
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </motion.div>
  )
}

export default index
