import React,{Component} from 'react';
import { BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';
import './App.css';
import $ from "jquery";
import { Layout, Menu, Breadcrumb, Icon,Avatar } from 'antd';
import Mycharts from "./components/Mychart";
import Cardlist from "./components/Cardlist";
import Excellist from "./components/ExcelList";
import Homepage from "./components/Homepage";
import Movies from "./components/Movies";
import Music from "./components/Music";
import Tablelist from "./components/Tablelist";
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class SiderDemo extends Component {
  state = {
    collapsed: false,
  };
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }
  render() {
    let arr = window.location.href.split('/').slice(3);
    let obj = [];
    obj = arr.map((e,i)=>{
      return <Breadcrumb.Item key={i}>{e}</Breadcrumb.Item>
    })
    return (
      <Layout>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
          style={{height:$(window).height()}}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Link to="/home">
              <Icon type="home" />
              <span>Home Page</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/home/excellist">
              <Icon type="desktop" />
              <span>Excel List</span>
              </Link>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={<span><Icon type="like" /><span>Loves</span></span>}
            >
              <Menu.Item key="3"><Link to="/home/Loves/Movies">Movies</Link></Menu.Item>
              <Menu.Item key="4"><Link to="/home/Loves/Music">Music</Link></Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={<span><Icon type="team" /><span>User</span></span>}
            >
              <Menu.Item key="6"><Link to="/home/User/Tablelist">UserList</Link></Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
              <Icon type="file" />
              <span>File</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"  className="tx" />

        </Header>
          <Content style={{ margin: '0 16px 0 216px' }}>
            <Breadcrumb style={{ margin: '12px 0' }}>
              {obj}
            </Breadcrumb>
            <Switch>
                  <Route exact path="/home" component={Homepage} />
                  <Route path="/home/excellist" component={Excellist} />
                  <Route path="/home/Loves/Movies" component={Movies} />
                  <Route path="/home/Loves/Music" component={Music} />
                  <Route path="/home/User/Tablelist" component={Tablelist} />
              </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }
}
export default SiderDemo;
