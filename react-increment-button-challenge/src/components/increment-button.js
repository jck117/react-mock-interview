import React from 'react';
import App from './app.js';

export default function IncrementButton(props) {
    //console.log(props)
    return <button onClick={props.onClick}>Increment</button>;
}

//Note: Not certain if Akiva was saying this was a better solution or he was saying my code was not optimal because it was doing the same as this