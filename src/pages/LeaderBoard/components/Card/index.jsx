import React from 'react'
import { GroupCard } from '@/assets/icons'

// with image card
function index({ position, data }) {
    console.log(data)
    return (
        <div className='relative w-full mx-auto h-fit z-30'>
            <img src={GroupCard} alt='star' className='w-full max-w-[460px]' />
            <div className='absolute top-[40%] w-full flex items-center justify-around px-6 font-bold text-2xl'>
                <h1 className='text-[50px]'>{position}</h1>
                <h1 className='flex-1 pl-8 '>{data.name}</h1>
                <h1>{data.points}<sub>pts</sub></h1>
            </div>

        </div>
    )
}

export default index
