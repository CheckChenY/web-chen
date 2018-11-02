
import React,{ Component } from 'react';
import Axios from 'axios';
import { Form, Icon, Input, Button, Checkbox } from 'antd';


import './login.css'
const FormItem = Form.Item;

class NormalLoginForm extends Component {
  
  handleSubmit = (e) => {
    const self = this,
    { props } = self;
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {

        // Axios.get('/Market/homePage').then(function(){
        //     alert(123)
        // })
        Axios.post('/User/userLogin', {
          userAccount: values.userName,
          userPassword: values.password
        })
        .then(function (response) {
          if(response.data.code === 1){
              props.history.push(`/index?id=${response.data.code}`)
            }else{

          }
        })
        .catch(function (error) {
          console.log(error);
        });
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className='login-div'>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>Remember me</Checkbox>
            )}
            <span className="login-form-forgot">Forgot password</span>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            Or <span>register now!</span>
          </FormItem>
        </Form>
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default WrappedNormalLoginForm;

// ReactDOM.render(<WrappedNormalLoginForm />, mountNode);
