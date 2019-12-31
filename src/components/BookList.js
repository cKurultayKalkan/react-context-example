import React, { useContext } from 'react';
import { ThemeContext } from "../contexts/ThemeContext";
import {BookContext} from "../contexts/BookContext";
import BookDetails from '../components/BookDetails'

const BookList = () => {
  const {isLightTheme, light, dark} = useContext(ThemeContext);
  const {books} = useContext(BookContext);
  const theme = isLightTheme?light:dark;
  return books.length ? (
    <div className="book-list" style={{background:theme.bg, color:theme.syntax}}>
      <ul>
        {books.map((b)=>(<BookDetails key={b.id} book={b}/>))}
      </ul>
    </div>
  ) : <div>Henüz Kitap Eklenmedi</div>;
};

export default BookList;

