import React from "react";
import profileImg from "../assets/img/profile.jpg";
import AudioPlayer from "./AudioPlayer";
import Player from "./Player";
import Subtitle from "./Subtitle";


function MainDetail() {

  return (
    <section id="introduce">
      <div className="audio_wrap">
        <div id="prf_img" className="profile_img">
          <img src={profileImg} alt="대체이미지" />
        </div>
        <Player/>
      </div>
      <AudioPlayer/>
      <Subtitle/>
    </section>
  );
}

export default MainDetail;
