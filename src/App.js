import './App.css';
import About from './components/about/About';
import Calculatrice from './components/calculatrice/Calculator';
import Contact from './components/contact/contact';
import Service from './components/contact/Service';
import ExoState from './components/ExoState';
import UseStateHook from './components/UseStateHook';
import Home from './Home';


function App() {
  return (
    <div className="App"> 
      <h1>Welcome to my project</h1>
      <Home/>
      <Contact/>
      <Service/>
      <About name = {"Ines"} age = {19} />
      <About name = {"Dyhia"} age = {21} />
      <Calculatrice note1 ={15} note2 ={12}/>

      <UseStateHook/>
      <ExoState/>

    </div>
  );
}

export default App;
