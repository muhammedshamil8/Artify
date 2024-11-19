import React from 'react'
import { ResultCard } from '@/assets/icons'

function index({data}) {
    return (
        <div className='relative w-fit h-fit '>
            <img src={ResultCard} alt='Result Card' className='w-[180px]' />
            <div className='flex items-center flex-col justify-center w-full absolute p-2 top-[6px]'>
                <h1 className='font-bold text-sm'>Artify</h1>
                <p className='text-[10px]'>Amplify the Art</p>
                <hr className='mt-1 w-[80%] border-black border-dashed' />
            </div>

            <div className='flex items-center justify-center flex-col w-full absolute bottom-8 gap-2'>
                <div className='bg-gray-200 w-14 h-14 rounded-full mx-auto'></div>
                <div className='flex flex-col text-center'>
                    <h1 className='font-semibold capitalize text-[12px]'>{data.name}</h1>
                    <p className='text-[10px]'>{data.department}</p>
                </div>
                <div className='border border-black h-[30px] max-w-24 w-full flex items-center justify-center font-semibold text-sm'>{data.points}<sub>pts</sub></div>
            </div>
        </div>
    )
}

export default index
