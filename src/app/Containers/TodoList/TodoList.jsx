import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import TodoItem from '../../Components/TodoItem/TodoItem';
import {actions, initialState, todoSlice} from './todoSlice';
import PropTypes from 'prop-types'
import {createSelector} from '@reduxjs/toolkit'
import ToDoInput from "../../Components/TodoInput/ToDoInput";
import {Link} from 'react-router-dom';
import './TodoList.scss'
import jwt_decode from 'jwt-decode'
import {controlBadges} from '../../Constants/todo';
import {toggleTodo} from './actions/index'
import {VisibilityFilters} from './actions/index'

const TodoList = (props) => {

    const FILTER_MAP = {
        All: () => true,
        ToDo: todo => !todo.completed,
        Completed: todo => todo.completed
    };

    const {todos, remove, markAsChecked, clearCompleted, checkAll} = props
    const [state, setState] = useState({items: [], filter: 'All'})

    useEffect(() => {
        console.log('todos', todos)
        const todoList = todos.filter(FILTER_MAP['All'])
        setState({items: todoList, filter: 'All'})

        console.log('[todos]',[todos])
        console.log('todoList', todoList)
    }, [todos])

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const btnClick = name => () => {
        const todoList = todos.filter(FILTER_MAP[name])
        //setState({items: todoList, filter: name})
    };

    return (
        <React.Fragment>
            <header className="todoHeader">
                <Link to="/login" className="logoutBtn">
                    Logout
                </Link>
            </header>
            <div className="todoDescription">
                <p>
                    Hello user, its your TodoList
                    <br/>
                </p>

            </div>
            <div className="todo-list">
                <ToDoInput/>
                <hr/>
                <div className="list">
                    {todos.map((todo, index) => (
                        <TodoItem
                            index={index}
                            id={todo.id}
                            text={todo.title}
                        />
                        ))}
                </div>
                <div className="footerSection">
                    <ul className="footer">
                        <li
                            className="taskCount"
                            //onClick={checkAll}
                        >
                            {/*{[state.items.todos].length} tasks left*/}
                        </li>
                        <li>
                            {controlBadges.map((name) => (
                                <button
                                    key={name}
                                    //onClick={btnClick(name)}
                                    name={name}
                                    className="filterButton"
                                >
                                    {name}
                                </button>
                            ))}
                        </li>
                        <li
                            className="clearTasksButton"
                            //onClick={clearCompleted}
                        >
                            Clear completed
                        </li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}

const selectTodos = state => state.todos

const selectVisibleTodos = createSelector(
    [selectTodos]
)

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({todos: state.todo})
const mapDispatchToProps = {

}


export default connect(mapStateToProps, mapDispatchToProps)(TodoList)

