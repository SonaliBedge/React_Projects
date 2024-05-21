import * as React from "react";
import PropTypes from "prop-types";

function AddTodoForm({ addTodo }) {
  const [todoTitle, setTodoTitle] = React.useState("");
  function handleTitleChange(event) {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  }
  function handleAddTodo(event) {
    event.preventDefault();
    addTodo({ title: todoTitle, id: Date.now() });
    console.log(todoTitle);
    setTodoTitle("");
  }

  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <label htmlFor="todoTitle">
          Title :
          <input
            id="todoTitle"
            type="text"
            name="title"
            value={todoTitle}
            onChange={handleTitleChange}
          />
        </label>

        <hr />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
}
AddTodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired, // Ensure that 'addTodo' prop is a function and is required
};
export default AddTodoForm;
