import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import TodoItem from '../../Components/TodoItem/TodoItem';
import {actions, initialState, todoSlice} from './todoSlice';
import PropTypes from 'prop-types'
import { createSelector } from '@reduxjs/toolkit'
import APIHelper from "../../../APIHelper";
import ToDoInput from "../../Components/TodoInput/ToDoInput";
import { Link } from 'react-router-dom';
import './TodoList.scss'
import RadioBadge from "../../Components/RadioBadge/RaidoBadge";

import { controlBadges } from '../../Constants/todo';
import {text} from "@fortawesome/fontawesome-svg-core";

const TodoList = (props) => {
    const FILTER_MAP = {
        All: () => true,
        ToDo: todo => !todo.completed,
        Completed: todo => todo.completed
    };

    const {todos, remove, markAsChecked, clearCompleted, checkAll} = props
    const [state, setState] = useState({items: todos, filter: 'All'})

    useEffect(()  => {
        const todoList = todos.filter(FILTER_MAP['All'])
        setState({items: todoList, filter: 'All'})
        console.log('LOOG fsdfsdfsdfs');
    },[todos])

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    useEffect(() => {
        const fetchTodoAndSetTodos = async () => {
            const todos = await APIHelper.getAllTodos()
            //setState({todos})
            console.log(await APIHelper.getAllTodos())
            console.log(todos)
        };
        fetchTodoAndSetTodos();
    }, [])

    const btnClick = name => () => {
        const todoList = todos.filter(FILTER_MAP[name])
        setState({items: todoList, filter: name})
    };

    const checkAllTodos = () => {
        console.log(todos)
    }
    return (
        <React.Fragment>
            <header className="todoHeader">
                <Link to="/login" className="logoutBtn">
                    Logout
                </Link>
            </header>
            <div className="todoDescription">
                <p>
                    Hello "User", its your TodoList
                    <br/>
                </p>

            </div>
            <div className="todo-list">
                <ToDoInput/>
                <hr/>
                <div className="list">
                    {state.items.map((todo, index) => (
                        <TodoItem
                        id={todo.id}
                        index={index}
                        key={todo.id}
                        text={todo.text}
                        onRemove={() => {
                        remove({id: todo.id, text: todo.text})
                    }}
                        markAsChecked={() => {
                        markAsChecked({id: todo.id, completed: todo.completed})
                    }}
                        todo={todo}
                        />
                        ))}
                </div>
                <div className="footerSection">
                    <ul className="footer">
                        <li
                            className="taskCount"
                            onClick={checkAll}
                        >
                            {todos.length} tasks left
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
                                </button>))}
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

const mapStateToProps = state => ({todos: state.todo})
const mapDispatchToProps = {
    addTodo: actions.addTodo,
    remove: actions.remove,
    markAsChecked: actions.markAsChecked,
    clearCompleted: actions.clearCompleted,
    checkAll: actions.checkAll
}


export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
// export default TodoList