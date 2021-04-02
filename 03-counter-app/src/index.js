import React from 'react';
import ReactDOM from 'react-dom';
import CounterApp from './CounterApp';
//import PrimeraApp from './PrimeraApp';

import './index.css';

const divRoot = document.querySelector('#root');

// ReactDOM.render(<PrimeraApp saludo="Hola Richie!" />, divRoot);
ReactDOM.render(<CounterApp />, divRoot);
