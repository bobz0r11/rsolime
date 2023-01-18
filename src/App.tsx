import Home from 'components/home';
import Sidebar from 'components/sidebar';

import About from 'components/about';
import Contact from 'components/contact';
import Portofolio from 'components/portofolio';
import Footer from 'components/footer';

import './App.scss'

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="content">
        <Home />
        <Portofolio />
        <Contact />
        <About />
        <Footer />
      </div>
    </div>
  );
}

export default App;