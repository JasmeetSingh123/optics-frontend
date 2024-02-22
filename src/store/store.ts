import { configureStore } from "@reduxjs/toolkit";

import { masterLoadingSlice } from "./slices";


export default configureStore({
  reducer: masterLoadingSlice,
});

