import React,{Component} from 'react';

import Mycharts from "./Mychart";
import Cards from "./Cardlist";

class Homepage extends Component {
  render(){
    return(
      <div>
        <Cards />
        <Mycharts />
      </div>
    )
  }
}
export default Homepage;
