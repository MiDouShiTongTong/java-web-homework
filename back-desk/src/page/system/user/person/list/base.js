import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Divider, Table, Modal, Button, Col, Form, Row, Input, Tag } from 'antd';
import PropTypes from 'prop-types';

export default connect(
  // mapStateToProps
  state => {
    return {};
  },
  // mapDispatchToProps
  {}
)(
  Form.create()(
    class List extends React.Component {
      static propTypes = {
        operationConfig: PropTypes.object.isRequired,
        tabConfig: PropTypes.object.isRequired
      };

      state = {
        dataSource: [],
        pagination: {
          current: 1,
          pageSize: 10,
          showSizeChanger: true,
          pageSizeOptions: ['10', '20', '100']
        },
        searchCondition: {},
        loading: false
      };

      componentDidMount = async () => {
        // 刷新表格数据
        this.refreshData();
      };

      refreshData = async () => {
        const { state, props } = this;

        // loading
        this.setState({ loading: true });

        // 获取远程数据
        const result = await props.tabConfig.getListDataMethod({
          current: state.pagination.current,
          size: state.pagination.pageSize,
          ...state.searchCondition
        });

        // 获取成功, 刷新数据
        const pagination = { ...state.pagination };
        pagination.total = result.data.total;
        this.setState({
          loading: false,
          dataSource: result.data.records,
          pagination
        });
      };

      deleteData = (record) => {
        const { props } = this;
        Modal.confirm({
          okText: '确认',
          cancelText: '取消',
          title: '确认删除此条记录？',
          content: (
            <Tag color="#f50">{record[props.tabConfig.deleteDataTipColumn]}</Tag>
          ),
          onOk: async () => {
            // loading
            this.setState({ loading: true });
            await props.tabConfig.deleteListDataMethod(record.id);
            // 刷新表格数据
            this.refreshData();
          },
          onCancel() {
            console.log('Cancel');
          }
        });
      };

      handleSearch = (e) => {
        e.preventDefault();
        const { state, props } = this;
        props.form.validateFields(async (error, valueList) => {
          if (!error) {
            // 保存搜索条件
            state.pagination.current = 1;
            state.searchCondition = valueList;
            // 刷新表格数据
            this.refreshData();
          }
        });
      };

      handleReset = () => {
        const { state, props } = this;
        // 保存搜索条件
        state.pagination.current = 1;
        state.searchCondition = {};
        props.form.resetFields();
        // 刷新表格数据
        this.refreshData();
      };

      handleTableChange = (currentPagination, filters, sorter) => {
        const { state } = this;
        // 刷新分页数据
        state.pagination = currentPagination;

        // 获取表格数据
        this.refreshData();
      };

      getOperationContainer = () => {
        const { props } = this;
        return (
          <section className="operation-container">
            <section className="search-container">
              <Form onSubmit={this.handleSearch}>
                <Row gutter={24} className="search-field-container">
                  <Col md={8}>
                    {props.operationConfig.searchColumnList.map((item, index) => {
                      // 根据表单类型获取表单
                      let form = null;
                      switch (item.formType) {
                        case 'input':
                          form = <Input/>;
                          break;
                        default:
                          console.log('form type 错误');
                      }
                      // 构建搜索字段
                      return (
                        <Form.Item label={item.label} key={index}>
                          {props.form.getFieldDecorator(item.formName, {
                            rules: []
                          })(form)}
                        </Form.Item>
                      );
                    })}
                  </Col>
                  <Col md={8} className="search-action-container">
                    <Button type="primary" htmlType="submit">搜索</Button>
                    <Button onClick={this.handleReset}>重置</Button>
                  </Col>
                </Row>
              </Form>
            </section>
            <section className="data-action-container">
              <Link to={props.tabConfig.operationPath}>
                <Button icon="plus" type="primary">添加</Button>
              </Link>
            </section>
          </section>
        );
      };

      render() {
        const { state, props } = this;
        // 操作列
        const operationColumn = props.tabConfig.columnList[this.props.tabConfig.columnList.length - 1];
        if (operationColumn.dataIndex === 'action') {
          operationColumn.render = (text, record) => (
            <div className="data-source-operation-container">
              <Link to={`${props.tabConfig.operationPath}${record.id}`}>编辑</Link>
              <Divider type="vertical"/>
              <span onClick={() => this.deleteData(record)}>删除</span>
            </div>
          );
        }

        return (
          <section className="list-container">
            {this.getOperationContainer()}

            <section className="data-container">
              <Table
                columns={props.tabConfig.columnList}
                rowKey={record => record.id}
                dataSource={state.dataSource}
                pagination={state.pagination}
                loading={state.loading}
                onChange={this.handleTableChange}/>
            </section>
          </section>
        );
      }
    }
  )
);

