import { useState } from "react";

function RandomNum() {
  const [num, setNum] = useState(0);
  // setNum(() => {
  //   parseInt(Math.random() * 10);
  // });

  const txtArr = [
    "오늘은 아무것도 하지 마세요!",
    "오늘은 젤리를 <span></span>개 먹어보면 어떨까요?",
    "오늘은 빵을 <span></span>개 사보면 어떨까요?",
    "오늘은 사탕을 <span></span>개 사보면 어떨까요?",
    "오늘은 선물을 <span></span>개 해보면 어떨까요?",
    "오늘은 사람을 <span></span>명 만나보면 어떨까요?",
  ];

  const randomTxt = document.querySelector(".random_txt");
  if (num === 0) {
    randomTxt.dangerouslySetInnerHTML = { __html: txtArr[0] };
    console.log(randomTxt);
  } else {
    const txtRandom = parseInt(Math.random() * (txtArr.length - 1) + 1);
    randomTxt.dangerouslySetInnerHTML = {
      __html: txtArr[txtRandom],
    };
    randomTxt.childNodes[1].dangerouslySetInnerHTML = {
      __html: num,
    };
  }

  return (
    <div className="txt_wrap">
      <p>
        오늘 행운의 숫자는 <span className="random_num">{num}</span>입니다!
      </p>
      <p className="random_txt"></p>
    </div>
  );
}

export default RandomNum;