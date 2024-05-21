import * as React from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

function App() {
  const [todoList, setTodoList] = React.useState([]);
  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };
  return (
    <div>
      <h1>Todo List</h1>
      <TodoList todoList={todoList} />
      <hr />
      <AddTodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
