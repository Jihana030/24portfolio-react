import React from "react";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../firebase";
import CardList from "./CardList";
import { useLightMode } from "./ModeContext";

function Varies() {
  const { cardList } = useParams();
  const [categoryItems, setCategoryItems] = useState();
  const { isLightMode } = useLightMode();

  async function getDocments(cardList) {
    const categoryRef = query(collection(db, cardList));
    const queryCategory = await getDocs(categoryRef);
    setCategoryItems(queryCategory.docs);
  }

  useEffect(() => {
    getDocments("cardList");
  }, [cardList]);

  return (
    <div className={"subject_wrap " + (isLightMode ? "light" : "dark")}>
      {categoryItems &&
        categoryItems.map((doc) => (
          <NavLink to={`${doc.id}`} key={doc.id}>
            <CardList data={doc.data()} />
          </NavLink>
        ))}
    </div>
  );
}

export default Varies;
