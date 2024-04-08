import "./css/main.css";
import "./css/root.css";
import "./css/sub.css";
import "./css/common.css";
import Layout from "./components/Layout.jsx";
import MainDetail from "./components/MainDetail.jsx";
import { useEffect, useState } from "react";
import { db } from "./firebase.js";
import { doc, getDoc } from "firebase/firestore";

function App() {
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
      <MainDetail />
    </div>
  );
}

export default App;