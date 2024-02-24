import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: 'work',
  email:'tomma@gmail.com',
  userTasks: [],
}

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    
  },
})

// Action creators are generated for each case reducer function
// export const {  } = counterSlice.actions

export default userSlice.reducer ;