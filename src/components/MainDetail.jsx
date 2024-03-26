import { useState } from "react";

// function audio(playBtn) {
//   // audio pause
//   playBtn.addEventListener("click", (e) => {
//     if (playBtn.classList.contains("st_opacity")) {
//       prfAudio.pause();
//       playBtn.classList.remove("st_opacity");
//       console.log("pause");
//     } else {
//       // audio play
//       prfAudio.play();
//       playBtn.classList.add("st_opacity");
//       console.log("play");
//     }
//   });
// }

function MainDetail() {
  const [audio, setAudio] = useState(false);
  const [play, setPlay] = useState(true);

  return (
    <section id="introduce">
      <div className="audio_wrap">
        <div id="prf_img" className="profile_img">
          <img src="./img/profile_replace.jpg" alt="대체이미지" />
        </div>
        <div id="play_btn" className={`start_img ${audio ? "st_opacity" : ""}`}>
          <img
            src="./assets/img/start.png"
            alt="재생"
            title="클릭하시면 자기소개가 시작됩니다."
          />
        </div>
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
