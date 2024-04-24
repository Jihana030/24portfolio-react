import { Timestamp, addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";

function GuestBookWrite() {
  const [title, setTitle] = useState('');
  const [userName, setUserName] = useState('');
  const [detail, setDetail] = useState('');

  const changeTitle = (e) => {
    setTitle(e.target.value);
  }
  const changeName = (e) => {
    setUserName(e.target.value);
  }
  const changeDetail = (e) => {
    setDetail(e.target.value);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const ref = collection(db, "guest");
    await addDoc(ref, {
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
        <form id="leave-message" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">제목</label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={changeTitle}
              autoFocus
            />
          </div>
          <div>
            <label htmlFor="name">이름</label>
            <input
              id="name"
              type="text"
              value={userName}
              onChange={changeName}
            />
          </div>
          <div>
            <label htmlFor="detail">내용</label>
            <textarea
              name="detail"
              id="detail"
              value={detail}
              onChange={changeDetail}
            ></textarea>
          </div>
          <div className="write_btn">
            <button type="reset">다시쓰기</button>
            <button type="submit">
              <Link to={'/varies/cardList/guestBook'}>저장</Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default GuestBookWrite;
