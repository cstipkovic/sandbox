import React from 'react';
import emoji from './emoji.svg';

import './Instructions.css';

const Instructions = () => {
    return (
        <div className="instructions">
            <img alt="laughing crying emoji" src={emoji} />
            <p>Click on emoji to vew the emoji short name.</p>
        </div>
    );
}

export default Instructions;