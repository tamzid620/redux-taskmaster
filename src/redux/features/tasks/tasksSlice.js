import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const tasksSlice = createSlice({
  name: 'tasksSlice',
  initialState,
  reducers: {},
}) ;

export default tasksSlice.reducer