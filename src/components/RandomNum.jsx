import { useEffect, useState } from "react";

function RandomNum({ time }) {
  const [num, setNum] = useState(3);
  const [txt, setTxt] = useState("");

  
  useEffect(() => {
    const txtArr = [
      "오늘은 아무것도 하지 마세요!",
      `오늘은 젤리를 ${num}개 먹어보면 어떨까요?`,
      `오늘은 빵을 ${num}개 사보면 어떨까요?`,
      `오늘은 사탕을 ${num}개 사보면 어떨까요?`,
      `오늘은 선물을 ${num}개 해보면 어떨까요?`,
      `오늘은 사람을 ${num}명 만나보면 어떨까요?`,
    ];
    
    setNum(parseInt(Math.random() * 10));
    if (num === 0) {
      setTxt(()=>txtArr[0]);
    } else {
      const random = parseInt(Math.random() * (txtArr.length - 1) + 1);
      setTxt(() => txtArr[random]);
    }
    
  },[num, txt])

  return (
    <div className="txt_wrap">
      {time && (
        <p>
          오늘 행운의 숫자는 <span className="random_num">{num}</span>입니다!
        </p>
      )}
      {time && <p className="random_txt">{txt}</p>}
    </div>
  );
}

export default RandomNum;
