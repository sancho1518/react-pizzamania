import Navbar from './Navbar'
import Carousel from './Carousel'
import AboutPizaa from './AboutPizza'
import PizaaTypes from './PizzaTypes'
import Footer from './Footer'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Carousel/>
      <AboutPizaa/>
      <PizaaTypes/>
      <Footer/>
    </div>
  );
}

export default App;
