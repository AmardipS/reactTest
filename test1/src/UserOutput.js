import React from 'react';
import './Output.css';

// Creating userOutput functional component
// Props is the properties passing to the component from other component
const userOutput = (props) => {
    return (
        <div className='output'>
            {/* Attaching onClick event to the paragraph */}
            <p onClick={props.click} >The user is: {props.userName} and ID is {props.id}</p>
        </div>
    );
}

export default userOutput;