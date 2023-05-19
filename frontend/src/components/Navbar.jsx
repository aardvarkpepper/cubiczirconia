import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { ThemeContext } from '../contexts/ThemeContext.js';

import './Navbar.css'

export default function Navbar() {

  const { user, loginUser, logoutUser } = useContext(UserContext);
  const { theme, changeTheme} = useContext(ThemeContext);

  // Use the user and theme values and functions

  function handleClick () {
//    console.log(JSON.stringify(changeTheme));
  }
  return (
    <div className="Navbar">
      <p>User: {user ? user.name : 'Guest'}</p>
      <button onClick={loginUser}>Login</button>
      <button onClick={logoutUser}>Logout</button>

      <p>Theme: {JSON.stringify(theme)}</p>
      <button onClick={handleClick}>Toggle Theme</button>
    </div>
  );
}