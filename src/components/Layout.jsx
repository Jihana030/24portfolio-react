import React, { useState } from "react";
import { Link } from "react-router-dom";
import ThemeMode from "./ThemeMode";
import { useLightMode } from "./ModeContext";
import { useMediaQuery } from "react-responsive";

export default function Layout() {
  const github = "https://github.com/Jihana030";
  const figma =
    "https://www.figma.com/file/T884LiS5OO7vNoSA3sVZJp/portfolio?type=design&node-id=301%3A50&mode=design&t=nAYo4Oam72R1WMsV-1";

  const { isLightMode } = useLightMode();
  const mobile = useMediaQuery({
    query: "(max-width:700px)",
  })
  const [menu, setMenu]=useState(false);
  const handleMenu=()=>{
    setMenu(!menu);
  }
  return (
    <header className={isLightMode?'light':'dark'}>
      <div className="logo_wrap">
        <p>
          <Link to="/">logo</Link>
        </p>
        <ThemeMode />
      </div>
      <nav className="nav_wrap">
        {mobile&&<span className="hamburger material-symbols-rounded" onClick={handleMenu}>menu</span>}
        {mobile||<ul className={`row`}>
          <li>
            <Link to="/curriculum" >프로필</Link>
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
        </ul>}
        {mobile&&<ul className={`row ${menu && ' dis-none'}`}>
          <li>
            <Link to="/curriculum" >프로필</Link>
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
        </ul>}
      </nav>
    </header>
  );
}
