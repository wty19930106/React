import React,{Component} from 'react'
import Li from './Li'

class App extends Component{
  constructor(){
    super();
    this.state={
      arr:['今天','天气','不错'],
      num:2
    }
  }
  click=()=>{
    let{arr,num}=this.state;
    let menu=Object.assign(arr);
    num++;
    menu.push(num);
    this.setState({
      arr:menu,
      num
    })
  }
  render(){
    let {arr} = this.state;
    let list =[];
    list=arr.map((e,i)=>{
      let data={
        num:i,
        key:i,
        txt:e,
      }
      if (i===1) {
        data=Object.assign(data,{className:'item'})
      }

      return(<Li {...data}/>)
    })
    return(
      <div>
        <p>{this.state.arr.length-1}</p>
      <button onClick={this.click}>点击</button>
      <ul>
        {list}
      </ul>
      </div>
    )
  }
}
export default App
