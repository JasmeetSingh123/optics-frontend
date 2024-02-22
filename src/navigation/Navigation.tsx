import { Routes, Route } from "react-router-dom";
import { ComingSoon, Gallery, Landing, MasterLoading, PageNotFound } from "../pages";

import AppNavigation from "./AppNavigation";
import AuthNavigation from "./AuthNavigation";
import Login from "../pages/Auth/Login/Login";
import PostFrames from "../pages/Frames/PostFrames/PostFrames";
import PostFeedback from "../pages/Feedback/PostFeedback";
import FeedbackPage from "../pages/Feedback/FeedbackPage";
import DelFrame from "../pages/Frames/DelFrame/DelFrame";
import Register from "../pages/Auth/Register";


export default function Navigation() {
  return (
    <div className="w-full h-full" >
      <Routes>
        <Route path="" >
          <Route path="" element={<Landing />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="delete" element={<DelFrame />} />
          <Route path="addproduct" element={<PostFrames />} />
          <Route path="addfeedback" element={<PostFeedback />} />
          <Route path="feedback" element={<FeedbackPage />} />
        </Route>
        <Route path="auth" >
          <Route path="" element={<AuthNavigation />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          
        </Route>
        <Route path="comingsoon" element={<ComingSoon />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  )
};

