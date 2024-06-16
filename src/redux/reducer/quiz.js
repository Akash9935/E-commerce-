import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data:{
    firstName:"3", lastName:"33", email:"333"
  }
  
}

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    addDdetails: (state, action) => {
      state.data = { firstName: action.payload.firstName ,  lastName: action.payload.lastName ,  email: action.payload.email   }
    },
    
  },
})

// Action creators are generated for each case reducer function
export const {  addDdetails } = quizSlice.actions

export default quizSlice.reducer