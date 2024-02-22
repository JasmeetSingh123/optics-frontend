import { useEffect } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

import femaleModel from "../../../assets/images/female-specs.jpg";
import "./experience.scss";


export default function Experience() {
  return (
    <section className="w-full md:h-full bg-white" >
      <div className="relative w-full h-full flex flex-1 flex-col md:flex-row justify-center md:justify-start items-center md:items-center px-8 md:px-10 lg:px-12 xl:px-24" >
        <div className="w-full md:w-[75%] xl:w-[67%] z-20 flex md:block flex-col items-center mt-[5rem] md:pt-0" >
          <div className="w-full mb-6 md:mb-0" >
            <p className="uppercase app__landingpage-text text-[0.7rem] sm:text-[0.75rem] md:text-[0.75rem] lg:text-[0.8rem] xl:text-[0.875rem] text-[var(--color-lighter)]" >Now introducing</p>
            <h1 className="app__landingpage-text text-[2rem] sm:text-[2.75rem] md:text-[2.875rem] lg:text-[4rem] xl:text-[4.5rem] text-[var(--color-dark)] font-bold leading-[1.1] xl:leading-[1.15] tracking-tighter" >A personalized eyeware shopping experience</h1>
          </div>
          <div className="w-full z-10 md:hidden flex justify-center items-center" >
            <img src={femaleModel} alt="model-image" className="w-full h-full object-cover scale-x-[-1]" />
          </div>
          <div className="flex items-start justify-between mt-5 md:mt-0 md:block w-full md:w-auto" >
            <p className="app__landingpage-text text-start text-[var(--color-light)] text-[10px] xs:text-[12px] sm:text-[0.8rem] lg:text-[0.8rem] font-semibold w-1/2 xl:w-1/3 md:my-8" >Virtual try-on and frame recommendation <br className="hidden sm:block" /> technology for online, in-store and <br className="hidden sm:block" /> omnichannel eyeware retailer.</p>
            <div className="md:mt-5 flex flex-col md:flex-row items-start md:items-center md:justify-start justify-between gap-3 md:gap-6 w-[40%] sm:w-1/3 md:w-auto" >
              <Link to="comingsoon" className="app__landingpage-text text-white py-[0.5rem] xs:py-[0.6rem] lg:py-[0.7rem] xl:py-[0.75rem] px-3 sm:px-4 xl:px-6 bg-black rounded-full text-[0.77rem] lg:text-[0.8rem] xl:text-[0.85rem]" >Get Started</Link>
              <Link to="comingsoon" className=" flex items-center justify-center gap-1 sm:gap-2" >
                <p className="app__landingpage-text text-[var(--color-dark)] font-bold tracking-tighter text-[0.6rem] xs:text-[0.8rem] sm:text-[0.825rem] lg:text-[0.85rem] xl:text[1rem]" >See product demo</p>
                <IoIosArrowForward className="text-[var(--color-dark)] text-[0.7rem] xs:text-[0.75rem] sm:text-[0.8rem] lg:text-[0.85rem] xl:text-[1rem]" />
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute h-[90%] lg:h-[87%] w-1/2 right-0 bottom-0 z-10 hidden md:block" >
          <img src={femaleModel} alt="model-image" className="w-full h-full object-cover scale-x-[-1]" />
        </div>
      </div>
    </section>
  )
};

