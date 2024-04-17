import MainDetail from './components/MainDetail';
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Varies from "./components/Varies";
import React from 'react';
import GuestBook from './components/GuestBook';

function Main() {
  const CardList = React.lazy(() => import("./components/CardList"));
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<MainDetail />} />
          <Route path="/varies" element={<Varies />} />
          <Route path="/varies/:id" element={<CardList />} />
          <Route path="/varies/cardList/luckydraw" element={<MainDetail />} />
          <Route path="/varies/cardList/guestBook" element={<GuestBook />} />
        </Routes>
      </App>
    </BrowserRouter>
  );
}

export default Main;