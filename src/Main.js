import MainDetail from './components/MainDetail';
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Varies from "./components/Varies";
import React from 'react';
import GuestBook from './components/GuestBook';
import GuestBookWrite from './components/GuestBookWrite';
import Luckydraw from './components/Luckydraw';

function Main() {
  const CardList = React.lazy(() => import("./components/CardList"));
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<MainDetail />} />
          <Route path="/varies" element={<Varies />} />
          <Route path="/varies/:id" element={<CardList />} />
          <Route path="/varies/cardList/luckyDraw" element={<Luckydraw />} />
          <Route path="/varies/cardList/guestBook" element={<GuestBook />} />
          <Route path="/varies/cardList/guestBook/guestBookWrite" element={<GuestBookWrite />} />
        </Routes>
      </App>
    </BrowserRouter>
  );
}

export default Main;