import { useState } from "react";
import drawImg from "../assets/img/luckydraw.png";
import drawImgMove from "../assets/img/luckydraw2.gif";
import SlideTxt from "./SlideTxt";
import RandomNum from "./RandomNum";
import Title from "./Title";

function Luckydraw() {
  const [imgMove, setImgMove] = useState(false); //false면 멈춘이미지, move면 움직이는 이미지
  const [randomTxt, setRandomTxt] = useState(false);
  const handleLucky = () => {
    setImgMove(true);
    const timer = setTimeout(() => {setRandomTxt(true)}, 8000);
    return () => clearTimeout(timer);
  }
  return (
    <div id="luckydraw_wrap">
      <Title title='운세뽑기'/>
      <div className="lucky_wrap">
        <div className="draw">
          {imgMove ? (
            <img className="draw_gif" src={drawImgMove} alt="운세뽑기" />
          ) : (
            <img className="draw_png" src={drawImg} alt="운세뽑기" onClick={handleLucky}/>
          )}
        </div>
        {imgMove && <RandomNum time={ randomTxt } />}
      </div>
      <SlideTxt />
    </div>
  );
}

export default Luckydraw;
