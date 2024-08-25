import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem('tasks')) || [];

export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload)
        },
        deleteTask: (state, action) => {
            return state.filter(task => task.id !== action.payload)
        },
        completeTask: (state, action) => {
            const task = state.find( task => task.id === action.payload)
            if(task) task.isCompleted = !task.isCompleted
        }
    }
})

export const { addTask, deleteTask, completeTask } = taskSlice.actions
export default taskSlice.reducer;