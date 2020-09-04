import { configureStore } from '@reduxjs/toolkit';
import reducers from './Containers/TodoList/reducers'

export default configureStore(reducers);
