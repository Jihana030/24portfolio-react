import React from "react";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLightMode } from "./ModeContext";

function GuestBookWrite() {
  const [userName, setUserName] = useState("");
  const [detail, setDetail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const changeName = (e) => {
    setUserName(e.target.value);
  };
  const changeDetail = (e) => {
    setDetail(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let result;
    try {
      const ref = collection(db, "guest");
      result = await addDoc(ref, { //eslint-disable-line no-unused-vars
        name: userName,
        detail: detail,
        time: Timestamp.fromDate(new Date()),
      });
      navigate("/varies/guestBook");
      setIsLoading(true);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const { isLightMode } = useLightMode();

  return (
    <div id="guestBook_wrap" className={isLightMode ? "light" : "dark"}>
      <div className="title">
        <h2>글쓰기</h2>
      </div>
      <div id="guestbook-container" className="form_wrap">
        <form id="leave-message" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">이름</label>
            <input id="name" type="text" value={userName} onChange={changeName} />
          </div>
          <div>
            <label htmlFor="detail">내용</label>
            <textarea
              name="detail"
              id="detail"
              value={detail}
              onChange={changeDetail}
              placeholder="저장하시면 수정/삭제 불가합니다."
            ></textarea>
          </div>
          <div className="write_btn">
            <button type="reset">다시쓰기</button>
            <button type="submit" disabled={isLoading}>저장</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default GuestBookWrite;
