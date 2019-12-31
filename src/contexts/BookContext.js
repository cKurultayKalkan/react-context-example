import React, {createContext, useState} from 'react'
import uuid from 'uuid/v1'
export const BookContext=createContext();

const BookContextProvider = (props)=>{

  const [books, setBooks] = useState([
    {title:'Dönüşüm', author:'Franz Kafka', id:1},
    {title:'Dava', author:'Franz Kafka', id:2},
    {title:'Hayvan Çiftliği', author:'George Orwell', id:3},
    {title:'1984', author:'George Orwell', id:4},
    {title:'Yeni Cesur Dünya', author:'Aldouse Huxley', id:5},
  ]);

  const addBook=(title,author)=> {
    setBooks([...books, {title, author,id:uuid()}])
  };

  const removeBook = (id)=> {
    setBooks(books.filter((b)=> b.id !== id))
  };

  return (
    <BookContext.Provider value={{books, removeBook, addBook}}>
      {props.children}
    </BookContext.Provider>
  )
};

export default BookContextProvider
