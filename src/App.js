import { useState, useEffect, useContext } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import BooksContext from "./context/books";

function App() {
  const { fetchBooks } = useContext(BooksContext); // we only need fetch books in app component so only using fetchbooks here
  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div>
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;
