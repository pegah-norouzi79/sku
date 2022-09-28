import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: {username:"",
    skills:[],
    projects:"",
    image:""
  },
}

export const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    userInformation:(state,action)=>{
      state.user=action.payload.user;
    },
    clearUserInformation:(state)=>{
      state.user={
        user: {username:"",
        skills:[],
        projects:"",
        image:""
      },
    };
    }
  },
})

// Action creators are generated for each case reducer function
export const {userInformation,clearUserInformation} = userInfoSlice.actions

export default userInfoSlice.reducer