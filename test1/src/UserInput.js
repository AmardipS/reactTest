import React from 'react';
import './Input.css';

// Creating userInput Functional component
const userInput = (props) => {
    return (
        <div className='input'>
            <input type="text" onChange={props.change} value={props.userName}/>
        </div>
    );
}

export default userInput;