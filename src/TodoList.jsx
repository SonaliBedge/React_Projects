// import * as React from "react";
import PropTypes from "prop-types";
import TodoListItem from "./TodoListItem";

function TodoList({ todoList }) {
  return (
    <div>     
      <hr />
      <ul>
        {todoList.map((item) => (
          <TodoListItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}
TodoList.propTypes = {
  todoList: PropTypes.func.isRequired, // Ensure that 'addTodo' prop is a function and is required
};
export default TodoList;
