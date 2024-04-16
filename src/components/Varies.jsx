import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../firebase";
import CardList from "./CardList";

/*
  카드 애니메이션용 클래스 추가 삭제 필요. 
  뭘 기준으로 true, false를 줄 것인가.

  card_wrap이 map으로 반복생성 되어야 함. 
*/

function Varies() {
  // navLink
  const { cardList } = useParams();
  const [categoryItems, setCategoryItems] = useState();

  async function getDocments(cardList) {
    const categoryRef = query(collection(db, cardList));
    const queryCategory = await getDocs(categoryRef);
    setCategoryItems(queryCategory.docs);
  }

  useEffect(() => {
    getDocments('cardList');
  }, [cardList]);
  return (
    <div className="subject_wrap">
      {categoryItems &&
        categoryItems.map((doc) => (
          <NavLink to={`${cardList}/${doc.id}`} key={doc.id}>
            <CardList title={doc.id} explan={ doc.data()} />
          </NavLink>
        ))}
    </div>
  );
}

export default Varies;
