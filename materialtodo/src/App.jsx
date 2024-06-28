import { useState } from "react";
import "./App.css";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import SaveIcon from "@mui/icons-material/Save";
import { v4 as uuidv4 } from "uuid";
import { DataGrid } from "@mui/x-data-grid";

function App() {
  const [todo, setTodo] = useState({ description: "", date: "" });
  const [todos, setTodos] = useState([]);

  const todoRows = todos.map((todo) => ({
    id: todo.id,
    col1: todo.description,
    col2: todo.date,
  }));

  const todoColumns = [
    { field: "col1", headerName: "Description", width: 200 },
    { field: "col2", headerName: "Date", width: 200 },
  ];

  const inputChanged = (event) => {
    setTodo({ ...todo, [event.target.name]: event.target.value });
  };

  const addTodo = () => {
    const newTodo = { ...todo, id: uuidv4() };
    setTodos([...todos, newTodo]);
    setTodo({
      description: "",
      date: "",
    });
  };

  // const deleteTodo = (row) => {
  //   setTodos(todos.filter((todo, index) => index !== row));
  // };

  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography variant="h6">Todolist</Typography>
        </Toolbar>
      </AppBar>
      <Stack
        direction="row"
        spacing={2}
        mt={2}
        justifyContent="center"
        alignItems="center"
      >
        <TextField
          variant="standard"
          label="Description"
          name="description"
          value={todo.description}
          onChange={inputChanged}
        />
        <TextField
          variant="standard"
          label="Date"
          name="date"
          value={todo.date}
          onChange={inputChanged}
        />
        <Button variant="outlined" startIcon={<SaveIcon />} onClick={addTodo}>
          Add
        </Button>
      </Stack>
      <div style={{ height: 300, width: "100%", marginTop: "10px" }}>
        <DataGrid rows={todoRows} columns={todoColumns} />
      </div>
      {/* <table>
        <tbody>
          {todos.map((todo, index) => (
            <tr key={index}>
              <td>{todo.description}</td>
              <td>{todo.date}</td>
              <td>
                <Tooltip title="Delete todo">
                  <IconButton
                    size="small"
                    color="error"
                    onClick={() => deleteTodo(index)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Tooltip> */}
      {/* <Button
                  onClick={() => deleteTodo(index)}
                  size="small"
                  color="error"
                >
                  Delete
                </Button> */}
      {/* </td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </>
  );
}

export default App;
