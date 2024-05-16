import React, { useState } from "react";
import profileImg from "../assets/img/profile.jpg";
import Player from "./Player";
import Subtitle from "./Subtitle";
import { useLightMode } from "./ModeContext";

function MainDetail(props) {
  const [checkData, setCheckData] = useState(false);
  const checkClick = (check) => {
    setCheckData(check);
  }
  const { isLightMode } = useLightMode();
  return (
    <section id="introduce" className={isLightMode ? "light" : "dark"}>
      <div className="audio_wrap">
        <div id="prf_img" className={"profile_img " + (checkData ? "shadow" : "")}>
          <img src={profileImg} alt="프로필사진" />
        </div>
        <Player onCheck={checkClick} />
      </div>
      <Subtitle />
    </section>
  );
}

export default MainDetail;
