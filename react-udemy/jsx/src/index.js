// Import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
const App = () => {
    const buttonText = 'Click me';

    return (
        <div>
            <label className="label" for="name">Enter name:</label>
            <input id="name" type="text" />
            <button style={{ backgroundColor: 'black', color: 'white' }}>
                {buttonText}
            </button>
        </div>
    );
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));
