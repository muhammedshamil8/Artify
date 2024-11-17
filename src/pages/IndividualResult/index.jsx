import React from 'react'
import Button from '@/components/Ui/Button'
import ArrowBtn from '@/components/Ui/ArrowBtn'
import useNavigateHook from '@/composables'

function index() {
  const { handleNavigate } = useNavigateHook();
  return (
    <div>
      <div className='flex w-full justify-center  gap-4'>
        <div className='flex justify-start items-end p-3 z-20'> <ArrowBtn direction='left' onClick={() => handleNavigate('/')}/></div>
        <div className='items-center justify-center flex-1 p-3 -ml-20'>
          <Button className="mx-auto ">
            <span className='text-center mx-auto font-semibold py-2'>Individual Result</span>
          </Button>
        </div>
      </div>

    </div>
  )
}

export default index
