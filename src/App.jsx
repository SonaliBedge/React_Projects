import * as React from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
const useSemiPersistentState = () => {
  const savedTodoList = JSON.parse(localStorage.getItem("savedTodoList")) || [];
  const [todoList, setTodoList] = React.useState(savedTodoList);
  React.useEffect(() => {
    localStorage.setItem("savedTodoList", JSON.stringify(todoList));
  }, [todoList]);
  return [todoList, setTodoList];
};
function App() {
  const [todoList, setTodoList] = useSemiPersistentState(); //Custom hook
  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };
  return (
    <>
      <h1>Todo List</h1>
      <TodoList todoList={todoList} />
      <hr />
      <AddTodoForm addTodo={addTodo} />
    </>
  );
}

export default App;
