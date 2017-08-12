import React,{Component} from 'react';
import '../CSS/index.css'

class Li extends Component{
  render(){
    return(
      <li className={this.props.className}>
        <span className="page">{this.props.num} </span>
        <span className="txt">{this.props.txt}</span>
      </li>
    )
  }
}
export default Li;
