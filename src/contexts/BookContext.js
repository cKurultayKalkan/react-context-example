import React, {createContext, useReducer} from 'react'
import {bookReducer} from "../reducers/bookReducer";
export const BookContext=createContext();

const BookContextProvider = (props)=>{

  const [books, dispatch] = useReducer(bookReducer, [])

  const addBook=(title,author)=> {
    dispatch({type:'ADD_BOOK', book :{
        title,
        author
      }})
  };

  const removeBook = (id)=> {
    dispatch({type:'REMOVE_BOOK', id})
  };

  return (
    <BookContext.Provider value={{books, removeBook, addBook}}>
      {props.children}
    </BookContext.Provider>
  )
};

export default BookContextProvider
