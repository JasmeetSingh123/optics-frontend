import "./masterloading.scss";


export default function MasterLoading() {
  return (
    <div className="w-full h-screen flex flex-1 justify-center items-center absolute top-0 left-0 z-50 overflow-hidden parent" >
      <div className="w-[10rem] sm:w-[16rem] aspect-square animation-container" ></div>
    </div>
  )
};

