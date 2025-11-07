import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: 1, name: "Melinda", score: 85, passed: true },
  { id: 2, name: "Laela", score: 60, passed: false },
]

const studentSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {
    addStudent: (state, action) => {
      const newStudent = {
        id: Date.now(),
        name: action.payload.name,
        score: action.payload.score,
        passed: action.payload.score >= 70
      }
      state.push(newStudent)
    },
    deleteStudent: (state, action) => {
      return state.filter(student => student.id !== action.payload)
    },
    toggleStatus: (state, action) => {
      const s = state.find(st => st.id === action.payload)
      if (s) s.passed = !s.passed
    }
  }
})

export const { addStudent, deleteStudent, toggleStatus } = studentSlice.actions
export default studentSlice.reducer
