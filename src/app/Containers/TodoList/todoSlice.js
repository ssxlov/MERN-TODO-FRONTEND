// import { createSlice } from '@reduxjs/toolkit';
// import axios from "axios";
// import {useState} from "react";
//
// export const initialState = {
//   tasks: [],  // task should have a format {id: unique_value, text: taks_text, checked: flag_show_if_task_completed (false by default) }
// };
// let nextTodoId = 0
// const user = localStorage.getItem('userId')
//
// export const todoSlice = createSlice({
//   name: 'todo',
//   initialState:[],
//   reducers: {
//     addTodo: {
//       reducer(state, action) {
//         const { id, text } = action.payload
//         axios
//             .post('http://localhost:4000/users/' + user + '/todos', {
//               _id: id,
//               title: text
//             })
//             .then(res => {
//               console.log(res.data)
//               //this.setState({items: res.data})
//               //state.setState({items: res.data})
//               console.log(res.data)
//               state.push(res.data)
//             })
//         console.log(state.items)
//         console.log(text)
//       },
//       prepare(text) {
//         return { payload: { text, id: nextTodoId++ } }
//       },
//
//
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
