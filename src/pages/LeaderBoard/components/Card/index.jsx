import React from 'react';
import { GroupCard } from '@/assets/icons';

function index({ position, data }) {
    const cardColors = [
        {
            position: 1,
            text: '#F7C261',
            num: '#E5A224',
            shadow: '#E5A22440',
        },
        {
            position: 2,
            text: '#959393',
            num: '#535353',
            shadow: '#B7B5B54D',
        },
        {
            position: 3,
            text: '#D8914A',
            num: '#B46415',
            shadow: '#B96A1C40',
        },
        {
            position: 4,
            text: '#4583BF',
            num: '#125494',
            shadow: '#12549440',
        },
    ];
    const currentColor = cardColors.find((color) => color.position === position);
    return (
        <div
            className="relative w-full border border-black   mx-auto h-fit z-30 max-w-[350px] min-h-[140px] bg-red-300 flex items-center justify-center rounded-3xl"
            style={{ boxShadow: `inset 0 4px 10px ${currentColor?.shadow}` }}
        >
            {/* <img src={GroupCard} alt="star" className="w-full max-w-[460px]" /> */}
            <span 
                className="
                absolute 
                before:content-[''] 
                left-[31px] -bottom-[3px] 
                bg-white  
                w-[20px] h-[15px] 
                rounded-t-md 
                border border-black  
                border-b-0  
                z-10" />
                <span 
                className="
                absolute 
                before:content-[''] 
                left-[31px] -top-[3px] 
                bg-white  
                w-[20px] h-[15px] 
                rounded-b-md 
                border border-black  
                border-t-0
                z-10" />
                 <span className="absolute border border-l-black rotate-[25deg]  before:content-[''] box-shadow-top  left-[51px] -top-[1px]  rounded-[3px]  w-[6px] h-[12px] border-b-red-300 border-r-transparent border-t-transparent rounded-  z-10" />
                 <span className="absolute border-r -rotate-[25deg] border-black before:content-[''] box-shadow-top2  left-[25px] -top-[1px]  rounded-[3px] w-[6px] h-[12px]  rounded-  z-10" />
                 <span className="absolute before:content-[''] box-shadow-bottom  left-[51px] bottom-[0px]  rounded-xl  w-[15px] h-[15px]  rounded-  z-10" />
                 <span className="absolute before:content-[''] box-shadow-bottom2  left-[16px] bottom-[0px]  rounded-xl  w-[15px] h-[15px]  rounded-  z-10" />
            <div
                className=" w-full flex items-center justify-around px-6 font-bold text-2xl"
                style={{ color: currentColor?.text }}
            >
                <h1 className="text-[50px] pl-[4px]" style={{ color: currentColor?.num }}>
                    {position}
                </h1>
                <h1 className="flex-1 pl-8">{data.name}</h1>
                <h1 style={{ color: currentColor?.num }}>
                    {data.points}
                    <sub>pts</sub>
                </h1>
            </div>
        </div>
    );
}

export default index;
