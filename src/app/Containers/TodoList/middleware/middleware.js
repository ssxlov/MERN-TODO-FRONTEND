import axios from "axios";
import {addTodoStarted, addTodoSuccess, addTodoFailure, user, deleteTodoSuccess, toggleTodoSuccess, getTodos} from "../actions";
import todos from "../reducers/todos";
import {useSelector} from "react-redux";

export const getAllTodos = () => dispatch => {
    axios
        .get('http://localhost:4000/users/' + user + '/todos')
        .then((todos) => dispatch(getTodos(todos)))
}

export const addTodo = ({ value }) => {
    return dispatch => {
        dispatch(addTodoStarted());
        axios
            .post('http://localhost:4000/users/' + user + '/todos', {
                title: value
            })
            .then(res => {
                dispatch(addTodoSuccess(res.data));
                //console.log(res.data)
            })
            .catch(err => {
                dispatch(addTodoFailure(err.message));
            });
    };
};

export const deleteTodo = (deleteId) => {
    console.log('delete todo ---', deleteId)
    return dispatch => {

        axios
            .delete('http://localhost:4000/users/' + user + '/todos/' + deleteId.id)
            .then(
                dispatch(deleteTodoSuccess(deleteId))
                //console.log(res.data)
            )
    };
};

export const toggleTodo = (toggleId) => {
    console.log(toggleId)
    return dispatch => {
        axios
            .patch('http://localhost:4000/users/' + user + '/todos/' + toggleId.id)
            .then(
                dispatch(toggleTodoSuccess(toggleId)),
            )
    }
}