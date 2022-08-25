import "./Header.css";
import React from "react";
import {Link } from 'react-router-dom';
const pages=["Home","Layers","Techers","ParentsCommittee","Contact"]


function Header() {
  return (
    <div className="header" id="navBar">
        {
          pages.map(pagesNav=>
            <Link  to={pagesNav}><button id="BTNnavbar">{pagesNav}</button></Link>)
        }
    </div>
  );
};

export default Header;
