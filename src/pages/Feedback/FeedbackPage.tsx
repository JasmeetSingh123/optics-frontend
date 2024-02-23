import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Footer, Navbar, WrapperFrame } from '../../containers';
import { motion,AnimatePresence } from 'framer-motion';
import { MdClose } from 'react-icons/md';
import { Link } from 'react-router-dom';

const NavItems = [ "Technology", "Demo", "About us", "Contact" ]


interface Feedback {
  _id: string;
  name: string;
  rating: number;
  review: string;
  createdAt: string;
}
export default function FeedbackPage(){
    const [feedback, setFeedback] = useState<Feedback[]>([]);
    const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false)


  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const response = await axios.get('https://pothiwalopticals.onrender.com/api/user/feedback');
        setFeedback(response.data.data);
      } catch (error) {
        console.error('Error fetching feedback:', error);
      }
    };

    fetchFeedback();
  }, []);

  return (
    <>
    {/* <div>
      {feedback.map((item) => (
        <div key={item._id}>
          <p>Name:{item.name}</p>
          <p>Rating: {item.rating}</p>
          <p>Review: {item.review}</p>
          <p>Date: {new Date(item.createdAt).toLocaleDateString()}</p>
        </div>
      ))}
    </div> */}



   



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

        
          <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 my-10">Feedback List</h2>
      <Link to='/addfeedback'>
      <button className="app__navbar-button border border-[#000] rounded-full text-[0.85rem] font-semibold text-black px-5 py-2 hover:text-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-black duration-[400ms,700ms] transition-[color,box-shadow]" >Give Review</button>

      </Link>


      {feedback.length === 0 ? (
        <p>No feedback available.</p>
      ) : (
        <div>
          {feedback.map((feedback) => (
            <div key={feedback._id} className="bg-gray-100 p-4 mb-4 rounded">
              <p className="text-lg font-semibold">{feedback.name}</p>
              <p className="text-gray-600">Rating: {feedback.rating}</p>
              <p className="text-gray-600">Review: {feedback.review}</p>
              <p className="text-gray-600">Date: {feedback.createdAt}</p>
            </div>
          ))}
        </div>
      )}
    </div>
        

        <Footer />

        </main>
        </WrapperFrame>
      </>
  );
}