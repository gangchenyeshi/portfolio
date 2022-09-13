import React, { useState } from 'react';
import "./Navbar.css"
import { MenuList } from "./MenuList";
import { NavLink } from "react-router-dom"

const MyNavBar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const menuList = MenuList.map(({ url, title }, index) => {
    return (
      <li key={index} onClick={handleClick}>
        <NavLink to={url} className={clicked ? "menu-link" : "menu-link menu-close"}>
          {title}
        </NavLink>
      </li>
    );
  });

  return (
    <>
      <nav>
        <div className="logo">
          <NavLink to="/" className="logo-link">
            <span className="first-name">Yeshi<font>Gangchen</font></span>
          </NavLink>

        </div>
        <div className="menu-icon" onClick={handleClick}>
          <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={clicked ? "menu-list" : "menu-list close"}>
          {menuList}
        </ul>
      </nav>
    </>
  )
}

export default MyNavBar