import React,{Component} from 'react';
import { Table,Button,Input} from 'antd';
import $ from "jquery";

const columns = [{
title: 'Name',
dataIndex: 'name',
render: text => <a href="#">{text}</a>,
}, {
title: 'Age',
dataIndex: 'age',
}, {
title: 'Address',
dataIndex: 'address',
}
];
const data = [{
key: '1',
name: 'John Brown',
age: 32,
address: 'New York No. 1 Lake Park',
}, {
key: '2',
name: 'Jim Green',
age: 42,
address: 'London No. 1 Lake Park',
}, {
key: '3',
name: 'Joe Black',
age: 32,
address: 'Sidney No. 1 Lake Park',
}, {
key: '4',
name: 'Disabled User',
age: 99,
address: 'Sidney No. 1 Lake Park',
},
{
key: '5',
name: 'Troye Siven',
age: 20,
address: 'Sidney No. 1 Lake Park',
},{
key: '6',
name: 'Kobe Bryant',
age: 39,
address: 'America No. 1 Lake Park',
},{
key: '7',
name: 'Leo Messi',
age: 30,
address: 'Sidney No. 1 Lake Park',
}];

class Tablelist extends Component {
  constructor(){
    super();
    this.state={
      val1:'',
      val2:'',
      val3:'',
      selectedRowKeys:[],
      selectedRows:[],
      data2:data

    }
  }

  add = ()=>{
    let val1=$('input:text').eq(0).val();
    let val2=$('input:text').eq(1).val();
    let val3=$('input:text').eq(2).val();
    if (val1!=''&&val2!=''&&val3!='') {
      data.unshift({
        key: data.length+1,
        name: val1,
        age: val2,
        address: val3
      })
      this.setState({
        data2:data
      })
    }

  }
  del = () =>{
    for (var i = 0; i < data.length; i++) {
      for (var j = 0; j < this.state.selectedRowKeys.length; j++) {
        if (data[i].key==this.state.selectedRowKeys[j]) {
          data.splice(i,1);
          this.setState({
            data2:data
          })
        }
      }
    }
  }
  render(){
    const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      this.setState({
        selectedRowKeys,
        selectedRows
        })
      }
    }

    return(
      <div>
        <Input placeholder="User Name"  style={{width:100,marginRight:10}}/>
        <Input placeholder="Age"  style={{width:100,marginRight:10}}/>
        <Input placeholder="Address"  style={{width:100,marginRight:10}}/>
        <Button type="primary" style={{marginRight:10}} onClick={this.add}>Add</Button>
        <Button type="danger" onClick={this.del}>Delete</Button>
        <Table rowSelection={rowSelection} columns={columns} dataSource={this.state.data2} style={{marginTop:30}} />
      </div>
    )
  }
}
export default Tablelist;
