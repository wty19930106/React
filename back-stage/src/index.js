import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import App from './App';
import Login from './components/Login';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Router>
  <div>
    <Route  path="/" exact component={Login} />
    <Route  path="/home"  component={App} />
  </div>
</Router>, document.getElementById('root'));
registerServiceWorker();

if (module.hot) {
  module.hot.accept();
}
