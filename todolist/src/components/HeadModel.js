import React,{Component} from "react";

class HeadModel extends Component{
  //input的书写
  change=(ev)=>{
    this.props.change(ev.target.value)
  }
  //回车之后生成新的数据
  keyUp=(ev)=>{
    if (ev.keyCode===13&&ev.target.value) {
      let json={
        txt:ev.target.value,
        id: +new Date(),
        checked:false,
        disp:false
      }
      this.props.keyUp(json)
    }
  }
  render(){
    return (
      <header className="header" >
          <h1>todos</h1>
          <input
            className="new-todo"
            placeholder="请输入内容"
            value={this.props.val}
            onChange={this.change}
            onKeyUp={this.keyUp}
          />
      </header>
    )
  }
}

export default HeadModel;
