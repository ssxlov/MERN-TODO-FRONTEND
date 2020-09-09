import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import TodoItem from '../../Components/TodoItem/TodoItem';
import PropTypes from 'prop-types'
import {createSelector} from '@reduxjs/toolkit'
import ToDoInput from "../../Components/TodoInput/ToDoInput";
import {Link} from 'react-router-dom';
import './TodoList.scss'
import {controlBadges} from '../../Constants/todo';
import todosReducer, {initialState} from "./reducers/todos";
import {getTodos} from "./actions";

const TodoList = (props) => {
    const FILTER_MAP = {
        All: () => true,
        ToDo: todo => !todo.completed,
        Completed: todo => todo.completed
    };
    console.log('LOOG', props.todos.todoList);
    const {todos} = props
    const [state, setState] = useState({todos: todos, filter: 'All'})

    useEffect(()  => {
        const todoList = todos.filter(FILTER_MAP['All'])
        setState({todos: todoList, filter: 'All'})
    },[todos])

    const btnClick = name => () => {
        const todoList = todos.filter(FILTER_MAP[name])
        setState({todos: todoList, filter: name})
    };

    const checkAll = () => {
        const todoList = todos.map(todo => todo? {...todo, completed: !todo.completed} : todo)
        setState({todos: todoList})
    }

    const clearCompleted = () => {
        const todoList = todos.filter(todo => !todo.completed === true)
        setState({todos: todoList})
    }
    console.log('sdfsadfasd', props)
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
                    {state.todos.map((todo, index) => (
                        <TodoItem
                            completed={todo.completed}
                            index={index}
                            id={todo._id}
                            text={todo.title}
                        />
                        ))}
                </div>
                <div className="footerSection">
                    <ul className="footer">
                        <li
                            className="taskCount"
                            onClick={checkAll}
                        >
                            {props.todos.length} tasks left
                        </li>
                        <li>
                            {controlBadges.map((name) => (
                                <button
                                    key={name}
                                    onClick={btnClick(name)}
                                    name={name}
                                    className="filterButton"
                                >
                                    {name}
                                </button>
                            ))}
                        </li>
                        <li
                            className="clearTasksButton"
                            onClick={clearCompleted}
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

const mapStateToProps = state => ({todos: state.todos.todoList})
const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)

