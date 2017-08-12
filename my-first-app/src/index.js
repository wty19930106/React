import React from 'react';
import ReactDOM from 'react-dom';
//import App from './component/App';
/*import Inputs from './component/inputs';
import Todo from './component/todo';*/
import CtoP from './component/CtoP';
import registerServiceWorker from './registerServiceWorker';
//ReactDOM.render(<Todo />, document.getElementById('root'));
ReactDOM.render(<CtoP />, document.getElementById('root'));
//ReactDOM.render(<Inputs />, document.getElementById('root'));
//ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
if (module.hot) {
  module.hot.accept();

}
