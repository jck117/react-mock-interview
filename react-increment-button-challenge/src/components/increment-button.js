import React from 'react';
import App from './app.js';

export default function IncrementButton(props) {
    //console.log(props)
    return <button onClick={props.onClick}>Increment</button>;
}

