import React from 'react'
import Button from '@/components/Ui/Button'
import ArrowBtn from '@/components/Ui/ArrowBtn'
import { Star, ArtifyTxt } from '@/assets/icons'
import useNavigateHook from '@/composables'
import '@/assets/styles/home.css'

function index() {
    const { handleNavigate } = useNavigateHook();
    
    return (
        <div className='flex flex-col justify-between h-full'>
            {/* marquee banner */}
            <div className='bg-black h-16 my-2 w-full overflow-hidden'>
                <div className='marquee flex justify-start h-full gap-4'>
                    {[...Array(10)].map((_, i) => (
                        <div key={i} className='flex items-center justify-center gap-3 text-white h-full mx-6'>
                            <img src={Star} alt='star' className='h-6 w-6' />
                            <span className='whitespace-nowrap'>{`Welcome to Artify`}</span>
                        </div>
                    ))}
                    {/* Duplicate content to ensure the seamless scroll */}
                    {[...Array(10)].map((_, i) => (
                        <div key={i + 20} className='flex items-center justify-center gap-3 text-white h-full mx-6'>
                            <img src={Star} alt='star' className='h-6 w-6' />
                            <span className='whitespace-nowrap'>{`Welcome to Artify`}</span>
                        </div>
                    ))}
                </div>
            </div>
            {/* card show */}
            <div>
            </div>

            {/* content */}
            <section className='flex flex-col items-center justify-center gap-2 text-center w-full p-2'>
                <img src={ArtifyTxt} alt='Artify' className='h-28w-28 mx-auto' />
                <h2 className='text-xl font-normal'>Uniting Artists, Visionaries, and Dreamers</h2>
                <p className='text-sm px-2 max-w-[500px] leading-4 mt-4'><b>Artify</b> is where passion and talent collide, showcasing the diverse
                    expressions of art and innovation from our talented students. Immerse yourself in a world of colors, sounds, and ideas that inspire and uplift. Don’t miss out <b>Artify</b> is where passion and talent collide, showcasing the diverse expressions of art and innovation from our talented students. Immerse yourself in a world of colors, sounds, and ideas that inspire and uplift.
                    <b>Don’t miss out</b></p>
            </section>

            {/* buttons */}
            <div className='flex gap-4 items-center justify-center w-full'>
                <Button onClick={() => handleNavigate('LeaderBoard')}>
                    <span className='flex items-center justify-center flex-1 font-semibold'>Leader Board</span>
                    <div className='flex justify-end items-center'> <ArrowBtn direction='right' /></div>
                </Button>
                <Button onClick={() => handleNavigate('IndividualResult')}>
                    <span className='flex items-center justify-center flex-1 font-semibold'>Individual Result</span>
                    <div className='flex justify-end items-center'> <ArrowBtn direction='right' /></div>
                </Button>
            </div>

        </div>
    )
}

export default index
