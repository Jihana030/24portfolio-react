import { useEffect } from "react";

function RandomTxt({ num }) {
  const txtArr = [
    "오늘은 아무것도 하지 마세요!",
    "오늘은 젤리를 <span></span>개 먹어보면 어떨까요?",
    "오늘은 빵을 <span></span>개 사보면 어떨까요?",
    "오늘은 사탕을 <span></span>개 사보면 어떨까요?",
    "오늘은 선물을 <span></span>개 해보면 어떨까요?",
    "오늘은 사람을 <span></span>명 만나보면 어떨까요?",
  ];
  const randomTxt = document.querySelector(".random_txt");
  useEffect(() => {
    const timer = setTimeout(() => {
      if (num === 0) {
        randomTxt.dangerouslySetInnerHTML={ __html: `${txtArr[0]}`}
    } else {
        const txtRandom = parseInt(Math.random() * (txtArr.length - 1) + 1);
        randomTxt.dangerouslySetInnerHTML = {
          __html: `${txtArr[txtRandom]}`,
        };
        randomTxt.childNodes[1].dangerouslySetInnerHTML = {
          __html: `${num}`,
        };
      }
    }, 8000)
    return () => clearTimeout(timer);
  })
  
  return <p class="random_txt"></p>;
}

export default RandomTxt;
