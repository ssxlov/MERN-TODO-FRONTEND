import axios from 'axios'
import {
    ADD_TODO_SUCCESS,
    ADD_TODO_FAILURE,
    ADD_TODO_STARTED,
    DELETE_TODO
} from '../actions/types';

const user = localStorage.getItem('userId')

//middleware
export const addTodo = ({ value }) => {
    return dispatch => {
        dispatch(addTodoStarted());

        axios
            .post('http://localhost:4000/users/' + user + '/todos', {
                title: value
            })
            .then(res => {
                dispatch(addTodoSuccess(res.data));
                console.log(res.data)
            })
            .catch(err => {
                dispatch(addTodoFailure(err.message));
            });

    };
};

const addTodoSuccess = todo => ({
    type: ADD_TODO_SUCCESS,
    payload: {
        ...todo
    }
});

const addTodoStarted = () => ({
    type: ADD_TODO_STARTED
});

const addTodoFailure = error => ({
    type: ADD_TODO_FAILURE,
    payload: {
        error
    }
});

export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
})

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}