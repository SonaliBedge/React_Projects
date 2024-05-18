const todoList = [
  {
    title: "Cooking",
    object_id: 1,
  },
  {
    title: "Studing",
    object_id: 1,
  },
  {
    title: "Cleaning",
    object_id: 1,
  },
];

function App() {
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todoList.map(function (item) {
          return <li key={item.object_id}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;

//using arrow function
// {todoList.map((item) => (
//   <li key={item.object_id}>{item.title}</li>
// ))}
