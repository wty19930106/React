import React,{Component} from 'react';
import Li from './Li';


class Todo extends Component {
  constructor() {
      super();
      this.state={
        val:'',
        arr:['这是一条数据']
      }
  }
  keyUp=(ev)=>{
    if (ev.keyCode===13) {
      let{arr}=this.state;
      let list =Object.assign(arr);
      list.push(ev.target.value);
      this.setState({
        arr:list,
        val:''
      })
    }
  }
  change=(ev)=>{
    this.setState({
      val:ev.target.value
    })
  }
  render(){
    let {arr}=this.state;
    let list=[];
    list=arr.map((e,i)=>{
      let data={
        key:i,
        txt:e,
        num:i
      }
      return <Li {...data}/>
    })
    return(
      <div>
        <input
          type="text"
          value={this.state.val}
          onChange={this.change}
          onKeyUp={this.keyUp}
        />
        <ul>
          {list}
        </ul>
      </div>
    )
  }
}
export default Todo
