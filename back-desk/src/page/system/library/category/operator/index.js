import React from 'react';
import { connect } from 'react-redux';
import { Form, Input, Button } from 'antd';
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
    class SystemLibraryCategoryOperator extends React.Component {
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
          const result = await api.bookCategory.selectBookCategoryById(id);
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
              await api.bookCategory.updateBookCategoryById(state.formInitialValue.id, valueList);
            } else {
              // 添加操作
              await api.bookCategory.insertBookCategory(valueList);
            }

            // 跳转到列表页
            props.history.push('/system/library/category/list');
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
              {/* 图书分类名称 */}
              <Form.Item
                {...baseFormItemLayout}
                label="图书分类名称">
                {props.form.getFieldDecorator('name', {
                  initialValue: state.formInitialValue.name,
                  rules: [
                    { required: true, message: '请输入图书分类名称' },
                    { min: 2, max: 20, message: '图书分类名称由2~20个字符组成' }
                  ]
                })(
                  <Input type="text" placeholder="请输入图书分类名称"/>
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
