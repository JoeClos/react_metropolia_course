import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

const AddBook = ({addBook}) => {
  const [open, setOpen] = useState(false);
  const [book, setBook] = useState({title: '', author: '', year: '', isbn: '', price: ''});

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (event) => {
    setBook({ ...book, [event.target.name]: event.target.value });
  }

  const saveBook = () => {
    addBook(book);
    setBook({title: '', author: '', year: '', isbn: '', price: ''});
    handleClose();
  }

  return (
    <>
      <Button variant="outlined" onClick={handleOpen} sx={{ mt: "10px" }}>
        Add book
      </Button>{" "}
      <Dialog open={open}>
        <DialogTitle>New book</DialogTitle>
        <DialogContent>
          <TextField
            label="Title"
            name="title"
            value={book.title}
            fullWidth
            margin="dense"
            onChange={handleInputChange}
          />
          <TextField
            label="Author"
            name="author"
            value={book.author}
            fullWidth
            margin="dense"
            onChange={handleInputChange}
          />
          <TextField
            label="Year"
            name="year"
            value={book.year}
            fullWidth
            margin="dense"
            onChange={handleInputChange}
          />
          <TextField
            label="ISBN"
            name="isbn"
            value={book.isbn}
            fullWidth
            margin="dense"
            onChange={handleInputChange}
          />
          <TextField
            label="Price"
            name="price"
            value={book.price}
            fullWidth
            margin="dense"
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={handleClose}>
            Cancel
          </Button>
          <Button color="primary" onClick={saveBook}>
            Save
          </Button>
        </DialogActions>
      </Dialog>{" "}
    </>
  );
};
export default AddBook;
