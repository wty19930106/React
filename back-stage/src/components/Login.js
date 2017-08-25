import React,{Component} from 'react';
import { BrowserRouter as Router,Route,Link} from 'react-router-dom';
import "../css/login.css";
import App from '../App';
import CollectionsPage from "./signup";
import $ from "jquery";
import { Form, Icon, Input, Button, Checkbox,message} from 'antd';
const FormItem = Form.Item;
let result = [];

class NormalLoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  loginclick = () =>{
    let username = $('input:text').eq(0).val();
    let password = $('input:password').eq(0).val();
    this.props.checklog(username,password);
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>

      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="admin" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="123456" />
          )}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" className="login-form-button" >
            <Link to="/home" onClick={this.loginclick}>
            Log in
            </Link>
          </Button>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox className="remember">Remember me</Checkbox>
          )}
        </FormItem>
        <CollectionsPage />
      </Form>
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default WrappedNormalLoginForm ;
