import React,{Component} from 'react';

export default class CtoP extends Component {
  constructor() {
    super();
    this.state={
      arr:[
        {text:'一个对象',checked:false,id:1},
        {text:'二个对象',checked:false,id:2},
        {text:'三个对象',checked:false,id:3},
        {text:'四个对象',checked:false,id:4}
      ]
    }
  }
  changeChild=(id)=>{
    let {arr}=this.state;
    let arr2=Object.assign(arr);
    arr2.forEach((e,i)=>{
      if(e.id===id){
        e.checked=!e.checked
      }
    })
    this.setState({
      arr:arr2
    })
  }
  render(){
    let {arr}=this.state;
    let list = [];
    list=arr.map((e,i)=>{
      let data={
        txt:e.text,
        num:i,
        key:i,
        checked:e.checked,
        id:e.id,
        changeChild:this.changeChild
      }
      return <Li {...data} />
    })
    return(
      <ul>{list}</ul>
    )
  }
}

class Li extends Component {
  change=()=>{
    this.props.changeChild(this.props.id)
  }
  render(){
    return(
      <li>
      <input
        type="checkbox"
        checked={this.props.checked}
        onChange={this.change}
      />
      <span>{this.props.txt}</span>
      </li>
    )
  }
}
