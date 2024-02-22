import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

import model2 from "../../../assets/images/model-2.png";
import "./qna.scss";


export default function Qna() {
  return (
    <section id='qna' className='w-full flex flex-col-reverse md:flex-row justify-between items-end pt-20' >
      <div className="md:w-[45%] h-full flex justify-end items-end" >
        <img src={model2} alt="" className="w-full object-cover" />
      </div>
      <div className="md:w-1/2 h-full flex flex-col items-center md:items-start my-6 px-4 sm:px-8 md:px-0" >
        <h1 className="xl:w-2/3 app__landing-qna-text font-bold text-[1.15rem] sm:text-[1.5rem] lg:text-[1.85rem] text-[var(--color-dark)] text-center md:text-start" >Have some burning questions or need our expert advice?</h1>
        <p className="w-[90%] sm:w-2/3 app__landing-qna-text text-[var(--color-dark)] font-bold my-3 md:my-6 text-center md:text-start text-[0.77rem] sm:text-[1rem]" >{"We're avialable by phone (+917620733998) and chat every day from 9a.m.-10p.m. IST."}</p>
        <Link to="comingsoon" className="flex items-center justify-center gap-2 sm:gap-3 mb-8 md:mt-4" >
          <p className="app__landing-qna-text text-[var(--color-dark)] font-bold text-[0.77rem] md:text-[1rem]" >Visit help center</p>
          <IoIosArrowForward className="text-[var(--color-dark)] text-[0.77rem] md:text-[1rem]" />
        </Link>
      </div>
    </section>
  )
};

