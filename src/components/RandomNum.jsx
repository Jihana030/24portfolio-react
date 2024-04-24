import { useState } from "react";
import RandomTxt from "./RandomTxt";

function RandomNum() {
  const [num, setNum] = useState(0);
  setNum(() => {
    parseInt(Math.random() * 10);
  });
  return (
    <div class="txt_wrap">
      <p>
        오늘 행운의 숫자는 <span class="random_num">{num}</span>입니다!
      </p>
      <RandomTxt num={ num } />
    </div>
  );
}

export default RandomNum;