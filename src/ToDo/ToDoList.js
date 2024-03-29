import React from "react";
import PropTypes from 'prop-types'
import ToDoItem from "./ToDoItem";

function TodoList(props) {
   return(
      <ul>
        {props.todos.map((todo, index) => {
         return(
            <ToDoItem todo={todo} key={todo.id} index={index} onChange={props.onToggle}/>
         )
        })}
      </ul>
   )
}

TodoList.propTypes = {
   todos: PropTypes.arrayOf(PropTypes.object).isRequired,
   onToggle: PropTypes.func.isRequired
}

export default TodoList