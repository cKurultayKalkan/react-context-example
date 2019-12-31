import React, { useContext, useState } from 'react';
import {BookContext} from "../contexts/BookContext";

const NewBookForm = () => {

  const {addBook} = useContext(BookContext);
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const handleSubmit = (e)=> {
    e.preventDefault();
    addBook(title, author);
    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} placeholder="Kitap Başlığı" onChange={(e)=> setTitle(e.target.value)}/>
      <input type="text" value={author} placeholder="Yazar" onChange={(e)=> setAuthor(e.target.value)}/>
      <button onSubmit={handleSubmit}>Kitap Ekle</button>
    </form>
  );
};

export default NewBookForm;
