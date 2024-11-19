// Layout.js
import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <header className="p-2 z-40">
                {/* <nav>
                    <ul className='flex justify-around font-semibold'>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/LeaderBoard">LeaderBoard</Link></li>
                        <li><Link to="/IndividualResult">Individual Result</Link></li>
                    </ul>
                </nav> */}
            </header>
           
            <main style={{ height: 'calc(100vh - 80px)' }} className=''>
            <div className="h-[70%] fixed w-full flex flex-col justify-between top-40  z-0">
                <div className='relative'>
                    <div className='rounded-full bg-[#5F01D191] w-24 h-24 blur-[50px] absolute -left-10' />
                </div>
                <div className='relative'>
                    <div className='rounded-full bg-[#FE346E91] w-24 h-24 blur-[50px] absolute -right-10' />

                </div>
                <div className='relative'>
                    <div className='rounded-full bg-[#1089FE91] w-24 h-24 blur-[50px] absolute -left-10' />

                </div>
                <div className='relative'>
                    <div className='rounded-full bg-[#20BBAD91] w-24 h-24 blur-[50px] absolute -right-10' />
                </div>
            </div>
            <div className='z-20 flex-1 h-full bg-[#FDFFF5]'>
                {children}
            </div>
            </main>
        </div>
    );
};

export default Layout;
