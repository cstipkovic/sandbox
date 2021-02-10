import './App.css';

import Spacing from './components/Spacing/Spacing'

const t = () => {
  console.log('teste');
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Edit <code>src/App.js</code> and save to reload.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main>
        <p>First text</p> 
        <Spacing className="spacing-xxxl" />
        <img alt="teste" src="https://image.shutterstock.com/image-vector/symbol-service-dinner-jacket-bow-260nw-1332390116.jpg" onLoad={t()} />
        <p>Text test</p>
      </main>
    </div>
  );
}

export default App;
