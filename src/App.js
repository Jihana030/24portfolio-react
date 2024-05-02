import "./css/main.css";
import "./css/root.css";
import "./css/sub.css";
import "./css/common.css";
import React from "react";
import Layout from "./components/Layout.jsx";

function App({ children }) {
  return (
    <div className="App">
      <Layout />
      <div>{children}</div>
    </div>
  );
}

export default App;