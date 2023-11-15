import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 'glowna',
}

export const counterSlice = createSlice({
  name: 'position',
  initialState,
  reducers: {
    set: (state, value) => {
      state.value = value.payload
    }
  },
})


export const { set } = counterSlice.actions

export default counterSlice.reducer