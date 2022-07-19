import boradori from './boradori.png'
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={boradori} className="open-pic" alt="boradori" />
        <p>
          I'm working on! 🚧
        </p>
        <p>
          by boraborayoon 💜
        </p>
      </header>
      <Footer/>
    </div>
  );
}

export default App;
