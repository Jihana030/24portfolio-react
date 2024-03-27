import playImg from "../assets/img/start.png";
import useAudio from './hooks/useAudio.jsx';

const Player = ({ url: audioUrl }) => {
  const [playing, toggle] = useAudio(audioUrl);

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
