import React from "react";
import makingImg from '../assets/img/making.gif'
import Title from "./Title";

function Making() {
  return (
    <div id="making_wrap">
      <Title title={'제작 중입니다.'}/>
      <div className="making">
        <img src={makingImg} alt={'프로필사진'} />
      </div>
    </div>
  )
}
export default Making;