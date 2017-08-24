import React,{Component} from 'react';
import '../css/contentList.css';
import $ from "jquery";

class Movies extends Component {
  constructor(){
    super();
    this.state={
      data:[]
    }
  }
  componentDidMount(){
    let _this = this;
    $.ajax({
      url:'https://api.douban.com/v2/movie/in_theaters',
      dataType:'jsonp',
      success:function(json){
        _this.setState({
          data:json.subjects
        })
      }
    })
  }
  render(){
    let {data} = this.state;
    let data2 = [];
    data2 = data.map((e,i)=>{
      let movielist={
        img:e.images.large,
        title:e.title,
        rating:e.rating,
        directors:e.directors[0].name,
        genner:e.genres[0],
        key:i
      }
      return <Movielist {...movielist} />;
    })

    return(
      <div className="movielist">
        {data2}
      </div>
    )
  }
};

class Movielist extends Component {
  render(){
    let {movielist} = this.props;
    return(
      <dl>
        <dt><img src={this.props.img} alt="" /></dt>
        <dd>
          <h2>{this.props.title}</h2>
          <b>导演:{this.props.directors}</b>
          <i>影片类型:{this.props.genner}</i>
        </dd>
      </dl>
    )
  }
}
export default Movies;
