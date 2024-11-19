import React from 'react'
import Button from '@/components/Ui/Button'
import ArrowBtn from '@/components/Ui/ArrowBtn'
import useNavigateHook from '@/composables'
import { Search } from 'lucide-react'

function index() {
  const { handleNavigate } = useNavigateHook();
  return (
    <div>
      <div className='flex w-full justify-center  gap-4'>
        <div className='flex justify-start items-end p-3 z-20'> <ArrowBtn direction='left' onClick={() => handleNavigate('/')} /></div>
        <div className='items-center justify-center flex-1 p-3 -ml-20'>
          <Button className="mx-auto ">
            <span className='text-center mx-auto font-semibold py-2'>Individual Result</span>
          </Button>
        </div>
      </div>


      <div className='flex flex-col items-center justify-center gap-4 p-2 pb-10 mt-8'>
        <div className='relative  h-fit overflow-hidden w-fit mx-auto'>
          <div className='border-[1px] border-[#716F6F] w-full max-w-[500px]  rounded-full flex items-center mx-auto shadow-sm shadow-[#FE346E26]'>

            <div className='p-2'>
              <Search size={20}/>
            </div>
            <input type="search" placeholder="Search Result" className="pl-4 flex-1 border-none outline-none  p-2 rounded-md w-full max-w-[500px] px-4 bg-transparent" />
            <div className='absolute bg-white rounded-full w-2 h-4 left-8 -top-3 border-[1px] border-[#716F6F]' />
            <div className='absolute bg-white rounded-full w-2 h-4 left-8 -bottom-3 border-[1px] border-[#716F6F]' />

          </div>
        </div>
      </div>
    </div>
  )
}

export default index
