import axios from 'axios'
import {
    ADD_TODO_SUCCESS,
    ADD_TODO_FAILURE,
    ADD_TODO_STARTED,
    DELETE_TODO,
    TOGGLE_TODO,
    GET_TODOS
} from '../actions/types';

export const user = localStorage.getItem('userId')

export const getTodos = todo => ({
    type: GET_TODOS,
    payload: {
        ...todo
    }
})
export const addTodoSuccess = todo => ({
    type: ADD_TODO_SUCCESS,
    payload: {
        ...todo
    }
});

export const addTodoStarted = () => ({
    type: ADD_TODO_STARTED
});

export const addTodoFailure = error => ({
    type: ADD_TODO_FAILURE,
    payload: {
        error
    }
});

export const deleteTodoSuccess = todo => ({
    type: DELETE_TODO,
    payload: {
        ...todo
    }
})

export const toggleTodoSuccess = todo => ({
    type: TOGGLE_TODO,
    payload: {
        ...todo
    }
})

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}