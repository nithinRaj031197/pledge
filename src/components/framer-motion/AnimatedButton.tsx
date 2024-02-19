import { motion } from "framer-motion";

interface AnimatedButtonProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ children, className }) => {
  return (
    <motion.button
      className={className}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      {children}
    </motion.button>
  );
};

export default AnimatedButton;
