import Home from 'components/home';
import Sidebar from 'components/sidebar';
import Philosophy from 'components/philosophy';
import History from 'components/history';
import Footer from 'components/footer';

import './App.scss';

const reveal = () => {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", () => reveal());

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="content">
        <Home />
        <Philosophy />
        <History />
        <Footer />
      </div>
    </div>
  );
}

export default App;