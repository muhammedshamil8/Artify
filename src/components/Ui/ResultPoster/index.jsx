import React from 'react'
import PosterBG from '@/assets/images/poster_bg.svg'
import {
    ArtifyLogo,
    badge_white as badge,
    poster_element,
    UnionLogo,
    wideStar,
    wideStarBig,
    ResultTxt,
    Star
} from '@/assets/icons'

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
    console.log(result)

    // To log details of winners as well:
    console.log(result?.winners);

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
        <div className='max-w-[400px] mx-auto border py-4 rounded-md flex flex-col w-full gap-6 overflow-hidden'>
            {/* banner */}
            <div className='bg-[#513B25]  h-10 my-2  w-full overflow-hidden z-20'>
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
                <img src={ResultTxt} alt='text' className='mx-auto max-w-[190px]' />
                <span className='bg-[#D39E2B] rounded-full -ml-8 mt-4 p-0.5 font-bold w-[35px] h-[35px] flex items-center justify-center text-sm text-white'>001</span>
            </div>

            {/* result  card*/}
            <div className='px-4 w-full mx-auto'>
                <div
                    className={`bg-[#513B25] rounded-xl relative min-w-[300px] max-w-[320px] w-full  mx-auto`}
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
                                                <div className="flex flex-col">
                                                    <span className="font-bold text-lg leading-4 mt-1 capitalize text-[#FFBF34] max-w-[240px]">
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
                        <img src={wideStar} alt='star' className='mx-auto pl-10' />
                        <img src={wideStarBig} alt='star' className='mx-auto' />
                    </div>
                    <div className='absolute  -left-0  -bottom-10 flex flex-col items-center justify-center'>
                        <img src={wideStarBig} alt='star' className='mx-auto' />
                        <img src={wideStar} alt='star' className='mx-auto pr-10' />
                    </div>
                </div>
                <div className='flex items-center justify-between w-full max-w-[320px] mx-auto mt-10'>
                    <div>
                        <img src={poster_element} alt='element' className='mx-auto' />
                    </div>
                    <div>
                        <img src={UnionLogo} alt='logo' className='mx-auto' />
                    </div>

                </div>
            </div>
            {/* element */}

        </div>
    )
}

export default index
