import { useState } from "react";
import BookEdit from "./BookEdit";
import useBooksContext from "../hooks/use-books-context";

function BookShow({ book }) {
  const [showEdit, setShowEdit] = useState(false);

  const { handleDelete } = useBooksContext();
  const handleDeleteById = () => {
    handleDelete(book.id);
  };
  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  let content = <h3>{book.name}</h3>;
  if (showEdit) {
    content = <BookEdit book={book} />;
  }

  return (
    <div className="book-show">
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
        <button className="delete" onClick={handleDeleteById}>
          Delete
        </button>
      </div>
    </div>
  );
}
export default BookShow;
