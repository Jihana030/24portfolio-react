import MainDetail from './components/MainDetail';
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Varies from "./components/Varies";

function Main() {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<MainDetail />} />
          <Route path="/:varies" element={<Varies />} />
          <Route path="/varies/luckydraw" element={<MainDetail />} />
          <Route path="/varies/guestbook" element={<MainDetail />} />
        </Routes>
      </App>
    </BrowserRouter>
  );
}

export default Main;