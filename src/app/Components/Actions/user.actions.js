import axios from 'axios'
import {getTodos, getTodosStarted} from '../../Containers/TodoList/actions/index'
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
    return dispatch => {
        axios
            .post('http://localhost:4000/users/login', {
                email: user.email,
                password: user.password,
            })
            .then(response => {
                localStorage.setItem('usertoken', response.data.token)
                localStorage.setItem('userId', response.data.userId)
                console.log('LOOG dkahfkakfhfig', response.data.todos);
                dispatch(getTodos(response.data.todos));
                console.log('eeeeerrrrrrrrrrrrrrrr')

            })
            .catch(err => {
                console.log(err)
            })
    }
}
