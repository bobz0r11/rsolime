import Home from 'components/home';
import Sidebar from 'components/sidebar';

import About from 'components/about';
import Contact from 'components/contact';
import OurProduct from 'components/ourproduct';
import Footer from 'components/footer';

import './App.scss'

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="content">
        <Home />
        <OurProduct />
        <Contact />
        <About />
        <Footer />
      </div>
    </div>
  );
}

export default App;