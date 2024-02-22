import { ReactNode } from "react";
import "./wrapperframe.scss";


export interface IWrapperFrame {
  children: ReactNode;
}

export default function WrapperFrame({ children }: IWrapperFrame): JSX.Element {
  const today = new Date() // yyyy-mm-dd

  return (
    <div className="w-full h-full">
      <div className="app__landing-page h-screen w-screen flex-1" >
        <div className="w-full h-full flex items-center justify-center" >
          <div className="w-[7%] sm:w-[5%] md:w-[5%] lg:w-[4%] xl:w-[3%] h-full bg-[var(--color-dark)]" />
          <div className="w-[86%] sm:w-[90%] md:w-[90%] lg:w-[92%] xl:w-[94%] h-full" >
            <div className="h-[7%] flex items-center justify-between w-full bg-[var(--color-dark)]" >
              <p className="text-[0.6rem] sm:text-[0.7rem] lg:text-[0.75rem] font-semibold text-[var(--color-lighter)]" >Weekly <br /> Design</p>
              <a href="/">
                <p className="text-[0.6rem] sm:text-[0.7rem] lg:text-[0.75rem] font-semibold text-[var(--color-lighter)]" >Devente Ebison</p>
              </a>
              <p className="text-[0.6rem] sm:text-[0.7rem] lg:text-[0.75rem] font-semibold text-[var(--color-lighter)]" >{`${today.toLocaleString('default', { month: 'short' })} ${new Date().getDate()}`} <br />~{`${new Date().getFullYear()}`}</p>
            </div>
            <div className="w-full h-[86%]" >
              {children}
            </div>
            <div className="h-[7%] flex items-center justify-between bg-[var(--color-dark)]" >
              <a href="https://realmwave.netlify.app/" target="_blank" rel="noreferrer" >
                <p className="text-[0.6rem] sm:text-[0.7rem] lg:text-[0.75rem] font-bold text-[var(--color-lighter)]" >Code by Sam</p>
              </a>
              <a href="https://realmwave.netlify.app/" target="_blank" rel="noreferrer" >
                <p className="text-[0.6rem] sm:text-[0.7rem] lg:text-[0.75rem] font-bold text-[var(--color-lighter)]" >Developed by RealmWave Software</p>
              </a>
            </div>
          </div>
          <div className="w-[7%] sm:w-[5%] md:w-[5%] lg:w-[4%] xl:w-[3%] h-full bg-[var(--color-dark)]" />
        </div>
      </div>
    </div>
  )
};


