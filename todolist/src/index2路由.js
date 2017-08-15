import { BrowserRouter as Router,Route,Link } from 'react-router-dom';
import React,{Component} from 'react';
import ReactDOM from 'react-dom';


class App extends Component {
  render(){
    return(
      <div>
        <button><Link to="/">回到首页</Link></button>
        <button><Link to="/ppa">找PPA</Link></button>
        <p>Hello,World</p>
      </div>
    )
  }
}

class Ppa extends Component {
  render(){
    return(
      <div>
      <button><Link to="/ppx">找PPX</Link></button>
      <div>NoHello,World!</div>
      </div>
    )
  }
}

class Ppx extends Component {
  render(){
    return(
      <div>
        <button><Link to="/ppa">找PPA</Link></button>
        <button><Link to="/">找PPX</Link></button>
        <div>hello,miaov</div>
    </div>
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
    </Router>, document.getElementById('app'));
