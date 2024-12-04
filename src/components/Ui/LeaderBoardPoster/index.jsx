import React, { useState, useEffect } from 'react'
import Card from './Card'
import { Star } from '@/assets/icons/elements/other'
import {
    point_table_poster_element,
    point_table_txt
} from '@/assets/icons/elements/leaderboard'
import {
    ArtifyLogo,
    ProductLogoBlack,
    Union_logo_black,
} from '@/assets/logo';
import classNames from 'classnames';

function index({ data }) {
    console.log(data)

    function getResultNum(num) {
        if (!num) return '000';
        return num.toString().padStart(3, '0');
    }
    return (
        <div className="flex justify-center items-center z-40">
            <div className="w-full max-w-[1080px]  bg-white rounded-md overflow-hidden">
                <div className='max-w-[400px] mx-auto  py-4 bg-white rounded-md flex flex-col w-full gap-2 overflow-hidden'>
                    {/* banner */}
                    <div className={classNames(' h-[35px] my-2  w-full overflow-hidden z-20 bg-black',
                    )}>
                        <div className='marquee flex justify-start h-full gap-4'>
                            {[...Array(10)].map((_, i) => (
                                <div key={i} className='flex items-center justify-center gap-3 text-white h-full mx-6'>
                                    <span className='whitespace-nowrap'>{`Welcome to Artify`}</span>
                                    <img src={Star} alt='star' className='h-5 w-5' />
                                    <img src={ArtifyLogo} alt='star' className='h-[35px] w-5' />
                                </div>
                            ))}
                            {[...Array(10)].map((_, i) => (
                                <div key={i} className='flex items-center justify-center gap-3 text-white h-full mx-6'>
                                    <span className='whitespace-nowrap'>{`Welcome to Artify`}</span>
                                    <img src={Star} alt='star' className='h-5 w-5' />
                                    <img src={ArtifyLogo} alt='star' className='h-[35px] w-5' />
                                </div>
                            ))}
                            {[...Array(10)].map((_, i) => (
                                <div key={i} className='flex items-center justify-center gap-3 text-white h-full mx-6'>
                                    <span className='whitespace-nowrap'>{`Welcome to Artify`}</span>
                                    <img src={Star} alt='star' className='h-5 w-5' />
                                    <img src={ArtifyLogo} alt='star' className='h-[35px] w-5' />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='flex  items-center justify-center w-fit mx-auto'>
                        <img src={point_table_txt} alt='text' className='mx-auto max-w-[190px]' />
                        <span className={classNames('rounded-full ml-1 p-1 font-bold w-[36px] h-[36px] flex items-center flex-col justify-center text-[12px] text-white bg-[#513B25]',
                        )}>
                            <span className='text-[8px] leading-0 h-2 font-medium'>After</span>
                            {getResultNum(data?.result_no)}</span>
                    </div>

                    {/* result  card*/}
                    <div >
                        <div className='px-4 w-full mx-auto max-w-[320px] flex flex-col gap-0'>
                            {/* Result */}
                            {data.map((item, index) => (
                                <div className={classNames('w-full',
                                )}>
                                    <Card key={index} position={index + 1} data={item} />
                                </div>
                            ))}
                        </div>
                        <div className='flex items-center justify-between w-full max-w-[340px] mx-auto mt-1'>
                            <div>
                                <img src={point_table_poster_element} alt='element' className='mx-auto max-w-[220px] ' />
                            </div>
                            <div>
                                <img src={Union_logo_black} alt='logo' className='mx-auto max-w-[28px]' />
                            </div>
                            <div>
                                <img src={ProductLogoBlack} alt='logo' className='mx-auto max-w-[80px]' />
                            </div>

                        </div>
                    </div>
                    {/* element */}

                </div>
            </div>
        </div>
    )
}

export default index
