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
          <Route path={process.env.PUBLIC_URL + "/"} element={<MainDetail />} />
          <Route path={process.env.PUBLIC_URL + "/varies"} element={<Varies />} />
          <Route path={process.env.PUBLIC_URL + "/varies/:id"} element={<CardList />} />
          <Route path={process.env.PUBLIC_URL + "/varies/luckydraw"} element={<Luckydraw />} />
          <Route path={process.env.PUBLIC_URL + "/varies/making"} element={<Making />} />
          <Route path={process.env.PUBLIC_URL + "/varies/harrypotter"} element={<Harrypotter />} />
          <Route path={process.env.PUBLIC_URL + "/varies/guestBook"} element={<GuestBook />} />
          <Route
            path={process.env.PUBLIC_URL + "/varies/guestBook/guestBookWrite"}
            element={<GuestBookWrite />}
          />
          <Route path={process.env.PUBLIC_URL + "/curriculum"} element={<Curriculum />} />
          <Route path={process.env.PUBLIC_URL + "/varies/weather"} element={<Weather />} />
        </Routes>
      </App>
    </BrowserRouter>
  );
}

export default Main;