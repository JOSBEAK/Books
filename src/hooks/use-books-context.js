//custom hook that can help in minmizing repetitive code in multiple files

import { useContext } from "react";
import BooksContext from "../context/books";

function useBooksContext() {
  return useContext(BooksContext);
}
export default useBooksContext;
