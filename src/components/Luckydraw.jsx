import React from "react";
import { useState } from "react";
import drawImg from "../assets/img/luckydraw.png";
import drawImgMove from "../assets/img/luckydraw2.gif";
import SlideTxt from "./SlideTxt";
import RandomNum from "./RandomNum";
import Title from "./Title";

function Luckydraw() {
  const [imgMove, setImgMove] = useState(false); //false면 멈춘이미지, move면 움직이는 이미지
  const [randomTxt, setRandomTxt] = useState(false); //setTimeout 후 텍스트 나오도록
  const [num] = useState(parseInt(Math.random() * 10));
  const [txt, setTxt] = useState("");
  const luckyTxt = ()=>{
    const txtArr = [
      "오늘은 아무것도 하지 마세요!",
      `오늘은 젤리를 ${num}개 먹어보면 어떨까요?`,
      `오늘은 빵을 ${num}개 사보면 어떨까요?`,
      `오늘은 사탕을 ${num}개 사보면 어떨까요?`,
      `오늘은 선물을 ${num}개 해보면 어떨까요?`,
      `오늘은 사람을 ${num}명 만나보면 어떨까요?`,
    ];
    setRandomTxt(true);
    if (num === 0) {
      setTxt(txtArr[0]);
    } else {
      const random = parseInt(Math.random() * (txtArr.length - 1) + 1);
      setTxt(txtArr[random]);
    }
  }

  const handleLucky = () => {
    setImgMove(true);
    const timer = setTimeout(() => {luckyTxt()}, 8000);
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
        {imgMove && <RandomNum num={num} txt={txt} time ={randomTxt}/>}
      </div>
      <SlideTxt />
    </div>
  );
}

export default Luckydraw;
