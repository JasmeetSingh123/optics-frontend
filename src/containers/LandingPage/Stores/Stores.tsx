import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import payImage from "../../../assets/images/pay.jpg";
import "./stores.scss";


export default function Stores() {
  return (
    <section id='store-locations' className='w-full bg-white' >
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start w-full px-10 lg:px-16 py-10 mb-4 lg:mb-0 h-[30%]" >
        <h1 className="w-full md:w-[45%] lg:w-5/12 xl:w-1/4 text-[1.25rem] sm:text-[1.5rem] font-bold app__landing-stores-text text-center md:text-start" >Browse glasses online, or visit a store near you.</h1>
        <div className="w-[90%] xs:w-[85%] md:w-[45%] lg:w-[40%] xl:w-1/3 flex flex-col items-center md:items-start mt-4 md:mt-0" >
          <p className="app__landing-showcase-text text-[var(--color-lighter)] text-[0.75rem] sm:text-[0.75rem] md:text-[0.85rem] text-center md:text-start" >Ready to find your perfect pair of eyeglasses? Need help choosing some great contatc lenses? Is it time for you to get a eye exam? Then, look no further than your closest Optical Eyeware store.</p>
          <Link to="comingsoon" className="flex items-center justify-center gap-1 sm:gap-3 mt-4" >
            <p className="app__landing-stores-text text-[var(--color-dark)] font-bold text-[0.75rem] sm:text-[0.75rem] md:text-[0.85rem]" >Shop the collection</p>
            <IoIosArrowForward className="text-[var(--color-dark)] text-[0.75rem] sm:text-[0.75rem] md:text-[0.85rem]" />
          </Link>
        </div>
      </div>
      <div className="h-[70%]" >
        <img src={payImage} alt="pay" className="object-cover w-full h-full" />
      </div>
    </section>
  )
};

