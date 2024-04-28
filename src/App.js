import "./css/main.css";
import "./css/root.css";
import "./css/sub.css";
import "./css/common.css";
import React from "react";
import Layout from "./components/Layout.jsx";
import {  useEffect, useState } from "react";
import { db } from "./firebase.js";
import { doc, getDoc } from "firebase/firestore";

function App({ children }) {
  const [test, setTest] = useState();
  async function getTest() {
    const docRef = doc(db, 'cardList', 'Card');
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setTest(docSnap.data());
    }
  }
  useEffect(() => {
    getTest()
  },[])

  return (
    <div className="App">
      <div>{test !== undefined && <div>{test.title}</div>}</div>
      <Layout />
      <div>{children}</div>
    </div>
  );
}

export default App;