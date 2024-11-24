import React from 'react'
import { badge } from '@/assets/icons'

// with image card
function index({ position, data }) {
    // console.log(data)

    const getYear = (year) => {
        if (year === 1) return '(1st year}';
        if (year === 2) return '(2nd year)';
        if (year === 3) return '(3rd year)';
        if (year === 4) return '(4th year)';
        return '';
    }
    return (
        <div className='w-full mx-auto h-fit z-30 border border-black bg-white rounded-xl flex items-center justify-between gap-6 py-2 px-3'>
            <div className='flex items-start justify-center gap-6'>
                <div className='relative flex items-center justify-center'><img src={badge} className='h-12' /><span className='absolute font-bold text-xl'>{position}</span></div>
                <div className='flex flex-col'><span className='font-bold text-lg leading-4 mt-2 capitalize'>{data.name}</span><span className='text-xs capitalize'>{data.department} {getYear(data.year_of_study)}</span></div>
            </div>
            <div className='font-bold text-xl'>{data.total_score}<sub>pts</sub></div>
        </div>
    )
}

export default index
