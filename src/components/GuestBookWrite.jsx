import { Timestamp, addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import { useState } from "react";
import { Link} from "react-router-dom";

function GuestBookWrite() {
  const [userName, setUserName] = useState('');
  const [detail, setDetail] = useState('');

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
