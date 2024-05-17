const TodoForm = ({ setTodos }) => {
  const onSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const title = formData.get("title");
    const detail = formData.get("detail");

    if (!title.trim() || !detail.trim()) return alert("입력해주세요");

    const nextTodo = {
      id: crypto.randomUUID(),
      title,
      detail,
      isDone: false,
    };

    setTodos((prevTodos) => [nextTodo, ...prevTodos]);

    event.target.reset();
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        제목 <input type="text" placeholder="제목" name="title" />
        내용 <input type="text" placeholder="내용" name="detail" />
        <button type="submit"> 추가하기</button>
      </form>
    </>
  );
};

export default TodoForm;
