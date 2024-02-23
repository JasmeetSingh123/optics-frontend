import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

import showcaseImage from "../../../assets/images/showcase.jpg";
import "./showcase.scss";


export default function Showcase() {
  return (
    <section className="relative w-full flex flex-1 justify-center items-center bg-white" >
      <div className="relative w-5/6 lg:w-3/4 py-8 sm:py-16" >
        <img src={showcaseImage} alt="showcase" className="w-full h-[500px] object-cover" />
        <div className="flex flex-col justify-center items-center mt-8 sm:mt-10 md:mt-12 text-center" >
          <h1 className="app__landing-showcase-text text-[1.2rem] sm:text-[1.5rem] md:text-[2rem] font-bold text-center lg:w-2/3 xl:w-1/2" >Change Specs, Change Vibe. Glasses that design your Personality.</h1>
          <p className="my-6 md:my-8 app__landing-showcase-text text-[var(--color-lighter)] text-[0.77rem] sm:text-[0.825rem] md:text-[1rem] lg:w-2/3 xl:w-1/2 px-1 md:px-0" >Premium acetate and lightweight titanium in a luxorious new multilayered construction. Find your style above our eyeglasses & sunglasses.</p>
          <Link to="gallery" className="flex items-center justify-center gap-3" >
            <p className="app__landing-showcase-text text-[var(--color-dark)] text-[0.77rem] sm:text-[0.825rem] md:text-[1rem] font-bold" >Shop the collection</p>
            <IoIosArrowForward className="text-[var(--color-dark)] text-[0.825rem] md:text-[1rem]" />
          </Link>
        </div>
      </div>
    </section>
  )
};

