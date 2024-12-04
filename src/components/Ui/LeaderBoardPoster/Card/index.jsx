import React from 'react';
import { GroupCard } from '@/assets/icons/elements/leaderboard';
import { First_poster, Second_poster, Third_poster, Fourth_poster, Card } from '@/assets/images';
import classNames from 'classnames';
function index({ position, data }) {
    const cardColors = [
        {
            position: 1,
            text: 'text-[#F7C261]',
            num: 'text-[#E5A224]',
            shadow: '#E5A22440',
            textSize: 'text-4xl',
            fontSize: 'text-2xl',
        },
        {
            position: 2,
            text: 'text-[#959393]',
            num: 'text-[#535353]',
            shadow: '#B7B5B54D',
            textSize: 'text-3xl',
            fontSize: 'text-xl',
        },
        {
            position: 3,
            text: 'text-[#D8914A]',
            num: 'text-[#B46415]',
            shadow: '#B96A1C40',
            textSize: 'text-2xl',
            fontSize: 'text-lg',
        },
        {
            position: 4,
            text: 'text-[#4583BF]',
            num: 'text-[#125494]',
            shadow: '#12549440',
            textSize: 'text-2xl',
            fontSize: 'text-lg',
        },
    ];
    const currentColor = cardColors.find((color) => color.position === position);

    const getCard = (position) => {
        if (position === 1) return First_poster;
        if (position === 2) return Second_poster;
        if (position === 3) return Third_poster;
        if (position === 4) return Fourth_poster;
        return GroupCard;
    }

    return (
        <div
            className="relative w-full  mx-auto h-fit z-30 flex items-center justify-center rounded-3xl overflow-hidden"
        >
            <img src={getCard(position)} alt="star" className="w-full max-w-[400px]" />
            <div
                className={classNames("absolute -mt-1 w-full flex items-center justify-around px-6 font-bold text-2xl",
                    currentColor?.text,
                )}
            >
                <h1 className={classNames('pl-[1px] mt-1 prata-font',
                    currentColor?.textSize,
                    currentColor?.num,
                )} >
                    {position}
                </h1>
                <h1 className={classNames("flex-1 pl-8 uppercase", currentColor.fontSize)}>{data.department}</h1>
                <h1 className={classNames(currentColor.num)}>
                    {data.total_score}
                    <sub>pts</sub>
                </h1>
            </div>
        </div>
    );
}

export default index;
