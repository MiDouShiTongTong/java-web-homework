import React from 'react';
import { connect } from 'react-redux';
import { Form, Input, Button, Radio } from 'antd';
import api from '../../../../../api/index';

export default connect(
  // mapStateToProps
  state => {
    return {};
  },
  // mapDispatchToProps
  {}
)(
  Form.create()(
    class SystemUserPersonOperator extends React.Component {
      state = {
        // 操作类型[添加, 修改]
        actionType: null,
        // 表单默认值[操作类型为修改异步获取]
        formInitialValue: {}
      };

      componentDidMount = async () => {
        const { state, props } = this;
        const id = props.match.params.id;
        if (id) {
          // 修改操作
          state.actionType = 'update';
          // 获取当前数据
          const result = await api.person.selectPersonById(id);
          this.setState({
            formInitialValue: result.data
          });
        } else {
          // 新增操作
          state.actionType = 'insert';
        }
      };

      handleSubmit = (e) => {
        e.preventDefault();
        const { state, props } = this;
        props.form.validateFields(async (error, valueList) => {
          if (!error) {
            // 保存数据
            if (state.actionType === 'update') {
              // 修改操作
              await api.person.updatePersonById(state.formInitialValue.id, valueList);
            } else {
              // 添加操作
              await api.person.insertPerson(valueList);
            }

            // 跳转到列表页
            props.history.push('/system/user/person/list');
          }
        });
      };

      render() {
        const { state, props } = this;

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
          <section className="person-operation-container">
            <Form onSubmit={this.handleSubmit}>
              {/* 用户名 */}
              <Form.Item
                {...baseFormItemLayout}
                label="用户名">
                {props.form.getFieldDecorator('username', {
                  initialValue: state.formInitialValue.username,
                  rules: [
                    { required: true, message: '请输入用户名' },
                    { min: 2, max: 20, message: '用户名由2~20个字符组成！' }
                  ]
                })(
                  <Input type="text" placeholder="请输入用户名"/>
                )}
              </Form.Item>

              {/* 性别 */}
              <Form.Item
                {...baseFormItemLayout}
                label="性别">
                {props.form.getFieldDecorator('gender', {
                  initialValue: state.formInitialValue.gender,
                  rules: [
                    { required: true, message: '请选择性别！' },
                  ]
                })(
                  <Radio.Group>
                    <Radio value={1}>男</Radio>
                    <Radio value={2}>女</Radio>
                  </Radio.Group>
                )}
              </Form.Item>

              {/* 提交 */}
              <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">保存</Button>
              </Form.Item>
            </Form>
          </section>
        );
      }
    }
  )
);
