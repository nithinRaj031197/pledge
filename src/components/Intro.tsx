import { FaPlay } from "react-icons/fa";
import { useThemeContext } from "../context/useThemeContext";
import LeftToRightAnimation from "./framer-motion/LeftToRight";
import RightToLeftAnimation from "./framer-motion/RightToLeft";

const Intro = () => {
  const { isDarkTheme } = useThemeContext();
  return (
    <div className=" mt-16 flex py-4 px-10">
      <div className="flex-1 p-3 ml-10">
        <p>Let's Make Healthy Happen</p>
        <LeftToRightAnimation className="text-[5rem] font-bold">Your Health Matters</LeftToRightAnimation>
        <p className="text-[2rem]">Join The Pledge</p>
        <p className="text-[2rem]">That Cares</p>
        <div className="flex items-center gap-3 my-10">
          <button className="bg-blue-700 text-white p-3 rounded-full tracking-wider w-[10rem]">Get Started</button>
          <button className="bg-green-600 rounded-full p-4 shadow-lg">
            <FaPlay />
          </button>
          <p className="text-sm font-medium">How it works</p>
        </div>
        <p className="text-sm text-gray-500">
          Already a member? <span className={`${isDarkTheme ? "text-white " : "text-black "} ml-3 font-bold`}>Sign in.</span>
        </p>
      </div>
      <div className="flex-1 relative">
        <img src="/find_your_fire.png" />
        <div className="absolute right-0 top-[30%]">
          <RightToLeftAnimation className="text-blue-500 text-[5rem] font-bold mr-36">FIND</RightToLeftAnimation>
          <RightToLeftAnimation className="text-blue-500 text-[5rem] font-bold mr-0">YOUR</RightToLeftAnimation>
          <RightToLeftAnimation className="text-blue-500 text-[5rem] font-bold mr-36">FIRE</RightToLeftAnimation>
        </div>
      </div>
    </div>
  );
};

export default Intro;
