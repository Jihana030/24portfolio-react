import React from "react";
import { createContext, useContext, useState } from "react";

// 테마상태 저장/토글하는 context
const ThemeModeContext = createContext();
// 테마상태를 제공하는 provider 컴포넌트 생성
export const LightModeProvider = ({ children }) => {
  // 상태를 useState를 통해 관리
  const [isLightMode, setIsLightMode] = useState(false);
  const toggleLightMode = () => {
    setIsLightMode(!isLightMode);
  }

  // provider컴포넌트에서 자식컴포넌트에 전달
  return (
    <ThemeModeContext.Provider value={{ isLightMode, toggleLightMode }}>
      {children}
    </ThemeModeContext.Provider>
  );
}

export const useLightMode = () => useContext(ThemeModeContext);
