import { Routes, Route } from "react-router-dom";

import { Landing, MasterLoading, Gallery } from "../pages";


export default function AppNavigation() {

  return (
    <>
      <Route path="" element={<Landing />} />
      <Route path="gallery" element={<Gallery />} />
    </>
    //<div className="w-full h-full" >
    //  {/*<MasterLoading />*/}
    //</div>
  )
};

