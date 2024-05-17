const TodoItex = ({ todo }) => {
  return (
    <div>
      <h3>{todo.title}</h3>
      <p>{todo.content}</p>

      <div>
        <button>완료</button>
        <button>삭제</button>
      </div>
    </div>
  );
};

export default TodoItex;
