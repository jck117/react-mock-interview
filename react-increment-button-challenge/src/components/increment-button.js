import React from 'react';
import App from './app.js';

export default function IncrementButton(props) {
    return <button onClick={props.incButton}>Increment</button>;
}