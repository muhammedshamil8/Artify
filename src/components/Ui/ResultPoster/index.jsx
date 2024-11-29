import React, { useState, useEffect } from 'react'
import PosterBG from '@/assets/images/poster_bg.svg'
import {
    ArtifyLogo,
    badge_white as badge,
    poster_element,
    UnionLogo,
    wideStar,
    wideStarBig,
    ResultTxt,
    Star,
    ResultTxt_onstage,
    wideStarBig_onstage,
    wideStar_onstage,
    UnionLogo_onstage,
    poster_element_onstage,
} from '@/assets/icons'
import classNames from 'classnames';

function dynamicTextWithBreak(text) {
    // Split the text by space to separate the words
    const words = text.split(" ");

    return (
        <div className="relative text-center uppercase">
            {/* First Word - Larger Font */}
            <span className="rotate-[270deg] text-2xl font-extrabold absolute text-center leading-3 -left-10">
                {words[0]}
            </span>
            {/* Second Word - Smaller Font */}
            {words[1] && (
                <span className="rotate-[270deg] text-xl font-extrabold absolute text-center leading-3 -left-3">
                    {words[1]}
                </span>
            )}
        </div>
    );
}


function index({ result }) {
    console.log(result.stageStatus);
    const [onStage, setOnStage] = useState(false);
    useEffect(() => {
        if (result.stageStatus === 'on_stage') {
            setOnStage(true);
        }
    }, [result.stageStatus]);

    // To log details of winners as well:
    // console.log(result?.winners);

    const data = [
        {
            name: 'Muhammed Shamil ',
            position: 1
        },
        {
            name: 'Saleel Mohammed',
            position: 2
        },
        {
            name: 'Dilshad KT',
            position: 3
        }
    ];

    const getYear = (year) => {
        if (year === 1) return '(1st year}';
        if (year === 2) return '(2nd year)';
        if (year === 3) return '(3rd year)';
        if (year === 4) return '(4th year)';
        return '';
    }

    return (
        <div className="flex justify-center items-center">
            {/* Wrapper with Aspect Ratio */}
            <div className="w-full max-w-[1080px]  bg-white rounded-md overflow-hidden">
                {/* Main Poster Content */}
                <div className='max-w-[400px] mx-auto border py-4 bg-white rounded-md flex flex-col w-full gap-6 overflow-hidden'>
                    {/* banner */}
                    <div className={classNames(' h-10 my-2  w-full overflow-hidden z-20',
                        onStage ? 'bg-[#054379]' : 'bg-[#513B25]'
                    )}>
                        <div className='marquee flex justify-start h-full gap-4'>
                            {[...Array(10)].map((_, i) => (
                                <div key={i} className='flex items-center justify-center gap-3 text-white h-full mx-6'>
                                    <span className='whitespace-nowrap'>{`Welcome to Artify`}</span>
                                    <img src={Star} alt='star' className='h-6 w-6' />
                                    <img src={ArtifyLogo} alt='star' className='h-10 w-6' />
                                </div>
                            ))}
                            {[...Array(10)].map((_, i) => (
                                <div key={i} className='flex items-center justify-center gap-3 text-white h-full mx-6'>
                                    <span className='whitespace-nowrap'>{`Welcome to Artify`}</span>
                                    <img src={Star} alt='star' className='h-6 w-6' />
                                    <img src={ArtifyLogo} alt='star' className='h-10 w-6' />
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
                        )}>001</span>
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
                            <div className="relative z-10 flex flex-col p-4 w-full">
                                <div className="flex flex-col justify-center w-full items-center gap-6">
                                    <div>
                                        <h1 className='font-bold text-2xl text-white uppercase'>{result?.programName}</h1>
                                    </div>
                                    {/* <div className="basis-[20%] relative break-words flex items-center justify-center w-20 z-20 text-white">
                            {dynamicTextWithBreak('Speech English')}
                        </div> */}
                                    <div className="max-w-full w-fit mx-auto">
                                        {result?.winners && result?.winners.map((item, index) => (
                                            <div className="flex items-start justify-start gap-6 mb-4 w-full" key={index}>
                                                {/* Badge */}
                                                <div className="relative flex items-center justify-center h-10">
                                                    <img src={badge} className="h-10" alt="badge" />
                                                    <span className="absolute font-bold text-xl text-white p-1">{item?.position}</span>
                                                </div>
                                                {/* Name and Details */}
                                                <div className='flex flex-col flex-1 flex-grow'>
                                                    {item.participants.map((item, index) => (
                                                        <div className="flex flex-col" key={index}>
                                                            <span className={classNames("font-bold text-lg leading-4 mt-1 capitalize  max-w-[240px]",
                                                                onStage ? 'text-[#00B4E1]' : 'text-[#FFBF34]'
                                                            )}>
                                                                {item?.name}
                                                            </span>
                                                            <span className="text-xs capitalize text-white">{item?.department} {getYear(item?.year)}</span>
                                                        </div>
                                                    ))}

                                                    {/* <div className="flex flex-col">
                                            <span className="font-bold text-lg leading-4 mt-1 capitalize text-[#FFBF34]">
                                                {item.name}
                                            </span>
                                            <span className="text-xs capitalize text-white">{item.name}</span>
                                        </div> */}
                                                </div>
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
                                <img src={wideStarBig} alt='star' className='mx-auto' />
                                <img src={wideStar} alt='star' className='mx-auto pr-10' />
                            </div>
                        </div>
                        <div className='flex items-center justify-between w-full max-w-[320px] mx-auto mt-10'>
                            <div>
                                {onStage ? (
                                    <img src={poster_element_onstage} alt='element' className='mx-auto' />
                                ) : (
                                    <img src={poster_element} alt='element' className='mx-auto' />
                                )}
                            </div>
                            <div>
                                {onStage ? (
                                    <img src={UnionLogo_onstage} alt='logo' className='mx-auto' />
                                ) : (
                                    <img src={UnionLogo} alt='logo' className='mx-auto' />
                                )}
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
