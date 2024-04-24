import { useState } from "react";
import drawImg from "../assets/img/luckydraw.png";
import drawImgMove from "../assets/img/luckydraw2.gif";
import SlideTxt from "./SlideTxt";
import RandomNum from "./RandomNum";
import Title from "./Title";

function Luckydraw() {
  const [imgMove, setImgMove] = useState(false); //false면 멈춘이미지, move면 움직이는 이미지

  return (
    <div id="luckydraw_wrap">
      <Title title='운세뽑기'/>
      <div class="lucky_wrap">
        <div class="draw">
          {imgMove ? (
            <img class="draw_gif" src={drawImgMove} alt="운세뽑기" />
          ) : (
            <img class="draw_png" src={drawImg} alt="운세뽑기" />
          )}
        </div>
        {imgMove && <RandomNum />}
      </div>
      <SlideTxt />
    </div>
  );
}

export default Luckydraw;
