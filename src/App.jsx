import Home from './Components/Home'
import Header from "./Components/Header";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Myworks from './Components/Myworks';


import './style/header.scss'
import './style/home.scss'
import './style/app.scss'
 
function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Myworks />
      <About />
      <Contact />
    </div>
  );
}

export default App;
