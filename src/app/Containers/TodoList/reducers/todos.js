import {
    ADD_TODO_SUCCESS,
    ADD_TODO_FAILURE,
    ADD_TODO_STARTED,
    DELETE_TODO
} from '../actions/types';

const initialState = {
    loading: false,
    todoList: [],
    error: null
};

export default function todosReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO_STARTED:
            return {
                ...state,
                loading: true
            };
        case ADD_TODO_SUCCESS:
            console.log('TODOS BACK FROM SERVER ---', state.todoList)
            return {
                ...state,
                loading: false,
                error: null,
                todoList: [...state.todoList, action.payload]
            };
        case ADD_TODO_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        default:
            return state;
    }
}