import React from "react";

function RandomNum({ num, txt, time }) {

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
