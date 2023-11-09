import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";

function BookEdit({ book }) {
  const [name, setName] = useState(book.name);

  const { editBookById } = useBooksContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    editBookById(book.id, name);
  };
  const handleChange = (e) => {
    setName(e.target.value);
  };
  return (
    <div>
      <form className="book-edit" onSubmit={handleSubmit}>
        <input className="input" value={name} onChange={handleChange} />
        <button className="button is-primary">Save</button>
      </form>
    </div>
  );
}
export default BookEdit;
