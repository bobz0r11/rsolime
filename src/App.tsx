import Home from 'components/home';
import Sidebar from 'components/sidebar';

import OurProduct from 'components/ourproduct';
import Footer from 'components/footer';

import './App.scss'

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="content">
        <OurProduct />
        <Home />
        <Footer />
      </div>
    </div>
  );
}

export default App;