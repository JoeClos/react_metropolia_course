import { useState } from "react";

const Todolist = () => {
  const [todo, setTodo] = useState({ description: "", date: "" });
  const [ todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    setTodo({ ...todo, [event.target.name]: event.target.value });
  };

  const handleAddTodos = () => {
    console.log(todos)
    setTodos([...todos, todo])
    setTodo({
      description: '',
      date: ''
    })
  }

  const deleteTodo = (row) => {
    console.log('Delete row: ' + row);
    setTodos(todos.filter((todo, index) => index !== row))
  }
   return (
    <>
      <input
        type="text"
        placeholder="Description"
        value={todo.description}
        name="description"
        onChange={inputChanged}
      />
      <input
        type="date"
        value={todo.date}
        name="date"
        onChange={inputChanged}
      />
      <button onClick={handleAddTodos}>Add</button>

      <div>
        <table>
            <tbody>
                {todos.map((tod, index) => (
                    <tr key={index}>
                        <td>{tod.description}</td>
                        <td>{tod.date}</td>
                        <td><button onClick={() => deleteTodo(index)}>Delete</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>
    </>
  );
};

export default Todolist;
