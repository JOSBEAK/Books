import { useState, useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";
function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  };
  useEffect(() => {
    fetchBooks();
  }, []);

  const createBooks = async (name) => {
    const response = await axios.post("http://localhost:3001/books", {
      name,
    });
    setBooks([...books, response.data]);
  };

  const handleDelete = (id) => {
    const deleteBook = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(deleteBook);
  };

  const editBookById = async (id, name) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      name,
    });
    //some logic
    const updateBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }
      return book;
    });
    setBooks(updateBooks);
  };
  return (
    <div>
      <BookList books={books} onDelete={handleDelete} onEdit={editBookById} />
      <BookCreate onCreate={createBooks} />
    </div>
  );
}

export default App;
