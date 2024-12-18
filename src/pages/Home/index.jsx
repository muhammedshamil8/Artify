import React, { useEffect, useState } from 'react'
import Button from '@/components/Ui/Button'
import ArrowBtn from '@/components/Ui/ArrowBtn'
import { Star, ArtifyTxt, VstarRB, VstarLB, VstarT, VstarLT, VstarRT } from '@/assets/icons/elements/other'
import { ArtifyLogo } from '@/assets/logo'
import useNavigateHook from '@/composables'
import '@/assets/styles/home.css'
import ResultCard from './components/ResultCard'
import GroupCard from './components/GroupCard'
import { motion } from "motion/react"

function index() {
    const { handleNavigate } = useNavigateHook();
    const [card1, setCard1] = useState(null);
    const [card2, setCard2] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    const toggleFullScreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    };

    // useEffect(() => {
    //     enableFullScreen()
    // }, [])

    const ApiUrl = import.meta.env.VITE_BASE_URL;

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(`${ApiUrl}/users/results/leaderboard`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const data = await response.json();

                // Get the top-scoring individual
                const topIndividual = data.data.topScorers.reduce((max, scorer) =>
                    scorer.total_score > (max.total_score || 0) ? scorer : max, {});

                // Get the category (department) with the highest score from departmentScores
                const topCategory = Object.entries(data.data.departmentScores)
                    .map(([department, total_score]) => ({ department, total_score }))
                    .reduce((max, category) =>
                        category.total_score > (max.total_score || 0) ? category : max, {});

                // Set the state with only the highest scorers
                setCard1({
                    name: topIndividual.name,
                    total_score: topIndividual.total_score,
                    department: topIndividual.department,
                });

                setCard2({
                    department: topCategory.department,
                    total_score: topCategory.total_score,
                });

                setLoading(false);
            } catch (error) {
                console.error("Error fetching leaderboard data:", error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);


    const loadingDummyCard1Data = {
        name: 'loading...',
        points: 123
    };

    const loadingDummyCard2Data = {
        name: 'loading...',
        department: 'loading...',
        points: 123
    };



    return (
        <motion.div
            className='h-screen overflow-hidden select-none'
            initial={{ x: "", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100vw", opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            <div className='w-full flex items-center justify-center'>
                {/* <button
                    onClick={toggleFullScreen}
                    className="mt-2 px-4 py-2 bg-black text-white rounded "
                >
                    Toggle Fullscreen
                </button> */}
            </div>
            <div className='flex flex-col justify-between h-full relative mt-8'>
                {/* marquee banner */}
                <div className='bg-black h-16 my-2  w-full overflow-hidden z-20'>
                    <div className='marquee flex justify-start h-full gap-4'>
                        {[...Array(10)].map((_, i) => (
                            <div key={i} className='flex items-center justify-center gap-3 text-white h-full mx-6'>
                                <img src={Star} alt='star' className='h-6 w-6' />
                                <img src={ArtifyLogo} alt='star' className='h-10 w-6' />
                                <span className='whitespace-nowrap'>{`Artify`}</span>
                            </div>
                        ))}
                        {/* Duplicate content to ensure the seamless scroll */}
                        {[...Array(10)].map((_, i) => (
                            <div key={i + 20} className='flex items-center justify-center gap-3 text-white h-full mx-6'>
                                <img src={Star} alt='star' className='h-6 w-6' />
                                <img src={ArtifyLogo} alt='star' className='h-10 w-6' />
                                <span className='whitespace-nowrap'>{`Artify`}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='absolute top-10 left-12 '>
                    <img src={VstarT} alt='star' className='h-16 w-16' />
                </div>

                <div className='flex flex-col items-end justify-center h-full '>

                    {/* card show */}
                    <div className='absolute z-10 top-20 w-full h-full'>
                        <div className='relative h-[350px] z-10'>
                            <motion.div
                                className='absolute -right-12 top-4 rotate-[25deg] z-10'
                                initial={{ opacity: 0, y: -50, rotate: 15 }}
                                animate={{ opacity: 1, y: 0, rotate: 25 }}
                                transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                            >
                                {loading ? <ResultCard data={loadingDummyCard1Data} /> : error ? <p>{error}</p> : <ResultCard data={card1} />}
                            </motion.div>
                            <div className='absolute top-28 right-[67px] z-0'>
                                <img src={VstarRT} alt='star' className='h-16 w-16' />
                            </div>

                            <motion.div
                                className='absolute -left-12 bottom-10 -rotate-[24deg] z-10'
                                initial={{ opacity: 0, y: 50, rotate: -15 }}
                                animate={{ opacity: 1, y: 0, rotate: -24 }}
                                transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
                            >
                                {loading ? <GroupCard data={loadingDummyCard2Data} /> : error ? <p>{error}</p> : <GroupCard data={card2} />}
                            </motion.div>

                        </div>
                    </div>


                    {/* content */}
                    <div className='flex items-end basis-[60%] sm:items-center mx-auto sm:basis-[60%]'>
                        <motion.div
                            className='relative w-fit  z-30  rounded-[20px] mx-auto  pb-14  h-fit backdrop-blur-[1px]'
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, ease: 'easeInOut' }}
                        >
                            <section className='flex flex-col items-center justify-center gap-2 text-center w-full p-2  z-10' >
                                <img src={ArtifyTxt} alt='Artify' className='h-28w-28 mx-auto' />
                                <h2 className='text-xl font-normal'>Uniting Artists, Visionaries, and Dreamers</h2>
                                <p className='text-sm px-2 max-w-[500px] leading-4 mt-4'>
                                    <b>Artify</b> is where passion and talent collide, showcasing the diverse expressions of art and innovation from our talented students. Immerse yourself in a world of vibrant colors, melodious sounds, and groundbreaking ideas that inspire, uplift, and spark creativity. Don’t miss this extraordinary celebration of artistry and imagination!
                                </p>
                            </section>
                        </motion.div>
                    </div>

                    <div className='absolute bottom-36 -right-3'>
                        <img src={VstarLT} alt='star' className='h-16 w-16' />
                    </div>

                    <motion.div
                        className='flex gap-4 items-center justify-center w-full pb-10 flex-wrap gap-y-4 z-10'
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.2,
                                },
                            },
                        }}
                    >
                        {/* Button 1: Leader Board */}
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            transition={{ type: 'spring', stiffness: 120 }}
                        >
                            <Button onClick={() => handleNavigate('LeaderBoard')}>
                                <span className='flex items-center justify-center flex-1 font-semibold'>
                                    Leader Board
                                </span>
                                <motion.div
                                    className='flex justify-end items-center'
                                    initial={{ x: -10, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <ArrowBtn direction='right' />
                                </motion.div>
                            </Button>
                        </motion.div>

                        {/* Button 2: Individual Result */}
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            transition={{ type: 'spring', stiffness: 120, delay: 0.2 }}
                        >
                            <Button onClick={() => handleNavigate('results')}>
                                <span className='flex items-center justify-center flex-1 font-semibold'>
                                    Result
                                </span>
                                <motion.div
                                    className='flex justify-end items-center'
                                    initial={{ x: -10, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <ArrowBtn direction='right' />
                                </motion.div>
                            </Button>
                        </motion.div>
                    </motion.div>

                </div>
                {/* vector elements */}
                <div className='flex justify-around gap-4 absolute bottom-[20px] w-full'>
                    <img src={VstarLB} alt='star' className='h-16 w-16' />
                    <img src={VstarRB} alt='star' className='h-16 w-16' />
                </div>



                {/* blur color shadows */}
                <div className="absolute w-full flex flex-col justify-between h-[120vh] z-0 overflow-hidden top-0 bottom-0">

                    <div className='relative'>
                        <div className='rounded-full bg-[#5F01D191] w-28 h-24 top-36 blur-[45px] absolute -left-10' />
                    </div>
                    <div className='relative'>
                        <div className='rounded-full bg-[#FE346E91] w-28 h-24  blur-[45px]  absolute -right-10' />
                    </div>
                    <div className='relative'>
                        <div className='rounded-full bg-[#1089FE91] w-28 h-24 blur-[45px] -bottom-0 absolute -left-10' />
                    </div>
                    <div className='relative '>
                        <div className='rounded-full bg-[#20BBAD91] w-28 h-24 blur-[45px] bottom-52 absolute -right-10' />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default index
