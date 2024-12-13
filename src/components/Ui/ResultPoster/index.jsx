import React, { useState, useEffect } from 'react'
import PosterBG from '@/assets/images/poster_bg.svg'
import { Star } from '@/assets/icons/elements/other'
import {
    poster_element,
    wideStar,
    wideStarBig,
    ResultTxt,
} from '@/assets/icons/elements/offStage';
import {
    badge_white as badge,
    poster_element_onstage,
    wideStarBig_onstage,
    wideStar_onstage,
    ResultTxt_onstage
} from '@/assets/icons/elements/onStage';
import {
    UnionLogo,
    UnionLogo_onstage,
    ArtifyLogo,
    Product_logo_offStage,
    Product_logo_onStage,
} from '@/assets/logo';
import classNames from 'classnames';

function index({ result }) {
    // console.log(result);
    const [onStage, setOnStage] = useState(false);
    useEffect(() => {
        if (result.stageStatus === 'on_stage') {
            setOnStage(true);
        }
    }, [result.stageStatus]);

    const getYear = (year) => {
        if (year === 1) return '(1st year)';
        if (year === 2) return '(2nd year)';
        if (year === 3) return '(3rd year)';
        if (year === 4) return '(4th year)';
        return '';
    }

    function getResultNum(num) {
        return num.toString().padStart(3, '0');
    }


    return (
        <div className="flex justify-center items-center">
            {/* Wrapper with Aspect Ratio */}
            <div className="w-full max-w-[1080px]  bg-white rounded-md overflow-hidden">
                {/* Main Poster Content */}
                <div className='max-w-[400px] mx-auto border py-4 bg-white rounded-md flex flex-col w-full gap-6 overflow-hidden'>
                    {/* banner */}
                    <div className={classNames(' h-[35px]] my-2  w-full overflow-hidden z-20',
                        onStage ? 'bg-[#054379]' : 'bg-[#513B25]'
                    )}>
                        <div className='marquee flex justify-start h-full gap-4'>
                            {[...Array(10)].map((_, i) => (
                                <div key={i} className='flex items-center justify-center gap-3 text-white h-full mx-6'>
                                    <span className='whitespace-nowrap text-sm'>{`Welcome to Artify`}</span>
                                    <img src={Star} alt='star' className='h-5 w-5' />
                                    <img src={ArtifyLogo} alt='star' className='h-[35px] w-5' />
                                </div>
                            ))}
                            {[...Array(10)].map((_, i) => (
                                <div key={i} className='flex items-center justify-center gap-3 text-white h-full mx-6'>
                                    <span className='whitespace-nowrap text-sm'>{`Welcome to Artify`}</span>
                                    <img src={Star} alt='star' className='h-5 w-5' />
                                    <img src={ArtifyLogo} alt='star' className='h-[35px] w-5' />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='flex  items-center justify-center w-fit mx-auto'>
                        {onStage ? (
                            <img src={ResultTxt_onstage} alt='text' className='mx-auto max-w-[190px]' />
                        ) : (
                            <img src={ResultTxt} alt='text' className='mx-auto max-w-[190px]' />
                        )}
                        <span className={classNames('rounded-full -ml-8 mt-4 p-0.5 font-bold w-[35px] h-[35px] flex items-center justify-center text-sm text-white',
                            onStage ? 'bg-[#00B4E1]' : 'bg-[#D39E2B]'
                        )}>{getResultNum(result?.result_no)}</span>
                    </div>

                    {/* result  card*/}
                    <div className='px-4 w-full mx-auto'>
                        <div
                            className={classNames(` rounded-xl relative min-w-[300px] max-w-[320px] w-full  mx-auto`,
                                onStage ? 'bg-[#054379]' : 'bg-[#513B25]'
                            )}
                        >
                            <div
                                className="absolute top-0 left-0 w-full h-full z-0"
                                style={{
                                    backgroundImage: `url(${PosterBG})`,
                                    backgroundRepeat: 'repeat',
                                    backgroundSize: 'auto 200px', // Increased height for bigger images
                                    backgroundPosition: '0 0',
                                    opacity: 0.1, // Slightly increased opacity for visibility
                                }}
                            />


                            {/* Background Image */}
                            {/* <img src={PosterBG} alt="poster" className=" opacity-10 absolute top-0 left-0 z-0" />
                <img src={PosterBG} alt="poster" className="opacity-10 absolute top-0 right-0 z-0" />
                <img src={PosterBG} alt="poster" className="w-full h-full opacity-10 absolute top-0 left-0 z-0" /> */}
                            {/* Result */}
                            <div className="relative z-10 flex flex-col p-2 py-4 w-full">
                                <div className="flex flex-col justify-center w-full items-center gap-6">
                                    <div>
                                        <h1 className='font-bold text-center text-2xl text-white uppercase'>{result?.programName}</h1>
                                    </div>
                                    {/* <div className="basis-[20%] relative break-words flex items-center justify-center w-20 z-20 text-white">
                            {dynamicTextWithBreak('Speech English')}
                        </div> */}
                                    <div className="max-w-full w-fit mx-auto">
                                        {result?.winners && result?.winners.map((item, index) => (
                                            <div className="flex items-start justify-start gap-5 mb-4 w-full" key={index}>
                                                {/* Badge */}
                                                <div className="relative flex items-center justify-center h-10 w-[20%]">
                                                    <img src={badge} className="h-10" alt="badge" />
                                                    <span className="absolute font-bold text-xl text-white p-1">{item?.position}</span>
                                                </div>
                                                {/* Name and Details */}
                                                {result.is_group ? (
                                                    <div className='flex flex-col flex-1 flex-grow'>
                                                        {item.groups.map((item, index) => (
                                                            <div className="flex flex-col" key={index}>
                                                                <span className={classNames("font-bold text-lg leading-4 whitespace-nowrap flex  mt-1 capitalize  max-w-[240px] flex-grow",
                                                                    onStage ? 'text-[#91F0FF]' : 'text-[#FFBF34]'
                                                                )}>
                                                                    {item}
                                                                </span>
                                                                {/* <span className="text-xs capitalize text-white">{item}</span> */}
                                                            </div>
                                                        ))}

                                                    </div>
                                                ) : (
                                                    <div className='flex flex-col flex-1 flex-grow'>

                                                        {item.participants.map((item, index) => (
                                                            <div className="flex flex-col" key={index}>
                                                                <span className={classNames("font-bold text-lg leading-4  whitespace-nowrap mt-1 capitalize  max-w-[240px]",
                                                                    onStage ? 'text-[#91F0FF]' : 'text-[#FFBF34]'
                                                                )}>
                                                                    {item?.name}
                                                                </span>
                                                                <span className="text-xs capitalize text-white max-w-[200px]">{item?.department} {getYear(item?.year)}</span>
                                                            </div>
                                                        ))}


                                                        {/* <div className="flex flex-col">
                                            <span className="font-bold text-lg leading-4 mt-1 capitalize text-[#FFBF34]">
                                                {item.name}
                                            </span>
                                            <span className="text-xs capitalize text-white">{item.name}</span>
                                        </div> */}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* stars */}
                            <div className='absolute -top-10 -right-0  flex flex-col items-center justify-center'>
                                {onStage ? (
                                    <>
                                        <img src={wideStar_onstage} alt='star' className='mx-auto pl-10' />
                                        <img src={wideStarBig_onstage} alt='star' className='mx-auto' />
                                    </>
                                ) : (
                                    <>
                                        <img src={wideStar} alt='star' className='mx-auto pl-10' />
                                        <img src={wideStarBig} alt='star' className='mx-auto' />
                                    </>
                                )}
                            </div>
                            <div className='absolute  -left-0  -bottom-10 flex flex-col items-center justify-center'>
                                {onStage ? (
                                    <>
                                        <img src={wideStarBig_onstage} alt='star' className='mx-auto' />
                                        <img src={wideStar_onstage} alt='star' className='mx-auto pr-10' />
                                    </>
                                ) : (
                                    <>
                                        <img src={wideStarBig} alt='star' className='mx-auto' />
                                        <img src={wideStar} alt='star' className='mx-auto pr-10' />
                                    </>
                                )
                                }
                            </div>
                        </div>
                        <div className='flex items-center justify-between w-full max-w-[320px] mx-auto mt-10'>
                            <div>
                                {onStage ? (
                                    <img src={poster_element_onstage} alt='element' className='mx-auto max-w-[160px]' />
                                ) : (
                                    <img src={poster_element} alt='element' className='mx-auto max-w-[160px]' />
                                )}
                            </div>
                            <div>
                                {onStage ? (
                                    <img src={UnionLogo_onstage} alt='logo' className='mx-auto max-w-[28px]' />
                                ) : (
                                    <img src={UnionLogo} alt='logo' className='mx-auto max-w-[28px]' />
                                )}
                            </div>
                            <div>
                                {onStage ? (
                                    <img src={Product_logo_onStage} alt='logo' className='mx-auto max-w-[80px]' />
                                ) : (
                                    <img src={Product_logo_offStage} alt='logo' className='mx-auto max-w-[80px]' />
                                )}
                            </div>

                        </div>
                    </div>
                    {/* element */}

                </div>
            </div>
        </div >
    )
}

export default index
