import React,{Component} from 'react';
import "../css/contentList.css";
import { Button, Modal, Form, Input, Radio } from 'antd';
const FormItem = Form.Item;

const CollectionCreateForm = Form.create()(
  (props) => {
    const { visible, onCancel, onCreate, form } = props;
    const { getFieldDecorator } = form;
    return (
      <Modal
        visible={visible}
        title="注册用户"
        okText="创建"
        onCancel={onCancel}
        onOk={onCreate}
      >
        <Form layout="vertical">
          <FormItem label="UserName">
            {getFieldDecorator('user', {
              rules: [{ required: true, message: '请输入正确的用户名!' }],
            })(
              <Input />
            )}
          </FormItem>
          <FormItem label="Password">
            {getFieldDecorator('pass')(<Input type="password" />)}
          </FormItem>
        </Form>
      </Modal>
    );
  }
);
const result = [];
class CollectionsPage extends React.Component {
  state = {
    visible: false,
  };
  showModal = () => {
    this.setState({ visible: true });
  }
  handleCancel = () => {
    this.setState({ visible: false });
  }
  handleCreate = () => {

    const form = this.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      console.log('Received values of form: ', values);
      console.log(values);
      result.push(values)
      localStorage.setItem('usermessage',JSON.stringify(result));
      form.resetFields();
      this.setState({ visible: false });
    });
  }
  saveFormRef = (form) => {
    this.form = form;
  }
  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal} className="signup">注册用户</Button>
        <CollectionCreateForm
          ref={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
      </div>
    );
  }
}

export default CollectionsPage;
