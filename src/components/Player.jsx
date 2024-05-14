import React from "react";
import playImg from "../assets/img/start.png";
import useAudio from './hooks/useAudio.jsx';
import audioUrl from "../assets/img/sampleAudio.mp3";

const Player = (props) => {
  const [playing, toggle] = useAudio(audioUrl);

  props.onCheck(playing);
  return (
    <div id="play_btn" className="start_img" onClick={toggle}>
      <img
        src={playImg}
        alt="재생"
        title="클릭하시면 자기소개가 시작됩니다."
        className={playing ? "st_opacity" : ""}
      />
    </div>
  );
};

export default Player;
