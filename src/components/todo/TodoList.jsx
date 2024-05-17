import TodoItex from "./TodoItex";

const TodoList = ({ todos }) => {
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <TodoItex todo={todo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
