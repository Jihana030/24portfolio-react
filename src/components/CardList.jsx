import { useEffect, useState } from "react";
import cardImg from "../assets/img/menucard06.png";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

function CardList() {
  //마우스오버 되면 dis-none이 사라지도록
  const className = `card_explan `;

  const { id } = useParams();
  const [cardData, setCardData] = useState();

  async function getDocments(cardId) {
    const docRef = doc(db, "Card", cardId);
    const docSnap = await getDoc(docRef);
    setCardData(docSnap.data());
  }

  useEffect(() => {
    getDocments(id);
  }, [id]);

  return (
    <div className="card_wrap">
      {cardData !== undefined && (
        <div>
          <div className="card">
            <p className="card_title">{cardData.title}</p>
            <img src={cardImg} alt="카테고리카드" />
          </div>
          <div className={className}>
            <ul>
              <li>{cardData.explan}</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default CardList;
