import { motion } from "framer-motion";
import AppTitle from "./framer-motion/AppTitle";
import AnimatedButton from "./framer-motion/AnimatedButton";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { useThemeContext } from "../context/useThemeContext";

const Navbar = () => {
  const { isDarkTheme, toggleTheme } = useThemeContext();
  return (
    <div className={`flex justify-between h-16 items-center w-full fixed top-0 ${isDarkTheme ? "bg-black" : "bg-white"}`}>
      <AppTitle />
      <div className="flex items-center gap-10">
        <div onClick={toggleTheme} className="text-2xl cursor-pointer">
          {!isDarkTheme ? <MdDarkMode color="#FFD700" /> : <MdLightMode color="white" />}
        </div>
        <div className="flex gap-10 mr-5 items-center">
          <AnimatedButton className={` ${isDarkTheme ? "text-gray-400 hover:text-gray-200" : "text-black hover:text-gray-500"}`}>
            Login
          </AnimatedButton>
          <AnimatedButton className="bg-gradient-to-tr from-[#00CCFF] to-[#0099FF] p-[0.4rem] rounded-xl text-gray-200">
            Start for Free
          </AnimatedButton>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
