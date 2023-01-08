import Home from 'components/home';
import Philosophy from 'components/philosophy';
import History from 'components/history';

import './App.scss';

const reveal = () => {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
      reveals[i].classList.remove("reveal");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", () => reveal());

const App = () => {
  return (
    <div className="app">
      <div className="content">
        <Home />
        <Philosophy />
        <History />
      </div>
    </div>
  );
}

export default App;