import { BrowserRouter as Router,Route,Link } from 'react-router-dom';
import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  render(){
    return(
      <div>
        <button><Link to="/" />回到首页</button>
        <button><Link to="/ppx" />回到首页</button>
        <p>Hello,World</p>>
      </div>
    )
  }
}

class Ppa extends Component {
  render(){
    return(
      <div>NoHello,World!</div>
    )
  }
}

class Ppx extends Component {
  render(){
    return(
      <div>hello,miaov</div>
    )
  }
}

ReactDOM.render(
  <Router>
    <div>
    <Route path="/" component={App} />
    <Route path="/ppa" component={Ppa} />
    <Route path="/ppx" component={Ppx} />
    </div>
  </Router>
  , document.getElementById('app'));
