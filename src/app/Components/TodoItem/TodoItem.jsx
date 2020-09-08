import React from 'react';
import PropTypes from 'prop-types';
import './TodoItem.scss';
import { connect } from 'react-redux'
import {deleteTodo, toggleTodo} from '../../Containers/TodoList/middleware/middleware'

/**
 * todo implement here component which will show todo item
 * Component should contain checkbox text and trash icon for remove item
 *
 * This component should receive the following params
 * text -  name of task
 * id - id of task
 * checked - checked state of the task
 * onCheck - callback which should be called if the checkbox state was changed
 * onRemove - callback which should be called if the trash icon was called
 *
 * NOTE: need to pass task id into callbacks as param
 */

const TodoItem = ({todo, text, id, completed, markAsChecked, deleteTodo, toggleTodo}) => (
        <React.Fragment>
            <li className="todo"
                //completed={todo.completed}
                key={id}
                style={{textDecoration: completed? 'line-through' : 'none'}}
                // checked={checked}
                // onCheck={onCheck}
            >
                <input type="checkbox" onClick={() => toggleTodo({id})}/>
                <div className="taskText">
                    {text}
                    <div className="deleteTask" onClick={() => deleteTodo({id})}>
                        <img src='https://img.icons8.com/android/12/000000/trash.png' alt="error"/>
                    </div>
                </div>
            </li>
            <hr/>
        </React.Fragment>
    );

TodoItem.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    markAsChecked: PropTypes.bool.isRequired,
    onRemove: PropTypes.func.isRequired,
}


const mapDispatch = {deleteTodo, toggleTodo}
export default connect(null, mapDispatch)(TodoItem)
