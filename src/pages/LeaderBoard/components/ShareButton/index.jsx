import { motion } from 'framer-motion';
import { Share2 } from 'lucide-react'; // Assuming Share2 is an imported component

function ShareNowButton() {
  // Handle the hover or click behavior
  const handleHover = () => {
    // Randomize the position to simulate the "moving away" effect
    return {
      x: Math.random() * 300 - 150, // random x position between -150 and 150
      y: Math.random() * 300 - 150, // random y position between -150 and 150
    };
  };

  return (
    <motion.div
      className="relative flex items-end justify-end max-w-[350px] w-full mx-auto z-20 select-none"
    >
      <motion.span
        className="border border-black rounded-full text-xs leading-3 py-1.5 px-3 flex items-center justify-center gap-2 cursor-pointer"
        whileHover={handleHover}  // Move away when hovered
        whileTap={handleHover}  // Move away when clicked
        animate={{
          x: 0,  // Keep the initial position at x=0 and y=0
          y: 0
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
        }}
      >
        <Share2 size={15} fill="black" />
        Share Now
      </motion.span>
    </motion.div>
  );
}

export default ShareNowButton;
