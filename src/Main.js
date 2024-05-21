import MainDetail from './components/MainDetail';
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Varies from "./components/Varies";
import React from 'react';
import GuestBook from './components/GuestBook';
import GuestBookWrite from './components/GuestBookWrite';
import Luckydraw from './components/Luckydraw';
import Making from './components/Making';
import Harrypotter from './components/Harrypotter';
import Curriculum from './components/Curriculum';
import Weather from './components/Weather';

function Main() {
  const CardList = React.lazy(() => import("./components/CardList"));
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App>
        <Routes>
          <Route path="/" element={<MainDetail />} />
          <Route path="/varies" element={<Varies />} />
          <Route path="/varies/:id" element={<CardList />} />
          <Route path="/varies/luckydraw" element={<Luckydraw />} />
          <Route path="/varies/making" element={<Making />} />
          <Route path="/varies/harrypotter" element={<Harrypotter />} />
          <Route path="/varies/guestBook" element={<GuestBook />} />
          <Route path="/varies/guestBook/guestBookWrite" element={<GuestBookWrite />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/varies/weather" element={<Weather />} />
        </Routes>
      </App>
    </BrowserRouter>
  );
}

export default Main;