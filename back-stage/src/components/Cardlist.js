import React,{Component} from 'react';
import { Card,Icon } from 'antd';
import "../css/Cardlist.css";

class Cards extends Component {
  render(){
    const gridStyle = {
      textAlign: 'center',
      marginRight:'10px',
      marginBottom:'10px'
    };
    return(
    <Card title="网站数据统计" noHovering>
     <Card.Grid style={gridStyle} className="cardgrid"><Icon type="user"  className="cardicon"/><span>用户数量</span><b>246</b></Card.Grid>
     <Card.Grid style={gridStyle} className="cardgrid"><Icon type="pie-chart"  className="cardicon"/><span>数据统计</span><b>321</b></Card.Grid>
     <Card.Grid style={gridStyle} className="cardgrid"><Icon type="like" className="cardicon"/><span>我的收藏</span><b>185</b></Card.Grid>
     <Card.Grid style={gridStyle} className="cardgrid"><Icon type="rocket" className="cardicon"/><span>销售数据</span><b>762</b></Card.Grid>
     <Card.Grid style={gridStyle} className="cardgrid"><Icon type="user-add" className="cardicon"/><span>新增用户</span><b>89</b></Card.Grid>
     <Card.Grid style={gridStyle} className="cardgrid"><Icon type="picture"className="cardicon" /><span>新增订单</span><b>154</b></Card.Grid>
     <Card.Grid style={gridStyle} className="cardgrid"><Icon type="tags-o" className="cardicon"/><span>库存信息</span><b>530</b></Card.Grid>
   </Card>
    )
  }
}
export default Cards;
