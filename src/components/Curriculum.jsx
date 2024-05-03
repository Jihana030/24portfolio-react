import React from "react";
import Profile from '../assets/img/menucard04.png'
import Title from "./Title";

function Curriculum() {
  return (
    <div id="curriculum_wrap">
      <Title title={'프로필'}/>
      <div className="profile_img">
        <img src={Profile} alt="프로필사진" />
      </div>
      <div className="info_list">
        <ul></ul>
      </div>
    </div>
  )
}

export default Curriculum;