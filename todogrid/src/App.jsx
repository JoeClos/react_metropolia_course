import { useState } from "react";
import "./App.css";

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";

import ReactiveButton from "reactive-button";

function App() {
  const [todo, setTodo] = useState({ description: "", date: "", status: "" });
  const [todos, setTodos] = useState([]);

  // Column definitions for ag-grid
  const columnDefs = [
    { field: "description", filter: true, sortable: true },
    { field: "date", filter: true, sortable: true },
    { field: "status", filter: true, sortable: true },
  ];

  const inputChanged = (event) => {
    setTodo({ ...todo, [event.target.name]: event.target.value });
  };

  const addTodo = () => {
    setTodos([...todos, todo]);
    setTodo({ description: "", date: "", status: "" });
  };

  return (
    <>
      <input
        type="text"
        placeholder="Description"
        name="description"
        value={todo.description}
        onChange={inputChanged}
      />
      <input
        type="date"
        placeholder="Date"
        name="date"
        value={todo.date}
        onChange={inputChanged}
      />
      <input
        type="text"
        placeholder="Status"
        name="status"
        value={todo.status}
        onChange={inputChanged}
      />
      {/* <button onClick={addTodo}>Add</button> */}
      <ReactiveButton
        color="violet"
        onClick={addTodo}
        idleText="Add"
        rounded
        size="small"
      />
      <div className="ag-theme-material" style={{ height: 400, width: 600 }}>
        <AgGridReact rowData={todos} columnDefs={columnDefs} rowDrag/>
      </div>
    </>
  );
}

export default App;
