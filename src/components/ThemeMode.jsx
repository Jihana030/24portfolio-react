import React from "react";
import { useLightMode } from "./ModeContext";

function ThemeMode() {
  const { isLightMode, toggleLightMode } = useLightMode();
  return (
    <div className="themWrap" onClick={toggleLightMode}>
      <span className={"material-symbols-rounded " + (isLightMode ? "choice" : "")}>
        light_mode
      </span>
      <span className={"material-symbols-rounded " + (isLightMode ? "" : "choice")}>dark_mode</span>
      <p className={"choiceRound " + (isLightMode ? 'left' : 'right')}></p>
    </div>
  );
}

export default ThemeMode;