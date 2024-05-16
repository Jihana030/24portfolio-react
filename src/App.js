import "./css/main.css";
import "./css/root.css";
import "./css/sub.css";
import "./css/common.css";
import React from "react";
import Layout from "./components/Layout.jsx";
import { LightModeProvider } from "./components/ModeContext.jsx";

function App({ children }) {
  return (
    <LightModeProvider>
      <div className="App">
        <Layout />
        <div>{children}</div>
      </div>
    </LightModeProvider>
  );
}

export default App;
