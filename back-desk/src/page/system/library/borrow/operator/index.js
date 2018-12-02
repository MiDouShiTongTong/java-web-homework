import React from 'react';
import { connect } from 'react-redux';
import { Button, Form, Select, DatePicker, Radio } from 'antd';
import moment from 'moment';
import api from "../../../../../api/index";

export default connect(
  // mapStateToProps
  state => {
    return {};
  },
  // mapDispatchToProps
  {}
)(
  Form.create()(
    class SystemLibraryBookBorrowOperator extends React.Component {
      state = {
        // 操作类型[添加, 修改]
        actionType: null,
        // 表单默认值[操作类型为修改异步获取]
        formInitialValue: {},
        // 用戶列表
        personList: [],
        // 图书列表
        bookList: []
      };

      componentDidMount = async () => {
        const { state, props } = this;
        const id = props.match.params.id;
        if (id) {
          // 修改操作
          state.actionType = 'update';
          // 获取当前数据
          const result = await api.bookBorrow.selectBookBorrowById(id);
          result.data.startAt = moment(result.data.startAt, 'YYYY-MM-DD HH:mm:ss');
          result.data.endAt = moment(result.data.endAt, 'YYYY-MM-DD HH:mm:ss');
          this.setState({
            formInitialValue: result.data
          });
        } else {
          // 新增操作
          state.actionType = 'insert';
          this.setState({
            formInitialValue: {
              status: 1
            }
          });
        }
        // 获取用戶列表
        const result1 = await api.person.selectPersonList();
        // 获取图书列表
        const result2 = await api.book.selectBookList();
        this.setState({
          personList: result1.data.records,
          bookList: result2.data.records
        });
      };

      handleSubmit = (e) => {
        e.preventDefault();
        const { state, props } = this;
        props.form.validateFields(async (error, valueList) => {
          if (!error) {
            valueList.startAt = valueList.startAt.format('YYYY-MM-DD HH:mm:ss');
            valueList.endAt = valueList.endAt.format('YYYY-MM-DD HH:mm:ss');

            // 保存数据
            if (state.actionType === 'update') {
              // 修改操作
              await api.bookBorrow.updateBookBorrowById(state.formInitialValue.id, valueList);
            } else {
              // 添加操作
              await api.bookBorrow.insertBookBorrow(valueList);
            }

            // 跳转到列表页
            props.history.push('/system/library/borrow/list');
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
          <section className="library-category-operator-container">
            <Form onSubmit={this.handleSubmit}>
              {/* 用户名 */}
              <Form.Item
                {...baseFormItemLayout}
                label="用户名">
                {props.form.getFieldDecorator('personId', {
                  initialValue: state.formInitialValue.personId,
                  rules: [
                    { required: true, message: '请选择用户名' }
                  ]
                })(
                  <Select placeholder="请选择用户名">
                    {state.personList.map(item => (
                      <Select.Option key={item.id} value={item.id}>
                        {item.username}
                      </Select.Option>
                    ))}
                  </Select>
                )}
              </Form.Item>

              {/* 图书 */}
              <Form.Item
                {...baseFormItemLayout}
                label="图书">
                {props.form.getFieldDecorator('bookId', {
                  initialValue: state.formInitialValue.bookId,
                  rules: [
                    { required: true, message: '请选择图书' }
                  ]
                })(
                  <Select placeholder="请选择图书">
                    {state.bookList.map(item => (
                      <Select.Option key={item.id} value={item.id}>
                        {item.name}
                      </Select.Option>
                    ))}
                  </Select>
                )}
              </Form.Item>

              {/* 状态 */}
              <Form.Item
                {...baseFormItemLayout}
                label="状态">
                {props.form.getFieldDecorator('status', {
                  initialValue: state.formInitialValue.status,
                  rules: [
                    { required: true, message: '请选择借阅状态' },
                  ]
                })(
                  <Radio.Group>
                    <Radio value={1}>借阅中</Radio>
                    <Radio value={2} disabled={state.actionType === 'insert'}>已归还</Radio>
                  </Radio.Group>
                )}
              </Form.Item>

              {/* 开始日期 */}
              <Form.Item
                {...baseFormItemLayout}
                label="开始日期">
                {props.form.getFieldDecorator('startAt', {
                  initialValue: state.formInitialValue.startAt,
                  rules: [
                    { required: true, message: '请选择开始日期' }
                  ]
                })(
                  <DatePicker placeholder="请选择开始日期"/>
                )}
              </Form.Item>

              {/* 结束日期 */}
              <Form.Item
                {...baseFormItemLayout}
                label="归还日期">
                {props.form.getFieldDecorator('endAt', {
                  initialValue: state.formInitialValue.endAt,
                  rules: [
                    { required: true, message: '请选择归还日期' }
                  ]
                })(
                  <DatePicker placeholder="请选择归还日期"/>
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
