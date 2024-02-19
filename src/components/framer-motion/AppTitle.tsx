import { motion, AnimatePresence } from "framer-motion";

function AppTitle() {
  return (
    <AnimatePresence>
      <motion.div
        className="text-5xl ml-5 font-bold"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -100, opacity: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        Radian Fit
      </motion.div>
    </AnimatePresence>
  );
}

export default AppTitle;
