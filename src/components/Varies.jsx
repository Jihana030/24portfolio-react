import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../firebase";
import CardList from "./CardList";

function Varies() {
  const { cardList } = useParams();
  const [categoryItems, setCategoryItems] = useState();

  async function getDocments(cardList) {
    const categoryRef = query(collection(db, cardList));
    const queryCategory = await getDocs(categoryRef);
    setCategoryItems(queryCategory.docs);
  }

  useEffect(() => {
    getDocments("cardList");
  }, [cardList]);
  return (
    <div className="subject_wrap">
      {categoryItems &&
        categoryItems.map((doc) => (
          <NavLink to={`cardList/${doc.id}`} key={doc.id}>
            <CardList title={doc.data()} explan={doc.data()} />
          </NavLink>
        ))}
    </div>
  );
}

export default Varies;
