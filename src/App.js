import boradori from './boradori.png'
import './App.css';
import Footer from './components/Footer';
import TitleBar from './components/TitleBar';

function App() {
  return (
    <div className="App">
      <TitleBar/>
        <img src={boradori} className="open-pic" alt="boradori"/>
        <p>
          I'm working on! 🚧
        </p>
        <p>
          by boraborayoon 💜
        </p>
      <Footer/>
    </div>
  );
}

export default App;
