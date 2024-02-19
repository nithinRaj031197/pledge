import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

interface IScrollAnimation {
  children: React.ReactNode;
  className?: string;
}

const ScrollAnimation = ({ children, className }: IScrollAnimation) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = ref.current;
      if (!element) return;

      const scrollPosition = window.scrollY;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const distanceFromRight = window.innerWidth - (elementPosition + element.offsetWidth);

      if (scrollPosition > elementPosition && distanceFromRight > 0) {
        controls.start({ x: -distanceFromRight, opacity: 1 }); // Move element to the left when it becomes visible
      } else {
        controls.start({ x: window.innerWidth, opacity: 0 }); // Move element out of view
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <motion.div
      className={className}
      ref={ref}
      initial={{ x: window.innerWidth, opacity: 0 }} // Initial position: outside of the window with opacity 0
      animate={controls} // Apply animation controls
      transition={{ duration: 0.5 }} // Animation duration
      style={{ position: "fixed", top: "50%", right: 0, transform: "translateY(-50%)" }} // Adjust position as needed
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
