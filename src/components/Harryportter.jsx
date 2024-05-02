import React from "react";
import Title from "./Title";
import harryMain from '../assets/img/profile_replace.jpg'

function Harryportter() {
  return (
    <div id="harry_wrap">
      <Title title={"학원 마지막 프로젝트 : 호그와트 홈페이지"} />
      <div className="harry_detail">
        <div className="harry_img">
          <img src={harryMain} alt="" />
        </div>
        <div className="detail_wrap">
          <div className="title">
            <h3>페이지 제목</h3>
            <p className="arrow_wrap">
              보러가기
              <span class="material-symbols-outlined">arrow_forward</span>
            </p>
          </div>
          <div className="detail">내용</div>
        </div>
      </div>
    </div>
  );
}

export default Harryportter;
