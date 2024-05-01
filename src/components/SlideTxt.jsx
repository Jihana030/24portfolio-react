import React, { useState } from "react";
function SlideTxt() {
  const [animate, setAnimate] = useState(true);
  const onStop = () => setAnimate(false);
  const onRun = () => setAnimate(true);

  return (
    <div className="txt_slide_wrap">
      <div className="roller">
        <ul
          className="track"
          onMouseEnter={onStop}
          onMouseLeave={onRun}
        >
          <div className={"slide original ".concat(animate ? "" : "stop")}>
            <li>뽑기기계를 누르면 오늘의 운세가 나옵니다!</li>
            <li>오늘의 운세가 몇 점일지 한 번 뽑아보세요!</li>
          </div>
          <div className={"slide clone ".concat(animate ? "" : "stop")}>
            <li>뽑기기계를 누르면 오늘의 운세가 나옵니다!</li>
            <li>오늘의 운세가 몇 점일지 한 번 뽑아보세요!</li>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default SlideTxt;
