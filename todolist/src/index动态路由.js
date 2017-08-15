import { BrowserRouter as Router,Route,Link } from 'react-router-dom';
import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  render(){
    return(
      <div>
        <button>
          <Link to="/">回到首页</Link>
        </button>
        <p>Hello,World</p>
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

let arr = [
  {
    name:'app',
    component:<App />
  },
  {
    name:'ppa',
    component:<Ppa />
  },{
    name:'ppx',
    component:<Ppx />
  }
]

let routers = (obj)=> {
  let {match} = obj;
  let f = null;
  f = arr.find(e => {
    if (e.name === match.params.id) {
      return e;
    }
  });
  if (!f) {
    return <App />
  }else {
    return f.component
  }
}

class Home extends Component {
  render (){
    return(
      <div>你好！！世界！</div>
    )
  }
}
ReactDOM.render(
  (
    <Router>
      <div>
      <ul>
        <li><Link to="app">跳转到App</Link></li>
        <li><Link to="ppa">跳转到PPA</Link></li>
        <li><Link to="ppx">跳转到PPX</Link></li>
      </ul>
      <Route path="/" component={Home}/>
      <Route path="/:id" component={routers}/>
    </div>
    </Router>
  ),document.getElementById('app')
)
