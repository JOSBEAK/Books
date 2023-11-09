import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";

function BookCreate() {
  const [title, setTitle] = useState("");
  const { createBooks } = useBooksContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    createBooks(title);
    setTitle("");
  };
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <input className="input" value={title} onChange={handleChange} />
        <button className="button" onClick={handleSubmit}>
          Create!
        </button>
      </form>
    </div>
  );
}
export default BookCreate;
