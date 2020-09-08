import axios from 'axios'
import {getTodos} from '../../Containers/TodoList/actions/index'
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

export const login = ({user}) => {
    return dispatch => {
        axios
            .post('http://localhost:4000/users/login', {
                email: user.email,
                password: user.password,
                todos: user.todos
            })
            .then(response => {
                localStorage.setItem('usertoken', response.data.token)
                localStorage.setItem('userId', response.data.userId)
                dispatch(getTodos(response.data.todos))
                console.log(response.data.todos)
                return response.data
            })
            .catch(err => {
                console.log(err)
            })
    }

}
