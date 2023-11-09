import BookShow from "./BookShow";
import BooksContext from "../context/books";
import { useContext } from "react";
function BookList({ books, onDelete, onEdit }) {
  const { count, incrementCount } = useContext(BooksContext);
  const renderBooks = books.map((book) => {
    return (
      <BookShow onDelete={onDelete} onEdit={onEdit} book={book} key={book.id} />
    );
  });
  return (
    <div className="book-list">
      {count}
      <button onClick={incrementCount}>Click me</button>
      {renderBooks}
    </div>
  );
}
export default BookList;
