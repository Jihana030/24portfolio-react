import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import BookPage from "./BookPage";
import PageAdd from "./PageAdd";
import Title from "./Title";

function GuestBook() {
  const { guest } = useParams();
  const [categoryItems, setCategoryItems] = useState();

  async function getDocments(guest) {
    const categoryRef = query(collection(db, guest), orderBy('time','desc'));
    const queryCategory = await getDocs(categoryRef);
    setCategoryItems(queryCategory.docs);
  }

  useEffect(() => {
    getDocments("guest");
  }, [guest]);

  return (
    <div id="guestBook_wrap">
      <PageAdd />
      <Title title="방명록" />
      <div className="contents_wrap">
        {categoryItems &&
          categoryItems.map((doc) => (
              <BookPage key={doc.id} data={doc.data()} />
          ))}
      </div>
    </div>
  );
}

export default GuestBook;
