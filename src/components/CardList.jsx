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
  const className = `card_explan ${isHover ? "dis-none" : ""}`;

  const stringTitle = JSON.stringify(data.title);
  const stringExplan = JSON.stringify(data.explan);
  return (
    <div className="card_wrap">
      <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <div className="card">
          <p className="card_title">{stringTitle}</p>
          <img src={cardImg} alt="카테고리카드" />
        </div>
        <div className={className}>
          <ul>
            <li>{stringExplan}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardList;
