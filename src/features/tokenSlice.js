import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    token: " ",
}

export const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setToken: (state,action) => {
      state.token= action.payload.token;
    },
    clearToken: (state,action) => {
        state.token= null;
      },
  },
})

// Action creators are generated for each case reducer function
export const { setToken, clearToken } = tokenSlice.actions

export default tokenSlice.reducer