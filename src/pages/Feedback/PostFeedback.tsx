import React, { useState } from 'react';
import axios from 'axios';
import { Navbar, Footer, WrapperFrame } from "../../containers";
import { motion, AnimatePresence } from "framer-motion";
import { MdClose } from "react-icons/md";

const NavItems = [ "Technology", "Demo", "About us", "Contact" ]



export default function PostFeedback(){
    const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false)

    const [rating,setRating]= useState<number>(1);
    const [name,setName] = useState<string>("");
    const [review,setReview]=useState<string>("");

    const handleRatingChange= (event: React.ChangeEvent<HTMLSelectElement>)=>{
        setRating(Number(event.target.value));
    };
    const handleReviewChange= (event: React.ChangeEvent<HTMLTextAreaElement>)=>{
        setReview(event.target.value);
    };
    const handleNameChange = (event: React.ChangeEvent<HTMLTextAreaElement>)=>{
        setName(event.target.value);
    };
    const handleSubmit=async(event:React.FormEvent)=>{
        event.preventDefault();
        try{
            await axios.post('https://pothiwalopticals.onrender.com/api/user/feedback',{name,rating,review})
            setName('');
            setRating(1);
            setReview('');
        }
        catch(e){
            console.error(e)
        }
    };

    return(

    <>
      <WrapperFrame>
        <main className="app__landing-page-content relative w-full h-full bg-[var(--color-lightest)] overflow-y-scroll" >
          <Navbar setIsMenuVisible={setIsMenuVisible} />
          <AnimatePresence>
            {isMenuVisible && (
              <>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ type: "spring", duration: 0.5 }} className="absolute top-0 left-0 w-screen h-screen cursor-pointer backdrop-blur-md z-40" onClick={() => setIsMenuVisible(false)} />
                <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0, opacity: 0 }} transition={{ type: "spring", duration: 0.5 }} className="bg-[var(--color-light)] flex items-start justify-between absolute top-5 right-5 w-[250px] sm:w-[300px] p-5 rounded-lg lg:hidden z-50" >
                  <div className="">
                    {NavItems.map((item, i) => (
                      <div key={i.toString()} className="cursor-pointer mb-5" >
                        <h4 className="text-[1.25rem] font-semibold text-white hover:scale-105 transition-all ease-in-out duration-300" >{item.toString()}</h4>
                      </div>
                    ))}
                    <button className="app__navbar-button border border-[#FFF] rounded-full text-[0.85rem] font-semibold text-white mt-5 px-5 py-2 hover:text-black hover:shadow-[inset_13rem_0_0_0] hover:shadow-white duration-[400ms,700ms] transition-[color,box-shadow]" >Get Started</button>
                  </div>
                  <MdClose color="#FFF" size={22} className="cursor-pointer" onClick={() => setIsMenuVisible(false)} />
                </motion.div>
              </>
            )}
          </AnimatePresence>

        

        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-20">
            <h1 className="block mb-2 text-lg font-medium">Please provide your valuable Feedback</h1>
            <div className="mb-4">

            <label className="block mb-2 text-lg font-medium" htmlFor="rating">
                Rating:
                <select value={rating} onChange={handleRatingChange} id="rating"
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
                >
                <option value={1}>1 </option>
                <option value={2}>2 </option>
                <option value={3}>3 </option>
                <option value={4}>4 </option>
                <option value={5}>5 </option>
                </select>
            </label>
            </div>
            <div className="mb-4">

            <label className="block mb-2 text-lg font-medium" htmlFor="review">
                Review:
                <textarea value={review} onChange={handleReviewChange} id="review"
          className="border border-gray-300 rounded-md px-3 py-2 w-full" />
            </label>
            </div>
            <div className="mb-4">

            <label className="block mb-2 text-lg font-medium" htmlFor="name">
                Name:
                <textarea value={name} onChange={handleNameChange} id="name"
          className="border border-gray-300 rounded-md px-3 py-2 w-full" />
            </label>
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md">
                Submit Feedback
            </button>
        </form>

        <Footer />

        </main>
        </WrapperFrame>

        </>
    );


}