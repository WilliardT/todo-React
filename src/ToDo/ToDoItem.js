import React, {useContext} from "react";
import PropTypes from 'prop-types'
import Context from "../context";

function ToDoItem ({todo, index, onChange}) {
   const {removeTodo} = useContext(Context)
   const classes = []

   if (todo.completed) {
      classes.push('done')
   }

   return(
      <li>
         <span className={classes.join(' ')}>
            <input type='checkbox' chacked={todo.completed.toString()} onChange={() => onChange(todo.id)} />
            <strong>{index + 1}</strong>
            &nbsp;
            {todo.title}
         </span>
         <button className="rm" onClick={removeTodo.bind(null, todo.id)}>&times;</button>
      </li>
   )
}

ToDoItem.propTypes = {
   todo: PropTypes.object.isRequired,
   index: PropTypes.number,
   onChange: PropTypes.func.isRequired,   
}

export default ToDoItem