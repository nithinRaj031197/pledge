import { motion, AnimatePresence } from "framer-motion";

interface IRightToLeftAnimation {
  children: React.ReactNode;
  className?: string;
}

const RightToLeftAnimation = ({ children, className }: IRightToLeftAnimation) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        className={className}
        initial={{ opacity: 0, x: 100 }} // Initial position: fully transparent and shifted 100px to the right
        animate={{ opacity: 1, x: 0 }} // Animation: fade in and move to the original position
        exit={{ opacity: 0, x: -100 }} // Exit animation: fade out and move 100px to the left before exiting
        transition={{ duration: 0.5 }} // Animation duration
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default RightToLeftAnimation;
