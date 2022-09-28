import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    show: false,
}

export const searchSlice = createSlice({
  name: 'show',
  initialState,
  reducers: {
    toggleShowSearch: (state) => {
      state.show= !state.show
    },
  },
})

// Action creators are generated for each case reducer function
export const { toggleShowSearch } = searchSlice.actions

export default searchSlice.reducer