import React from "react";
import { Link } from "react-router-dom";

export default function Layout() {
  const github = "https://github.com/Jihana030";
  const figma =
    "https://www.figma.com/file/T884LiS5OO7vNoSA3sVZJp/portfolio?type=design&node-id=301%3A50&mode=design&t=nAYo4Oam72R1WMsV-1";

  return (
    <header>
      <div className="logo_wrap">
        <p>
          <Link to="/">logo</Link>
        </p>
      </div>
      <nav className="nav_wrap">
        <ul>
          <li>
            <Link>이력서</Link>
          </li>
          <li>
            <a href={github}>깃허브</a>
          </li>
          <li>
            <a href={figma}>피그마</a>
          </li>
          <li>
            <Link to="/varies">카테고리</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
