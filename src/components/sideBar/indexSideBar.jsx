import { Link } from "react-router-dom";
import React from "react";
import { MyButton } from "../UI/btn/MyButton";
import "./sidebarStyle.scss"

const SideBar = () => {
  return (
    <div className="links">
      <div>
        <Link to="/curs">Курс</Link>
      </div>
      <div>
        <Link to="/audacity">Аудирование</Link>
      </div>
      <div>
        <Link to="/lexical">Лексика</Link>
      </div>
      <vid>
        <Link to="/dictionary">Словарь</Link>
      </vid>
      <div>
        <Link to="/homework">Дз</Link>
      </div>
    </div>
  );
};
export default SideBar;
