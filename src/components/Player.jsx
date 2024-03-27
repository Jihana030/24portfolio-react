import { useEffect } from "react";
import { useState } from "react";
import playImg from "../assets/img/start.png";

const useAudio = (url) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    }
  }, []);

  return [playing, toggle];
};

const Player = ({ url }) => {
  const [playing, toggle] = useAudio(url);

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
}

export default Player;
