import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css';
import HeadModel from './components/HeadModel';
import MainModel from './components/MainModel';
import Footer from './components/footer.js'
import registerServiceWorker from './registerServiceWorker';

class App extends Component {
  constructor() {
    super();
    this.state = {
      arr: [/*{txt:'呵呵哒',checked:false,id:1}*/],
      val: '',
      hide: true, //判断footer和全选按钮是否隐藏
      num: 0, //有多少条未选中
      onOff: true, //开关控制回车才判断有多少未选中
      hash: '', //初始化hash
    }
  }
componentDidMount(){
  if (getItem('data').length) {
    this.setState({
      arr:getItem('data'),
      hide:false
    })
  }
}
  change = (val) => {
    this.setState({val: val, onOff: false})
  }
  //回车渲染列表
  keyUp = (json) => {
    let {arr} = this.state;
    let list = Object.assign(arr);
    list.push(json);
    this.setState({arr: list, val: '', hide: false, num: list.length, onOff: true})
  }

  //单选框点击
  checkboxChange = (id) => {
    let {arr} = this.state;
    let arr2 = Object.assign(arr);
    arr2.forEach((e, i) => {
      if (e.id === id) {
        e.checked = !e.checked;
      }
    })
    this.setState({arr: arr2})
  }

  //删除
  removeClick = (id) => {

    let {arr} = this.state;
    let arr2 = null;
    arr2 = arr.filter((e, i) => {
      return e.id !== id;
    });
    this.setState({arr: arr2})
    if (!arr2.length) {
      this.setState({hide: true})
    }
  }

  //全选
  allCheck = (ev) => {
    let {checked} = ev.target;
    let {arr} = this.state;
    let arr2 = Object.assign(arr);
    arr2.forEach((e, i) => {
      e.checked = checked
    })
    this.setState({arr: arr2})
  }

  //未完成和已完成
  //通过点击按钮来获取到ev.target.hash
  changeClick = (hash) => {
    let {arr} = this.state;
    let arr2 = Object.assign(arr);
    if (hash === '#/active') {
      arr2.forEach(e => {
        if (e.checked) {
          e.disp = true
        } else {
          e.disp = false
        }
      })
    } else if (hash === '#/completed') {
      arr2.forEach(e => {
        if (!e.checked) {
          e.disp = true
        } else {
          e.disp = false
        }
      })
    } else {
      arr2.forEach(e => {
        e.disp = false
      })
    }
    this.setState({hash, arr: arr2})
  }

  //清除所选项
  clearClick = () => {
    let {arr} = this.state;
    let arr2 = [];
    arr2 = arr.filter((e, i) => {
      return !e.checked
    })
    this.setState({arr: arr2})
  }

  //双击修改内容
  changeText = (data) => {
    let {arr} = this.state;
    arr.forEach(e => {
      if (data === e) {
        this.setState({arr})
      } else {
        let arr2 = Object.assign(arr);
        arr2.forEach((e, i) => {
          if (e.id === data.id) {
            arr2.splice(i, 1, data)
          }
        })
        this.setState({arr: arr2});
      }
    })
  }

  render() {
    //头部数据传递
    let data = {
      keyUp: this.keyUp,
      val: this.state.val,
      change: this.change
    }

    //判断有多少条未选中
    let {arr} = this.state;
    let arr1 = Object.assign(arr);
    if (this.state.onOff) {
      this.state.num = arr1.length;
      arr1.forEach(e => {
        if (e.checked)
          this.state.num--;
        }
      )
    }
    //footer数据传递
    let data3 = {
      hide: this.state.hide,
      num: this.state.num,
      changeClick: this.changeClick,
      clearClick: this.clearClick
    }

    //Li数据传递
    let list = [];
    list = arr.map((e, i) => {
      let data2 = {
        disp: e.disp,
        txt: e.txt,
        key: i,
        id: e.id,
        hash: this.state.hash,
        checked: e.checked,
        checkboxChange: this.checkboxChange,
        removeClick: this.removeClick,
        changeText: this.changeText,
        hide: this.state.hide
      }
      return <MainModel {...data2}/>
    })
    //判断是否全选
    let all = arr.length
      ? arr.every(e => e.checked)
      : false;


    //根据是否添加了数据来判断全选按钮是否隐藏
    let hClass = this.state.hide
      ? 'hidden'
      : 'toggle-all';

      if (arr.length) {
        localStorage.setItem('data',JSON.stringify(arr));
      }

    return (
      <div>
        <HeadModel {...data}/>
        <section className="main">
          <input className={hClass} type="checkbox" checked={all} onChange={this.allCheck}/>
          <ul className="todo-list">
            {list}
          </ul>
        </section>
        <Footer {...data3}/>
      </div>
    )
  }
}

function getItem(arr){
    return  JSON.parse(localStorage.getItem(arr))||[];
}
ReactDOM.render(<App />, document.getElementById('app'));
registerServiceWorker();
