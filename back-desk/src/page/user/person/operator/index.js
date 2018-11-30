import React from 'react';
import { connect } from 'react-redux';
import { Form, Input, Button, Radio } from 'antd';

export default connect(
  // mapStateToProps
  state => {
    return {};
  },
  // mapDispatchToProps
  {}
)(
  Form.create()(
    class UserPersonOperator extends React.Component {
      state = {};

      /**
       * 处理表单的提交
       *
       */
      handleSubmit = (e) => {
        const { props } = this;
        e.preventDefault();
        props.form.validateFields((error, valueList) => {
          if (!error) {
            console.log(valueList);
          }
        });
      };

      render() {
        const { props } = this;
        const baseFormItemLayout = {
          labelCol: {
            xs: { span: 24 },
            sm: { span: 7 }
          },
          wrapperCol: {
            xs: { span: 24 },
            sm: { span: 12 },
            md: { span: 10 }
          }
        };
        const tailFormItemLayout = {
          wrapperCol: {
            xs: { span: 24, offset: 0 },
            sm: { span: 12, offset: 7 },
            md: { span: 10, offset: 7 }
          }
        };
        return (
          <Form onSubmit={this.handleSubmit} className="login-form">
            {/* 用户名 */}
            <Form.Item
              {...baseFormItemLayout}
              label="用户名">
              {props.form.getFieldDecorator('username', {
                initialValue: '',
                rules: [
                  { required: true, message: '请输入用户名！' },
                  { min: 3, max: 20, message: '用户名由3~20个字符组成！' }
                ]
              })(
                <Input type="text"/>
              )}
            </Form.Item>

            {/* 性别 */}
            <Form.Item
              {...baseFormItemLayout}
              label="性别">
              {props.form.getFieldDecorator('gender', {
                initialValue: '2',
                rules: [
                  { required: true, message: '请选择性别！' },
                ]
              })(
                <Radio.Group>
                  <Radio value="1">男</Radio>
                  <Radio value="2">女</Radio>
                </Radio.Group>
              )}
            </Form.Item>

            {/* 提交 */}
            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">提交</Button>
            </Form.Item>
          </Form>
        );
      }
    }
  )
);
