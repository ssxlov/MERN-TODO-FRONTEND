import {
    ADD_TODO_SUCCESS,
    ADD_TODO_FAILURE,
    ADD_TODO_STARTED,
    DELETE_TODO,
    TOGGLE_TODO,
    GET_TODOS,
    GET_TODOS_STARTED
} from '../actions/types';

const initialState = {
    todoList: [],
};

export default function todosReducer(state = initialState, action) {
    console.log('action', action)
    switch (action.type) {
        case GET_TODOS:
            console.log('aaaaaaa', action)
            return {
                todoList: [action.payload],
            }
        case GET_TODOS_STARTED:
            return {
                ...state
            }
        case ADD_TODO_STARTED:
            return {
                ...state,
            };
        case ADD_TODO_SUCCESS:
            return {
                todoList: state.todoList.concat([action.payload])
            };

        case ADD_TODO_FAILURE:
            return {
                ...state,
            };

        case DELETE_TODO:
            return {
                todoList: state.todoList.filter((todo) => !(todo._id === action.payload.id))
            };

        case TOGGLE_TODO:
            return {
                todoList: state.todoList.map((todo) => {
                  if(todo._id === action.payload.id) todo.completed = !todo.completed;
                  return todo
                }),
            }
        default:
            return state;
    }
}