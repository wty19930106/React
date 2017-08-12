import React,{Component} from "react";
class MainModel extends Component{
  constructor(){
    super();
    this.state={
      db:false,
      k:false
    }
  }
  //li单选框的判断函数
  checkboxChange=(ev)=>{
    this.props.checkboxChange(this.props.id)
  }
  //li的点X删除数据
  removeClick=(ev)=>{
    this.props.removeClick(this.props.id)
  }
  //li的双击事件
  dbclick=()=>{
    this.setState({
      db:true,//看是否双击
      k:false//布尔值控制ESC时候不走blur事件
    },()=>{
      this.db.focus();
    })
  }
  //input的失焦
  blur=()=>{
    let {id,checked,txt}=this.props;
    //如果有值并且不是按ESC失焦
    if (this.db.value&&this.state.k===false) {
      let newData={
        txt:this.db.value,
        id:id,
        checked:checked
      }
      this.props.changeText(newData)
    //没修改就回复到之前状态
    }else {
      let oldData={
        txt,
        id,
        checked
      }
      this.db.value=this.props.txt;
      this.props.changeText(oldData)
    }
    this.setState({
      db:false,
      k:false
    })

  }
  //键盘事件 回车时候和ESC时候
  textup = (ev) => {
    if (ev.keyCode === 13) {
      let {id,checked}=this.props;
      let newData={
        txt:this.db.value,
        id:id,
        checked:checked
      }
      this.props.changeText(newData)
      this.setState({
        db:false
      })
    }
    //按ESC时，获取之前的数据
    if (ev.keyCode === 27) {
      let {id,checked,txt}=this.props;
      let oldData={
        txt,
        id,
        checked
      }
      this.props.changeText(oldData)
      this.setState({
        db:false,
        k:true//为真，就不走blur，数据变回之前的数据
      })
    }
  }
  render(){
    let {txt,checked,disp}=this.props;
    let sClass=checked?'completed':'';//判断是否选中
    if(this.state.db){
      //双击了
      sClass += ' editing';
    }
    if (disp) {
      //如果li的disp属性为真 就让它隐藏
        sClass += ' hidden';
    }
    return (
        <li className={sClass}>
            <div className="view">
                <input
                  className="toggle"
                  type="checkbox"
                  checked={checked}
                  onChange={this.checkboxChange}/>
                <label
                  onDoubleClick = {this.dbclick}
                  >{txt}</label>
                <button
                  className="destroy"
                  onClick={this.removeClick}
                  ></button>
            </div>
            <input
              ref = {(elem) => {this.db = elem}}
              className ="edit"
              onBlur = {this.blur}
              onKeyUp={this.textup}
            />
        </li>
    )
  }
}
export default MainModel;
