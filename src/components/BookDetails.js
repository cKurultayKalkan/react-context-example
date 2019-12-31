import React, { useContext } from 'react';
import { ThemeContext } from "../contexts/ThemeContext";
import {BookContext} from "../contexts/BookContext";

const BookDetails = ({book}) => {
  const {isLightTheme, light, dark} = useContext(ThemeContext);
  const {removeBook} = useContext(BookContext);
  const theme = isLightTheme?light:dark;
  return (
    <li onClick={()=>removeBook(book.id)} className="book-list" style={{background:theme.bg, color:theme.syntax}}>
      <div className="title"><strong>{book.title}</strong></div>
      <div className="author">{book.author}</div>
    </li>
  );
};

export default BookDetails;

