import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Route,Redirect,withRouter,Switch} from 'react-router-dom';
import App from './App';
import {message} from 'antd';
import Login from './components/Login';
import registerServiceWorker from './registerServiceWorker';

class Indexpage extends Component {
  constructor() {
    super();
    this.state={
      bool:false,
      logdata:[
        {user:'admin',pass:'123456'}
      ]
    }
  }
  checklog = (username,password) =>{
    let {logdata} = this.state;
    let arr1 = Object.assign(logdata);
    let arr3 = [];
    if (localStorage.getItem('usermessage')) {
      let arr2 = JSON.parse(localStorage.getItem('usermessage'));
      arr3 = arr1.concat(arr2);
    }else {
      arr3 = arr1;
    }
    let n =0;
    arr3.forEach((e,i) =>{
      if (e.user===username&&e.pass===password) {
        this.setState({
          bool:true
        })
          message.success('登录成功');
      }else {
        n++;
        if (n==arr3.length) {
            message.error('用户名或密码错误！')
        }
      }
    })
  }
  render(){
    let {bool} = this.state;
    return(
      <Router>
        <Switch>
          <Route exact path="/" render={()=>{
            return <Login checklog={this.checklog}/>
          }}/>
          <Route  path="/home"  render={()=>{
            if(bool){
              return <App />
            }else{
              return <Redirect to="/" />
            }
          }} />
        </Switch>
      </Router>
    )
  }
}
ReactDOM.render(<Indexpage />, document.getElementById('root'));
registerServiceWorker();

if (module.hot) {
  module.hot.accept();
}
