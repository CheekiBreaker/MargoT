import { observer } from "mobx-react-lite";
import React from "react";
import SideBar from "../sideBar/indexSideBar";
import { Link } from "react-router-dom";
import "./HeaderStyle.scss";
const Header = observer(() => {
  return (
    <header className="header">
      <div className="navbar">
        <div className="logo">
          <Link to="/">LOGO</Link>
        </div>
        <SideBar />
        <div className="authBtns">
          <div className="LogIn EnterBtn">
            <Link to="/login">In</Link>
          </div>
          <div className="LogIn Regbtn">
            <Link to="/reg">Reg</Link>
          </div>
        </div>
      </div>
    </header>
  );
});

export default Header;
