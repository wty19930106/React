import React,{Component} from 'react';

class Inputs extends Component{
  constructor() {
    super();
    this.state={
      val:'miaov',
      city:'北京'
    }
  }
  changeVal=(ev)=>{
    this.setState({
      val:ev.target.value
    })
  }
  changeselect=(ev)=>{
    this.setState({
      city:ev.target.value
    })
  }
  render(){
    return (
      <div>
        <p>{this.state.city}</p>
      <input
         type="text"
         defaultValue={this.state.val}
      />
      <select value={this.state.city} onChange={this.changeselect}>
        <option>上海</option>
        <option>北京</option>
        <option>深圳</option>
      </select>
      <input type="checkbox" defaultChecked/>
    </div>
    )
  }
}
export default Inputs
