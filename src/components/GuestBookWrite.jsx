import { Timestamp, addDoc, collection, doc, onSnapshot, orderBy } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";

function GuestBookWrite() {
  const [submit, setSubmit] = useState('');
  const [title, setTitle] = useState('제목');
  const [userName, setUserName] = useState('이름');
  const [detail, setDetail] = useState('내용');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const ref = collection(db, "guest");
    await addDoc(ref, {
      title: title,
      name: userName,
      detail: detail,
      time: Timestamp.fromDate(new Date()),
    });
  };

  return (
    <div id="guestBook_wrap">
      <div className="title">
        <h2>글쓰기</h2>
      </div>
      <div id="guestbook-container" className="form_wrap">
        <form id="leave-message">
          <div>
            <label htmlFor="title">제목</label>
            <input id="title" type="text" value={title} autofocus />
          </div>
          <div>
            <label htmlFor="name">이름</label>
            <input id="name" type="text" value={userName}/>
          </div>
          <div>
            <label htmlFor="detail">내용</label>
            <textarea name="detail" id="detail" value={detail}></textarea>
          </div>
          <div className="write_btn">
            <button type="reset">다시쓰기</button>
            <button type="submit" onSubmit={handleSubmit}>저장</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default GuestBookWrite;
