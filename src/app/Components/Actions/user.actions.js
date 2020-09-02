import axios from 'axios'

const user = localStorage.getItem('userId')

let nextTodoId = 0
export const addTodo = text => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
})

export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
})

export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
})

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}
//
// export function sendTodo(todo) {
//     return function (dispatch) {
//         dispatch(addTodo());
//         return axios
//             .post('http://localhost:4000/users/' + user + '/todos', {
//                 _id: todo._id,
//                 title: todo.text
//             }).then(
//                 response => response.json(),
//                 error => console.log('An error occured', error)
//             ).then((json) => {
//                 dispatch(sendTodo(json))
//             })
//     }
// }

export const register = newUser => {
    return axios
        .post('http://localhost:4000/users/register', {
            email: newUser.email,
            password: newUser.password
        })
        .then(response => {
            console.log('Registered')
        })
}

export const login = user => {
    return axios
        .post('http://localhost:4000/users/login', {
            email: user.email,
            password: user.password
        })
        .then(response => {
            localStorage.setItem('usertoken', response.data.token)
            localStorage.setItem('userId', response.data.userId)

            return response.data
        })
        .catch(err => {
            console.log(err)
        })
}
