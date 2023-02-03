import React from "react";
import { NavLink } from "react-router-dom";
import './Nav.css'
import { useMediaQuery } from 'react-responsive'
import { IoSearchOutline, IoMusicalNotesOutline, IoSettingsOutline } from "react-icons/io5";
import { BsChat } from "react-icons/bs";


const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile ? children : null
  }

const Nav = () => {
  return (
    <nav className="navBar">
        <Mobile>
            <div className="chat">Chats</div>    
        <NavLink to="/search">
        <IoSearchOutline className="search"/>
        </NavLink>
        <NavLink to="/PsChat">
        <BsChat className="chatIcon"/>
        </NavLink>
        <NavLink to="/music">
            <IoMusicalNotesOutline className="music"/>
        </NavLink>
        <NavLink to="/setting">
        <IoSettingsOutline className="setting"/>
        </NavLink>
      </Mobile>
    </nav>
  );
};

export default Nav;