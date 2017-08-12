import React, { Component } from 'react';
/*import ReactDOM from 'react-dom';*/

class Ul extends Component {
  constructor() {
    super();
    this.state={
      arr:[]
    }
      this.click = this.click.bind(this);
  }
  click(){
    let arr2=['react','呵呵哒','啦啦啦'];
    this.setState({
      arr:arr2
    })
  }
  render(){
    let{arr} = this.state;
    let list =null;
    list = arr.map(function(e,i){
      let data ={
        key:i
      };
      return <li {...data}>{e}</li>
    })
    return(
        <div>
          <button onClick={this.click}>点击渲染</button>
            <ul>
              {list}
            </ul>
        </div>
    );
  }
}
/*ReactDOM.render(<Ul />,document.getElementById('root'))*/
export default Ul;
