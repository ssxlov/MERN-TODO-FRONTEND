import React from 'react';
import {actions, initialState, todoSlice} from "../../Containers/TodoList/todoSlice";
import {useState, useEffect} from 'react';
import { connect } from 'react-redux'
import axios from "axios";
import {addTodo} from "../../Containers/TodoList/actions/index";

//const mapDispatch = { addTodo: actions.addTodo }

const ToDoInput = ({dispatch}) => {
    const [value, setValue] = useState("");
    const handleSubmit = e => {
        e.preventDefault();
        if (!value) {
            return ;
        }

        const mapDispatchToProps = dispatch => {
            return {
                onAddTodo: todo => {
                    dispatch(addTodo({value}));
                }
            };
        };
        dispatch(addTodo({value}))
        setValue("");

    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <input
                type="text"
                className="input"
                placeholder="Enter your task name here"
                value={value}
                onChange={e => setValue(e.target.value)}
            />
        </form>
    );
};

export default connect()(ToDoInput)
