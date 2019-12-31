import React, {useContext} from 'react'
import { ThemeContext } from "../contexts/ThemeContext";
import { AuthContext } from "../contexts/AuthContext";
import { BookContext } from "../contexts/BookContext";

const Navbar = ()=> {
  const {isLightTheme, light, dark} = useContext(ThemeContext);
  const {toggleAuth,isAuthenticated} = useContext(AuthContext);
  const {books} = useContext(BookContext);
  const theme = isLightTheme?light:dark;
  return ( <nav style={{background:theme.ui, color:theme.syntax}}>
    <h1>Kitap Listesi</h1>
    <p>{books.length} kitap var</p>
    <div onClick={toggleAuth}>
      {isAuthenticated?'Çıkış Yap':'Giriş Yap'}
    </div>
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>)

};

export default Navbar;
