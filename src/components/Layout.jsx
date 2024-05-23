import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import ThemeMode from "./ThemeMode";
import { useLightMode } from "./ModeContext";
import { useMediaQuery } from "react-responsive";

function getLinkStyle({ isActive }) {
  return {
    color: isActive ? "#F61C1C" : undefined,
  };
}

export default function Layout() {
  const github = "https://github.com/Jihana030";
  const figma =
    "https://www.figma.com/file/T884LiS5OO7vNoSA3sVZJp/portfolio?type=design&node-id=301%3A50&mode=design&t=nAYo4Oam72R1WMsV-1";

  const { isLightMode } = useLightMode();
  const mobile = useMediaQuery({
    query: "(max-width:700px)",
  });
  const [menu, setMenu] = useState(true);
  const handleMenu = () => {
    setMenu(!menu);
  };
  return (
    <header className={isLightMode ? "light" : "dark"}>
      <div className="logo_wrap">
        <p onClick={handleMenu}>
          <Link to="/">logo</Link>
        </p>
        <ThemeMode />
      </div>
      <nav className="nav_wrap">
        {mobile && (
          <span className="hamburger material-symbols-rounded" onClick={handleMenu}>
            menu
          </span>
        )}
        {mobile || (
          <ul className={`row`}>
            <li>
              <NavLink to="/curriculum" style={getLinkStyle}>
                프로필
              </NavLink>
            </li>
            <li>
              <a href={github}>깃허브</a>
            </li>
            <li>
              <a href={figma}>피그마</a>
            </li>
            <li>
              <NavLink to="/varies" style={getLinkStyle}>
                카테고리
              </NavLink>
            </li>
          </ul>
        )}
        {mobile && (
          <ul className={`row ${menu && " dis-none"}`} onClick={handleMenu}>
            <li>
              <NavLink to="/curriculum" style={getLinkStyle}>
                프로필
              </NavLink>
            </li>
            <li>
              <a href={github}>깃허브</a>
            </li>
            <li>
              <a href={figma}>피그마</a>
            </li>
            <li>
              <NavLink to="/varies" style={getLinkStyle}>
                카테고리
              </NavLink>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}
