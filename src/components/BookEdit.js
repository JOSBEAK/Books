import { useState } from "react";

function BookEdit({ book, onEdit }) {
  const [name, setName] = useState(book.name);
  const handleSubmit = (e) => {
    e.preventDefault();
    onEdit(book.id, name);
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
