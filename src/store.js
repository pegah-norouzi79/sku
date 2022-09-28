import { configureStore } from '@reduxjs/toolkit'
import newPostSlice from "../src/features/newPostSlice";
import searchSlice from "../src/features/searchSlice";
import userInformation from "../src/features/userInfo";
import tokenSlice from "../src/features/tokenSlice" 
export const store = configureStore({
  reducer: {
    newPost: newPostSlice,
    search:searchSlice,
    userInfo:userInformation,
    token:tokenSlice,
  },
})