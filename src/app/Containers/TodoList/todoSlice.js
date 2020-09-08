// import { createSlice } from '@reduxjs/toolkit';
// import axios from "axios";
// import {useState} from "react";
//
// export const initialState = {
//   todoList: [],
// };
// let nextTodoId = 0
//
// export const todoSlice = createSlice({
//   name: 'todo',
//   initialState:[],
//   reducers: {
//     addTodo: {
//       reducer(state, action) {
//         const {text, id} = action.payload
//         console.log(state.items)
//         console.log(text, id)
//       },
//       prepare(text, id) {
//         return { payload: { text, id: nextTodoId++ } }
//       },
//     },
//     remove: (state, action, index) => {
//       const { id, text } = action.payload
//       state.splice(state.findIndex(i => i.id === id), 1)
//     },
//     markAsChecked: (state, action) => {
//       return state.map (todo => todo.id === action.payload.id ? {...todo, completed: !todo.completed} : todo)
//     },
//     clearCompleted: (state) => {
//       return state.filter(todo => !todo.completed === true)
//     },
//     checkAll: (state) => {
//       console.log(state.map(todo => !todo.completed === true))
//       return state.map(todo => todo ? {...todo, completed: !todo.completed} : todo)
//     }
//   },
// });
//
//
// export const actions = todoSlice.actions;
//
//
// export default todoSlice.reducer
