const TodoTable = ({todos, deleteTodo}) => {
  return (
    <>
      <table>
        <tbody>
          <thead>
            {todos.map((todo, index) => (
              <tr key={index}>
                <td>{todo.description}</td>
                <td> {todo.date}</td>
                <td>
                  <button onClick={() => deleteTodo(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </thead>
        </tbody>
      </table>
    </>
  );
};

export default TodoTable;
