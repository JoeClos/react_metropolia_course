import { useState, useEffect } from 'react'
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AddBook from './components/AddBook';
import { AgGridReact } from "ag-grid-react";

import './App.css'

function App() {

  const [books, setBooks] = useState([])

  const booksColumns = [
    { field: 'title', sortable: true, filter: true },
    { field: 'author', sortable: true, filter: true },
    { field: 'year', sortable: true, filter: true },
    { field: 'isbn', sortable: true, filter: true},
    { field: 'price', sortable: true, filter: true}
  ]

  useEffect(() => {
    fetchBooks()
  }, [])

  // fetch books from Firebase Realtime Database
  const fetchBooks = () => {
    fetch('https://bookstore-6f530-default-rtdb.europe-west1.firebasedatabase.app/.json')
      .then(response => response.json())
      .then(data => setBooks(Object.values(data)))
      .catch(err => console.error(err))
  }

  return (
    <>
      <AppBar  position="static">
        <Toolbar>
          <Typography variant="h5">Bookstore</Typography>
        </Toolbar>
      </AppBar>
      <AddBook />
      <div className="ag-theme-material" style={{ height: 400, width: 700 }}>
        <AgGridReact rowData={books} columnDefs={booksColumns}/>
      </div>
    </>
  )
}

export default App
