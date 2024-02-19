import { motion, AnimatePresence } from "framer-motion";

interface ILeftToRightAnimation {
  children: React.ReactNode;
  className: string;
}

const LeftToRightAnimation = ({ children, className }: ILeftToRightAnimation) => {
  return (
    <AnimatePresence>
      <motion.div
        className={className}
        initial={{ opacity: 0, x: -100 }} // Initial position: fully transparent and shifted 100px to the left
        animate={{ opacity: 1, x: 0 }} // Animation: fade in and move to the original position
        exit={{ opacity: 0, x: 100 }} // Exit animation: fade out and move 100px to the right before exiting
        transition={{ duration: 0.5 }} // Animation duration
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default LeftToRightAnimation;
