import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import NavBar from 'components/navbar';
import Footer from 'components/footer';
import Domestic from 'components/usecases/domestic';
import Fertile from 'components/usecases/fertile';
import Horeca from 'components/usecases/horeca';
import Industrial from 'components/usecases/industrial';
import Publicentities from 'components/usecases/publicentities';

import App from './App';

import './i18n';

import './index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/domestic' element={<Domestic />} />
        <Route path='/fertile' element={<Fertile />} />
        <Route path='/horeca' element={<Horeca />} />
        <Route path='/industrial' element={<Industrial />} />
        <Route path='/publicentities' element={<Publicentities />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);