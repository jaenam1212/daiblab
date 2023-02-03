import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './NavBottom.css'
import { useMediaQuery } from 'react-responsive'
import { IoSearchOutline, IoPersonOutline } from "react-icons/io5";
import { BsChat, BsChatFill } from "react-icons/bs";
import { TfiMore } from "react-icons/tfi";

const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile ? children : null
  }

const Nav = () => {
    const [activeNav, setActiveNav] = useState(2);
  return (
    <nav className="navBarBottom">
        <Mobile className="peple">
        <div className="bottomPeple">
        <NavLink to="/peple" onClick={() => setActiveNav(1)}>
        <IoPersonOutline 
        className={activeNav === 1 ? "bottomPeple active" : "bottomPeple"}/>
        </NavLink>
        </div>
        <div className="bottomMyChat">
        <NavLink to="/myChat" onClick={() => setActiveNav(2)}>
        <BsChat
        className={activeNav === 2 ? "bottomMyChat active" : "bottomMyChat" }/>
        </NavLink>
        </div>
        <div className="bottomSearch">
        <NavLink to="/search" onClick={() => setActiveNav(3)}>
            <IoSearchOutline
            className={activeNav === 3 ? "search bottomSearch" : "bottomSearch"}/>
        </NavLink>
        </div>
        <div className="more">
        <NavLink to="/more" onClick={() => setActiveNav(4)}>
        <TfiMore 
        className={activeNav === 4 ? "more bottomMore" : "bottomMore"}/>
        </NavLink>
        </div>
      </Mobile>
    </nav>
  );
};

export default Nav;