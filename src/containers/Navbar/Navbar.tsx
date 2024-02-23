import { useState } from "react";
import { NavLink } from "react-router-dom";
import { BsFillRecordCircleFill } from "react-icons/bs";
import { CgMenu } from "react-icons/cg";

import "./navbar.scss";

interface INavbarProps {
  setIsMenuVisible: (arg: boolean) => void
}


const NavItems = [ "About us", "Collections", "Feedback", "Contact" ]
const  LinkItems = ["/comingsoon","/gallery","/feedback","/comingsoon"]

export default function Navbar({ setIsMenuVisible }: INavbarProps) {

  return (
    <nav className="app__navabr-nav absolute left-0 top-0 w-full px-6 md:px-10 lg:px-12 xl:px-[6.75rem] py-4 z-40" >
      <div className="flex items-center justify-between w-full" >
        <div className="app__navnar-brand flex items-center gap-4">
          <BsFillRecordCircleFill size={22} color={'#000'} className="cursor-pointer" />
          <NavLink to="/" >
            <h3 className="app__navbar-brand-text text-[0.85rem] font-semibold text-black cursor-pointer" >Pothiwal Opticals</h3>
          </NavLink>
        </div>
        <div className="app__navnar-items hidden lg:flex items-center justify-center gap-8 xl:gap-16">
          {NavItems.map((item, i) => (
            <NavLink key={i.toString()} to={LinkItems[i]} >
              <div className="app__navbar-item cursor-pointer" >
                <h4 className="text-[0.85rem] font-semibold text-black hover:scale-110 transition-all ease-in-out duration-300" >{item.toString()}</h4>
              </div>
            </NavLink>
          ))}
          <NavLink to="/comingsoon" >
            <button className="app__navbar-button border border-[#000] rounded-full text-[0.85rem] font-semibold text-black px-5 py-2 hover:text-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-black duration-[400ms,700ms] transition-[color,box-shadow]" >Get Started</button>
          </NavLink>
        </div>
        <div className="lg:hidden" >
          <CgMenu color="#000" size={27} className="cursor-pointer" onClick={() => setIsMenuVisible(true)} />
          {/*{isMenuVisible && (
            <div className="bg-[var(--color-light)] absolute w-[1/2] lg:hidden" >
              <div className="app__navnar-items gap-12 xl:gap-16">
                {NavItems.map(item => (
                  <div className="app__navbar-item cursor-pointer" >
                    <h4 className="text-[0.85rem] font-semibold text-white hover:scale-110 transition-all ease-in-out duration-300" >{item.toString()}</h4>
                  </div>
                ))}
                <button className="app__navbar-button border border-[#FFF] rounded-full text-[0.85rem] font-semibold text-white px-5 py-2 hover:text-black hover:shadow-[inset_13rem_0_0_0] hover:shadow-white duration-[400ms,700ms] transition-[color,box-shadow]" >Get Started</button>
              </div>
            </div>
          )}*/}
        </div>
      </div>
    </nav>
  )
};

