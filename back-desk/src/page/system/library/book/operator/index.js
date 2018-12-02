import React from 'react';
import { connect } from 'react-redux';
import { Button, Form, Input, Select } from 'antd';
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
    class SystemLibraryBookOperator extends React.Component {
      state = {
        // 操作类型[添加, 修改]
        actionType: null,
        // 表单默认值[操作类型为修改异步获取]
        formInitialValue: {},
        // 图书分类列表
        bookCategoryList: []
      };

      componentDidMount = async () => {
        const { state, props } = this;
        const id = props.match.params.id;
        if (id) {
          // 修改操作
          state.actionType = 'update';
          // 获取当前数据
          const result = await api.book.selectBookById(id);
          this.setState({
            formInitialValue: result.data
          });
        } else {
          // 新增操作
          state.actionType = 'insert';
        }
        // 获取图书分类列表
        const result = await api.bookCategory.selectBookCategoryList();
        this.setState({
          bookCategoryList: result.data.records
        });
      };

      handleSubmit = (e) => {
        e.preventDefault();
        const { state, props } = this;
        props.form.validateFields(async (error, valueList) => {
          if (!error) {
            // 保存数据
            if (state.actionType === 'update') {
              // 修改操作
              await api.book.updateBookById(state.formInitialValue.id, valueList);
            } else {
              // 添加操作
              await api.book.insertBook(valueList);
            }

            // 跳转到列表页
            props.history.push('/system/library/book/list');
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
              {/* 图书名称 */}
              <Form.Item
                {...baseFormItemLayout}
                label="图书名称">
                {props.form.getFieldDecorator('name', {
                  initialValue: state.formInitialValue.name,
                  rules: [
                    { required: true, message: '请输入图书名称' },
                    { min: 2, max: 20, message: '图书名称由2~20个字符组成！' }
                  ]
                })(
                  <Input type="text" placeholder="请输入图书名称"/>
                )}
              </Form.Item>

              {/* 图书所属分类 */}
              <Form.Item
                {...baseFormItemLayout}
                label="图书所属分类">
                {props.form.getFieldDecorator('bookCategoryId', {
                  initialValue: state.formInitialValue.bookCategoryId,
                  rules: [
                    { required: true, message: '请选择图书所属分类' },
                  ]
                })(
                  <Select placeholder="请选择图书所属分类">
                    {state.bookCategoryList.map(item => (
                      <Select.Option key={item.id} value={item.id}>
                        {item.name}
                      </Select.Option>
                    ))}
                  </Select>
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
