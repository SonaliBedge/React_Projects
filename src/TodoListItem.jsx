import PropTypes from "prop-types";
function TodoListItem({ item }) {
  return <li> {item.title}</li>;
}
TodoListItem.propTypes = {
  item: PropTypes.func.isRequired, // Ensure that 'addTodo' prop is a function and is required
};
export default TodoListItem;
