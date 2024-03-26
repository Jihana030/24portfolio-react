import "./css/main.css";
import "./css/root.css";
import "./css/sub.css";
import "./css/common.css";
import Layout from "./components/Layout.jsx";
import MainDetail from "./components/MainDetail.jsx";

function App() {
  return (
    <div className="App">
      <Layout />
      <MainDetail/>
    </div>
  );
}

export default App;
