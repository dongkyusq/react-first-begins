const TodoItex = ({ todo, setTodos }) => {
  const { id, title, detail } = todo;

  const deleteTodo = () => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleTodo = () => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <div className="todo-card">
      <h3 className="todoTitle">{title}</h3>
      <p>{detail}</p>

      <div>
        <button onClick={toggleTodo}>완료</button>
        <button onClick={deleteTodo}>삭제</button>
      </div>
    </div>
  );
};

export default TodoItex;
