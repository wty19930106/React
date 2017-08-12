import React,{Component} from "react";
class Footer extends Component {
  //点击按钮获取hash
  changeClick=(ev)=>{
      this.props.changeClick(ev.target.hash)
  }
  //清除完成项
  clearClick=(ev)=>{
    this.props.clearClick();
  }
  render(){
    let{hide,num} = this.props;
    //根据父组件传来的hide布尔值，判断是否有数据生成，有就让footer显示
    let hClass = hide?'hidden':'footer'
    return(
    <footer
      className={hClass} >
      <span className="todo-count">
        <strong>{num}</strong>
        <span>条未选中</span>
      </span>
      <ul className="filters">
        <li>
          <a href="#/all"
          className="selected"
          onClick={this.changeClick}
          >全部</a>
        </li>
        <li>
          <a href="#/active"
          onClick={this.changeClick}
          >未完成</a>
        </li>
        <li>
          <a href="#/completed"
          onClick={this.changeClick}
          >已完成</a>
        </li>
      </ul>
      <button
        className="clear-completed"
        onClick={this.clearClick}
      >
          清除完成项
      </button>
    </footer>
    )
  }
}

export default Footer
