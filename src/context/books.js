import { createContext, useState } from "react";
import axios from "axios";
const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
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
  const createBooks = async (name) => {
    const response = await axios.post("http://localhost:3001/books", {
      name,
    });
    setBooks([...books, response.data]);
  };

  const valueToShare = {
    books,
    createBooks,
    fetchBooks,
    handleDelete,
    editBookById,
  };
  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}

export { Provider };
export default BooksContext;
