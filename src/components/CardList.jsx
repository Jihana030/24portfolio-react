import { useEffect, useState } from "react";
import cardImg from "../assets/img/menucard06.png";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

/*
  이 컴포넌트의 역할은 카드 하나를 보여주는 것. 
  카드에는 데이터가 들어가서 이름이랑 설명이 나와야함. 
*/

function CardList({ title, explan }) {
  //마우스오버 되면 dis-none이 사라지도록
  const [isHover, setIsHover] = useState(true);
  const handleMouseOver = () => {
    setIsHover(false);
  };
  const handleMouseOut = () => {
    setIsHover(true);
  };
  const className = `card_explan ${isHover ? "dis-none" : ""}`;

  // const { cardList } = useParams();
  // const [cardData, setCardData] = useState();

  // async function getDocments(cardList) {
  //   const docRef = doc(db, "Card", cardList);
  //   const docSnap = await getDoc(docRef);
  //   setCardData(docSnap.data());
  // }

  // useEffect(() => {
  //   getDocments(cardList);
  // }, [cardList]);
  console.log(title)
  const stringTitle = JSON.stringify(title.title);
  const stringExplan = JSON.stringify(explan.explan);
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
