import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

const AddTodo = ({addTodo}) => {
  const [open, setOpen] = useState(false);
  const [todo, setTodo] = useState({ description: "", date: "", priority: "" });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    addTodo(todo);
    setTodo({ description: "", date: "", priority: "" })
    handleClose();
  }

  const handleInputChange = (event) => {
    setTodo({ ...todo, [event.target.name]: event.target.value });
  };

  return (
    <>
      <Button variant="outlined" onClick={handleOpen} sx={{mt: '10px'}}>
        Add todo
      </Button>
      <Dialog open={open}>
        <DialogTitle>New todo</DialogTitle>
        <DialogContent>
          <TextField
            label="Description"
            name="description"
            value={todo.description}
            fullWidth
            margin="dense"
            onChange={handleInputChange}
          />
          <TextField
            label="Date"
            name="date"
            value={todo.date}
            fullWidth
            margin="dense"
            onChange={handleInputChange}
          />
          <TextField
            label="Priority"
            name="priority"
            value={todo.priority}
            fullWidth
            margin="dense"
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={handleClose}>
            Cancel
          </Button>
          <Button color="primary" onClick={handleSave}>
            Save
          </Button>
        </DialogActions>
      </Dialog>{" "}
    </>
  );
};

export default AddTodo;
