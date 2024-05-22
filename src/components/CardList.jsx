import React from "react";
import { useState } from "react";
import cardImg from "../assets/img/menucard06.png";

function CardList({ data }) {
  //마우스오버 되면 dis-none이 사라지도록
  const [isHover, setIsHover] = useState(true);
  const handleMouseOver = () => {
    setIsHover(false);
  };
  const handleMouseOut = () => {
    setIsHover(true);
  };

  return (
    <div className="card_wrap">
      <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <div className="card">
          <p className="card_title">{isHover && data.title}</p>
          <p className="card_title">{isHover || data.explan}</p>
          <img src={cardImg} alt="카테고리카드" />
        </div>
      </div>
    </div>
  );
}

export default CardList;
