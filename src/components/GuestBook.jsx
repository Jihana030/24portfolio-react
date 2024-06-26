import React from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import BookPage from "./BookPage";
import PageAdd from "./PageAdd";
import Title from "./Title";
import { useLightMode } from "./ModeContext";

function GuestBook() {
  const { guest } = useParams();
  const [categoryItems, setCategoryItems] = useState();

  // 방명록 내림차순 정렬, 데이터 불러오기
  async function getDocments(guest) {
    const categoryRef = query(collection(db, guest), orderBy('time','desc'));
    const queryCategory = await getDocs(categoryRef);
    setCategoryItems(queryCategory.docs);
  }

  useEffect(() => {
    getDocments("guest");
  }, [guest]);
  const { isLightMode } = useLightMode();
  return (
    <div id="guestBook_wrap" className={isLightMode ? "light" : "dark"}>
      <PageAdd />
      <Title title="방명록" />
      <div className="contents_wrap">
        {categoryItems && categoryItems.map((doc) => <BookPage key={doc.id} data={doc.data()} />)}
      </div>
    </div>
  );
}

export default GuestBook;
