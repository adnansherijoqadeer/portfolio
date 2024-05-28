
import './App.css';
import About from './component/About';
import MyWork from './component/MyWork';
import Navbar from './component/Navbar';
import OurServices from './component/OurServices';
import Skill from './component/Skill';
import Slider from './component/Slider';

function App() {
  return (
  <div>
  <Navbar/>
  <Slider/>
  <About/>
  <Skill/>
  <OurServices/>
  <MyWork/>
  </div>
  );
}

export default App;
