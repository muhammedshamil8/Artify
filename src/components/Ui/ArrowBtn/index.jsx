import { ArrowLeft, ArrowRight } from 'lucide-react';

const ArrowBtn = ({ direction, onClick }) => {
    return (
        <div onClick={onClick} className='border-2 border-black bg-white rounded-full w-fit h-fit flex items-center justify-center p-1 cursor-pointer'>
            <div className='bg-black rounded-full'>
                {direction === 'left' ? (
                    <ArrowLeft size='20' color='white' className='stroke-[3px] p-[3px] m-[3px]' />
                ) : (
                    <ArrowRight size='20' color='white' className='stroke-[4px] p-[3px] m-[3px]' />
                )}
            </div>
        </div>
    );
};

export default ArrowBtn;
