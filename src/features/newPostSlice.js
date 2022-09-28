import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    show: false,
}

export const newPostSlice = createSlice({
  name: 'show',
  initialState,
  reducers: {
    toggleShowAddNewPost: (state) => {
      state.show= !state.show
    },
  },
})

// Action creators are generated for each case reducer function
export const { toggleShowAddNewPost } = newPostSlice.actions

export default newPostSlice.reducer