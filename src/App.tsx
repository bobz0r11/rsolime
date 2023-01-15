import Home from 'components/home';
import Sidebar from 'components/sidebar';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import About from 'components/about';
import Contact from 'components/contact';
import PageNotFound from 'components/pagenotfound';
import Portofolio from 'components/portofolio';

import './App.scss'

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route
              path='/'
              element={<Home />}
              errorElement={<PageNotFound />}
            />
            <Route
              path='/portofolio'
              element={<Portofolio />}
              errorElement={<PageNotFound />}
            />
            <Route
              path='/contact'
              element={<Contact />}
              errorElement={<PageNotFound />}
            />
            <Route
              path='/about'
              element={<About />}
              errorElement={<PageNotFound />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;