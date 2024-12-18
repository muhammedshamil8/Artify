import React from 'react'
import { ResultCard } from '@/assets/icons/elements/other'
import AnimatedCounter from '@/components/AnimatedCounter';

function index({ data }) {
    return (
        <div className='relative w-fit h-fit '>
            <img src={ResultCard} alt='Result Card' className='w-[180px]' />
            <div className='flex items-center flex-col justify-center w-full absolute p-2 top-[8px]'>
                <h1 className='font-bold text-sm'>Artify</h1>
                <p className='text-[10px]'>Amplify the Art</p>
                <hr className='mt-1 w-[80%] border-black border-dashed' />
            </div>

            <div className='flex items-center justify-center flex-col w-full absolute bottom-8'>
                <div className='text-[40px] font-black'>1</div>
                <h1 className='font-semibold capitalize text-md mb-2'>{data.department}</h1>
                <div className='border border-black h-[30px] max-w-24 w-full flex items-center justify-center font-bold text-sm font-mono '>
                   {data?.total_score ?  <AnimatedCounter from={0} to={data?.total_score} /> : 0}<sub>pts</sub></div>
            </div>
        </div>
    )
}

export default index
