import './App.css';
import SentenceForm from './components/sentenceform';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Character Count App</h1>
        <p>This app can be used to count all the characters in a sentence.</p>
      </header>
      <SentenceForm></SentenceForm>
    </div>
  );
}

export default App;
