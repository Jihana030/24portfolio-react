import MainDetail from "./components/MainDetail";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Varies from "./components/Varies";
import React from "react";
import GuestBook from "./components/GuestBook";
import GuestBookWrite from "./components/GuestBookWrite";
import Luckydraw from "./components/Luckydraw";
import Making from "./components/Making";
import Harrypotter from "./components/Harrypotter";
import Curriculum from "./components/Curriculum";
import Weather from "./components/Weather";
import Chartcnt from "./components/Chartcnt";

function Main() {
  const CardList = React.lazy(() => import("./components/CardList"));
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App>
        <Routes>
          <Route path="/" element={<MainDetail />} />
          <Route path="varies">
            <Route index element={<Varies />} />
            <Route path=":id" element={<CardList />} />
            <Route path="luckydraw" element={<Luckydraw />} />
            <Route path="making" element={<Making />} />
            <Route path="harrypotter" element={<Harrypotter />} />
            <Route path="guestBook" element={<GuestBook />} />
            <Route path="guestBook/guestBookWrite" element={<GuestBookWrite />} />
            <Route path="weather" element={<Weather />} />
            <Route path="chart" element={<Chartcnt />} />
          </Route>
          <Route path="curriculum" element={<Curriculum />} />
        </Routes>
      </App>
    </BrowserRouter>
  );
}

export default Main;
