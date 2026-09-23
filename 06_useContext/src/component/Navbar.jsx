import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'


const Navbar = () => {

    const {darkMode , toggleTheme} = useContext(ThemeContext);

  return (
    <div>
        <button onClick={toggleTheme}>
            {darkMode ? "Light" : "Dark"}
        </button>
    </div>
  )
}

export default Navbar