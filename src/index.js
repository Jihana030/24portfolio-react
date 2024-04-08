import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Varies from './components/Varies';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App>
      <Routes>
        <Route path='/' element={<App/>} />
        <Route path='/varies' element={<Varies/>} />
        <Route path='/varies/luckydraw' element={<App/>} />
        <Route path='/varies/guestbook' element={<App/>} />
      </Routes>
    </App>
  </BrowserRouter>
);
