import React from 'react';
import './App.css';

const displayEmojiName = event => alert(event.target.id);
const emojis = [
  {
    emoji: "😀",
    name: "grinning face"
  },
  { 
    emoji: "🎉",
    name: "party popper"
  },
  { 
    emoji: "💃",
    name: "woman dancing"
  }
];

const displayAction = false;

function App() {
  const greetings = "greetings";

  return (
    <div className="container">
      <h1 id={greetings}>Teste, vai!!</h1>
      {displayAction && <p>Testing JSX</p>}
      <ul>
        {
          emojis.map(emoji => (
            <li key={emoji.name}>
              <button onClick={displayEmojiName}>
                <span role="img" arial-label={emoji.name} id={emoji.name}>{emoji.emoji}</span>
              </button>
            </li>
          ))
        }
      </ul>
    </div>
  );
} 

export default App;
