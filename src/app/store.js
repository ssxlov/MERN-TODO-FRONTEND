import { configureStore } from '@reduxjs/toolkit';
import todo from './Containers/TodoList/todoSlice'

export default configureStore({
  reducer: {
    todo
  },
});
