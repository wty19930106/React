import { BrowserRouter as Router,Route,Link,Redirect } from 'react-router-dom';
import React,{Component} from 'react';
import ReactDOM from 'react-dom';

let boolean = false;
class App extends Component {
  constructor(){
    super();
  }
  render(){
    let h = null;
    if (!boolean) {
      h = <h1>你没有登录</h1>
    }else {
      h = <h1>Welcome</h1>
    }
    return(
      <div>
        {h}
        <Link to="public">公共页面</Link><br />
        <Link to="private">受限页面</Link>
      </div>
    )
  }
}

class Public extends Component {
  render(){
    return(
      <div>我是公共组件</div>
    )
  }
}

class Private extends Component {
  render(){
    return(
      <div>我是个人组件</div>
    )
  }
}


ReactDOM.render(
  <Router>
    <div>
      <Route path="/" component={App} />
      <Route path="/public" component={Public} />
      <Route path="/private" component={Private} />
    </div>
  </Router>
  ,document.getElementById('app'))

if (module.hot) {
  module.hot.accept();
}
