import React,{Component} from 'react';
import Chart from 'rc-echarts';
var echarts = require('echarts/lib/echarts');
require('echarts/lib/chart/bar');
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');
class Mycharts extends Component {
  componentDidMount(){
    var myChart = echarts.init(document.getElementById('echarts'));
    // 绘制图表
    myChart.setOption({
      color: ['#17c4bb'],
      title: { text: '每日游客访问量' },
      tooltip : {
          trigger: 'axis',
          axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
      },
      grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
      },
      xAxis : [
          {
              type : 'category',
              data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              axisTick: {
                  alignWithLabel: true
              }
          }
      ],
      yAxis : [
          {
              type : 'value'
          }
      ],
      series : [
          {
              name:'直接访问',
              type:'bar',
              barWidth: '60%',
              data:[10, 52, 200, 334, 390, 330, 220]
          }
      ]
    });
  }
  render(){
    return(
      <div id="echarts" style={{width:1250,height:330,marginTop:20}}></div>
    )
  }
}

export default Mycharts;
