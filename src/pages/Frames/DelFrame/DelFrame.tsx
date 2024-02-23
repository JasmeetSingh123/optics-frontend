import "../../Gallery/gallery.scss"

import { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";

import { Navbar, Footer, WrapperFrame } from "../../../containers";

import "../../LandingPage/landing.scss";
import Frames from "../../../containers/GalleryPage/FramesForDel";
import FramesForDel from "../../../containers/GalleryPage/FramesForDel";

const NavItems = ["Technology", "Demo", "About us", "Contact"];

interface Product {
  //category: string;
  _id: string;
  url: string;
  public_id: string;
  description: string;
  shape: string;
  price?: string;
}

export default function DelFrame(): JSX.Element {
  const [showMasterLoading, setShowMasterLoading] = useState<boolean>(true);
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [page,setPage]=useState(0)

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowMasterLoading(false)
  //   }, 2000)

  //   return () => clearTimeout(timer)
  // }, [])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Make a GET request to your backend retrieve endpoint
        const response = await axios.get(
          `https://pothiwalopticals.onrender.com/api/admin/product/${page}`
        );

        setProducts(response.data.data);
        //console.log(response.data.data);
      } catch (error) {
        console.error("Error retrieving products:", error);
        // Handle the error gracefully
      }
    };

    fetchProducts();
  }, [page]);

  return (
    <WrapperFrame>
      <main className="app__landing-page-content relative w-full h-full bg-[var(--color-lightest)] overflow-y-scroll">
        <Navbar setIsMenuVisible={setIsMenuVisible} />
        <AnimatePresence>
          {isMenuVisible && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="absolute top-0 left-0 w-screen h-screen cursor-pointer backdrop-blur-md z-40"
                onClick={() => setIsMenuVisible(false)}
              />
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="bg-[var(--color-light)] flex items-start justify-between absolute top-5 right-5 w-[250px] sm:w-[300px] p-5 rounded-lg lg:hidden z-50"
              >
                <div className="">
                  {NavItems.map((item, i) => (
                    <div key={i.toString()} className="cursor-pointer mb-5">
                      <h4 className="text-[1.25rem] font-semibold text-white hover:scale-105 transition-all ease-in-out duration-300">
                        {item.toString()}
                      </h4>
                    </div>
                  ))}
                  <button className="app__navbar-button border border-[#FFF] rounded-full text-[0.85rem] font-semibold text-white mt-5 px-5 py-2 hover:text-black hover:shadow-[inset_13rem_0_0_0] hover:shadow-white duration-[400ms,700ms] transition-[color,box-shadow]">
                    Get Started
                  </button>
                </div>
                <MdClose
                  color="#FFF"
                  size={22}
                  className="cursor-pointer"
                  onClick={() => setIsMenuVisible(false)}
                />
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* <Frames /> */}
        <div className="grid grid-cols-3 gap-10 m-5 px-5 py-20 ">
          {products.map((product) => (
            //
            <FramesForDel product={product} />
          ))}
        </div>
      
        <button 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full "
        onClick={()=>{setPage(page-1)}}>
          prev
        </button>
        <button 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full float-right"
        onClick={()=>{setPage(page+1)}}>
          next
        </button>
        

        {/* Footer */}
        <Footer />
      </main>
    </WrapperFrame>
  );
}

