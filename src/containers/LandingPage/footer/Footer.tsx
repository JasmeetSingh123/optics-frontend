import { Link } from "react-router-dom";
import { BsFillRecordCircleFill, BsTwitter, BsYoutube } from "react-icons/bs";
import { HiArrowNarrowRight } from "react-icons/hi";

import "./footer.scss";


export default function Footer() {
  return (
    <footer className="w-full bg-[var(--color-dark)] pt-20 pb-8" >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end" >
        <h1 className="app__landing-footer-text text-white font-bold text-[1.2rem] sm:text-[1.5rem] md:text-[1.75rem] lg:text-[2rem] w-full md:w-1/2 xl:w-1/3" >Get the inside scoop on new frames, events and more.</h1>
        <form action="" className="flex flex-col justify-center items-start w-3/4 sm:w-1/2 md:w-[40%] lg:w-1/3 xl:w-1/4 mt-8 md:mt-0" >
          <div className="flex justify-between items-center w-full" >
            <label htmlFor="email" id="email" className="app__landing-footer-text text-white font-bold text-[0.8rem] lg:text-[0.85rem]" >Enter your email</label>
            <button type="submit">
              <HiArrowNarrowRight color="#FFFFFF" className="text-[0.9rem] lg:text-[1.25rem]" />
            </button>
          </div>
          <input type="email" name="email" id="email-input" className="w-full bg-transparent border-b-2 border-[var(--color-light)] app__landing-footer-text text-white text-[0.85rem] sm:text-[0.875rem] md:text-[1rem] font-semibold pt-[0.5rem] outline-0" />
        </form>
      </div>
      <article className="mt-20" >
        <Link to="/comingsoon" className="flex items-center gap-4 cursor-pointer" >
          <BsFillRecordCircleFill size={20} color={'#FFF'} />
          <h1 className="app__landing-footer-text text-white font-bold text-[1rem]" >Optical Eyeware</h1>
        </Link> 
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-3 xl:gap-5 mt-8" >
          <div className="flex flex-col sm:items-center" >
            <p className="app__landing-footer-text text-[var(--color-light)] text-[0.7rem] md:text-[0.75rem]" >A personalized eyeware shopping experience</p>
          </div>
          <div className="flex flex-col sm:items-center" >
            <div>
              <p className="app__landing-footer-text text-[var(--color-light)] text-[0.7rem] md:text-[0.75rem]" >Find your perfect pair of sunglasses</p>
              <ul className="mt-4" >
                <li className="mb-1" >
                  <Link to="/comingsoon" className="app__landing-footer-text font-bold text-white text-[0.75rem] sm:text-[0.8rem] md:text-[0.85rem]" >How to buy glasses online</Link> 
                </li>
                <li className="mb-1" >
                  <Link to="/comingsoon" className="app__landing-footer-text font-bold text-white text-[0.75rem] sm:text-[0.8rem] md:text-[0.85rem]" >Try on frames virtually</Link> 
                </li>
                {/*<li className="mb-1" >
                  <Link href="" className="app__landing-footer-text font-bold text-white text-[0.85rem]" >Use our tools to get your ideal fit</Link> 
                </li>*/}
                <li className="mb-1" >
                  <Link to="/comingsoon" className="app__landing-footer-text font-bold text-white text-[0.75rem] sm:text-[0.8rem] md:text-[0.85rem]" >Choosing your lense type</Link> 
                </li>
                {/*<li className="mb-1" >
                  <Link href="" className="app__landing-footer-text font-bold text-white text-[0.85rem]" >Benefits of Buying Eyeware Online</Link> 
                </li>*/}
              </ul>
            </div>
          </div>
          <div className="flex flex-col sm:items-center pt-8 sm:pt-0" >
            <p className="app__landing-footer-text text-[var(--color-light)] text-[0.7rem] md:text-[0.75rem]" >Shop with confidence</p>
            <ul className="mt-4" >
              <li className="mb-1" >
                <Link to="/comingsoon" className="app__landing-footer-text font-bold text-white text-[0.75rem] sm:text-[0.8rem] md:text-[0.85rem] my-2" >Track Your Order</Link> 
              </li>
              <li className="mb-1" >
                <Link to="/comingsoon" className="app__landing-footer-text font-bold text-white text-[0.75rem] sm:text-[0.8rem] md:text-[0.85rem]" >Our Promise</Link> 
              </li>
              <li className="mb-1" >
                <Link to="/comingsoon" className="app__landing-footer-text font-bold text-white text-[0.75rem] sm:text-[0.8rem] md:text-[0.85rem]" >Return Policy</Link> 
              </li>
              <li className="mb-1" >
                <Link to="/comingsoon" className="app__landing-footer-text font-bold text-white text-[0.75rem] sm:text-[0.8rem] md:text-[0.85rem]" >Contact Us</Link> 
              </li>
              <li className="mb-1" >
                <Link to="/comingsoon" className="app__landing-footer-text font-bold text-white text-[0.75rem] sm:text-[0.8rem] md:text-[0.85rem]" >Help Center</Link> 
              </li>
            </ul>
          </div>
          <div className="flex flex-col md:items-center pt-8 md:pt-0" >
            <p className="app__landing-footer-text text-[var(--color-light)] text-[0.7rem] md:text-[0.75rem]" >Oue dellegence</p>
            <ul className="mt-4" >
              <li className="mb-1" >
                <Link to="/comingsoon" className="app__landing-footer-text font-bold text-white text-[0.75rem] sm:text-[0.8rem] md:text-[0.85rem] my-2" >Our Story</Link> 
              </li>
              <li className="mb-1" >
                <Link to="/comingsoon" className="app__landing-footer-text font-bold text-white text-[0.75rem] sm:text-[0.8rem] md:text-[0.85rem]" >Careers</Link> 
              </li>
              <li className="mb-1" >
                <Link to="/comingsoon" className="app__landing-footer-text font-bold text-white text-[0.75rem] sm:text-[0.8rem] md:text-[0.85rem]" >Our Mission</Link> 
              </li>
            </ul>
          </div>
          <div className="flex flex-col lg:items-center pt-8 lg:pt-0" >
            <p className="app__landing-footer-text text-[var(--color-light)] text-[0.7rem] md:text-[0.75rem]" >Follow us</p>
            <div className="flex items-center gap-4 mt-4" >
              <Link to="/comingsoon" >
                <BsYoutube color="#FFFFFF" size={18} />
              </Link> 
              <Link to="/comingsoon" >
                <BsTwitter color="#FFFFFF" size={18} />
              </Link> 
            </div>
          </div>
        </div>
        <div className="mt-24" >
          <p className="app__landing-footer-text text-[var(--color-light)] text-[0.675rem] sm:text-[0.7rem] md:text-[0.75rem]" >Copyright &#169; Optical Eyeware All rights reserved</p>
        </div>
      </article>
    </footer>
  )
};

