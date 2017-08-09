import React from 'react';
import ReactDOM from 'react-dom';
/*import './index.css';
import App from './App';*/
import Ul from './demo1';
import Ppa from './demo2';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Ul />, document.getElementById('root'));
//ReactDOM.render(<Ppa />, document.getElementById('root'));
registerServiceWorker();
