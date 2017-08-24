import React,{Component} from 'react';
import $ from "jquery";
import '../css/contentList.css';
import { Pagination,Button,Input,Card } from 'antd';

class Music extends Component {
  constructor(){
    super();
    this.state={
      data:[],
      num:0
    }
  }
  Model = (val,num) => {
    let _this=this;
    $.ajax({
      url:'https://api.douban.com/v2/music/search?callback=?',
  		dataType:'jsonp',
  		data:{
  			q:val,
  			start:(num-1)*8,
  			count:8
  		},
      success:function(json){
        _this.setState({
          data:json,
          num:(num-1)*8
        })
      }
    })
  }
  click = () =>{
    let val = $('input').val();
    this.Model(val);
  }
  change = (ev) =>{
    console.log(ev);
    let val = $('input').val();
    this.Model(val,ev);
  }
  render(){
    let {data} =this.state;
    let data2 = [];
    console.log(data.musics);
    if (data.musics) {
      data2 = data.musics.map((e,i)=>{
        let musiclist={
          img:e.image,
          title:e.title,
          key:i,
          singer:e.attrs.singer[0]
        }
        return <Musiclist {...musiclist}/>
      })
    }
    return(
      <div style={{width:1290,height:628}}>
        <Input
          placeholder="search music"
          style={{width:300,marginRight:10,marginTop:10,marginLeft:450}}
        />
        <Button type="primary" icon="search" onClick={this.click}>Search</Button>
        <div style={{width:950,height:500}} className="musiclist">{data2}</div>
        <Pagination defaultCurrent={1} total={data.total} style={{marginLeft:520}} onChange={this.change}/>
      </div>
    )
  }
}
class Musiclist extends Component{
  render(){
    let {musiclist} = this.props;
    return(
      <Card style={{ width: 140,height:220,marginRight:50}} bodyStyle={{ padding: 0 }}>
         <div className="custom-image">
           <img alt="example" width="100%" src={this.props.img} />
         </div>
         <div className="custom-card">
           <h3>{this.props.title}</h3>
           <p>{this.props.singer}</p>
         </div>
       </Card>
    )
  }
}
export default Music;
