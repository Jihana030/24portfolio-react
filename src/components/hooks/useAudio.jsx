import { useEffect, useRef } from "react";
import { useState } from "react";

const useAudio = (url) => {
  const audioRef = useRef(new Audio(url));
  const audio = audioRef.current;
  const [playing, setPlaying] = useState(false);

  // 토글이 playing의 false/true를 변경시켜주고
  const toggle = () => setPlaying(!playing);

  // 그에 따라서 true면 play를, palse면 pause를 한다.
  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing, audio]);

  // ended는 미디어 재생이 끝나면 작동. playing을 false로 바꾼다.
  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, [audio]);

  return [playing, toggle];
};

export default useAudio;