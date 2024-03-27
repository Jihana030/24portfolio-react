import audioUrl from "../assets/img/sampleAudio.mp3";

function AudioPlayer() {
  return (
    <div className="audio_cnt">
      <audio id="prf_audio" src={audioUrl}></audio>
    </div>
  );
}

export default AudioPlayer;