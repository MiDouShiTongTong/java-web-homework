import React from 'react';
import { Form, Input, Icon, Button, notification } from 'antd';
import NProgress from 'nprogress';
import { connect } from 'react-redux';
import { updateUserInfo } from '../../../store/account';
import api from '../../../api';
import './index.scss';

export default connect(
  // mapStateToProps
  state => {
    return {};
  },
  // mapDispatchToProps
  {
    updateUserInfo
  }
)(
  Form.create()(
    class AccountSignIn extends React.Component {

      handleSubmit = (e) => {
        e.preventDefault();
        const { props } = this;
        props.form.validateFields(async (error, valueList) => {
          if (!error) {
            NProgress.start();
            const result = await api.account.signIn(valueList);
            if (result.code === '0') {
              // 保存用户信息
              props.updateUserInfo(result.data);
              // 跳转
              setTimeout(() => {
                NProgress.done();
                props.history.push('/system/home/welcome');
              }, 500);
            } else {
              NProgress.done();
              notification.open({
                message: result.message,
                duration: 2,
                placement: 'bottomLeft'
              });
            }
          }
        });
      };

      render() {
        const { props } = this;
        return (
          <section className="account-sign-in-container">
            <section className="header-container">
              <span>图书管理后台</span>
            </section>
            <Form onSubmit={this.handleSubmit} className="sign-in-form-container">
              <Form.Item>
                {props.form.getFieldDecorator('username', {
                  initialValue: 'admin',
                  rules: [
                    { required: true, message: '请输入用户名!' }
                  ]
                })(
                  <Input
                    prefix={<Icon type="user"/>}
                    placeholder="用户名"/>
                )}
              </Form.Item>
              <Form.Item>
                {props.form.getFieldDecorator('password', {
                  initialValue: '123456',
                  rules: [
                    { required: true, message: '请输入密码!' }
                  ]
                })(
                  <Input prefix={<Icon type="lock"/>}
                         type="password"
                         placeholder="密码"/>
                )}
              </Form.Item>
              <Button type="primary" size="large" block={true} htmlType="submit">
                登陆
              </Button>
            </Form>
          </section>
        );
      }
    }
  )
);
