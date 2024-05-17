import TodoItex from "./TodoItex";

const TodoList = ({ title, todos, setTodos }) => {
  return (
    <div>
      <h2 className="todoListTitle">{title}</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <TodoItex todo={todo} setTodos={setTodos} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
