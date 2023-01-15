import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';

import About from 'components/about';
import Contact from 'components/contact';
import PageNotFound from 'components/pagenotfound';
import Portofolio from 'components/portofolio';

import App from './App';

import './index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PageNotFound />,
  },
  {
    path: "/portofolio",
    element: <Portofolio />,
    errorElement: <PageNotFound />,
  },
  {
    path: "/contact",
    element: <Contact />,
    errorElement: <PageNotFound />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <PageNotFound />,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);