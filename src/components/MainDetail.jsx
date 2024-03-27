import profileImg from "../assets/img/profile_replace.jpg";
import Player from "./Player";

function MainDetail() {

  return (
    <section id="introduce">
      <div className="audio_wrap">
        <div id="prf_img" className="profile_img">
          <img src={profileImg} alt="대체이미지" />
        </div>
        <Player/>
      </div>
      <div className="audio_cnt">
        <audio id="prf_audio" src=""></audio>
      </div>
      <div className="subtitle_wrap">
        <p>안녕하세요.</p>
      </div>
    </section>
  );
}

export default MainDetail;
