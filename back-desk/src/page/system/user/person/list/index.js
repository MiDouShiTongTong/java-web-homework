import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Divider, Table, Modal, Button, Col, Form, Row, Input, Tag } from 'antd';
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
    class SystemUserPersonList extends React.Component {
      state = {
        columns: [
          { title: '用户名', dataIndex: 'username' },
          {
            title: '性别', dataIndex: 'gender', render: (text, record) => (
              <span>{text === 1 ? '男' : '女'}</span>
            )
          },
          { title: '创建日期', dataIndex: 'createdAt' },
          { title: '最后修改日期', dataIndex: 'updatedAt' },
          {
            title: '操作', dataIndex: 'action', render: (text, record) => (
              <div className="data-source-operation-container">
                <Link to={`/system/user/person/operator/${record.id}`}>编辑</Link>
                <Divider type="vertical"/>
                <span onClick={() => this.deleteData(record)}>删除</span>
              </div>
            )
          }
        ],
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
        const { state } = this;

        // loading
        this.setState({ loading: true });

        // 获取远程数据
        const result = await api.person.selectPersonList({
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
        Modal.confirm({
          okText: '确认',
          cancelText: '取消',
          title: '确认删除此条记录？',
          content: <Tag color="#f50">{record.username}</Tag>,
          onOk: async () => {
            // loading
            this.setState({ loading: true });
            await api.person.deletePersonById(record.id);
            // 刷新表格数据
            this.refreshData();
          },
          onCancel() {
            console.log('Cancel');
          },
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
                    <Form.Item label="用户名">
                      {props.form.getFieldDecorator('username', {
                        rules: []
                      })(
                        <Input/>
                      )}
                    </Form.Item>
                  </Col>
                  <Col md={8} className="search-action-container">
                    <Button type="primary" htmlType="submit">搜索</Button>
                    <Button onClick={this.handleReset}>重置</Button>
                  </Col>
                </Row>
              </Form>
            </section>
            <section className="data-action-container">
              <Link to="/system/user/person/operator">
                <Button icon="plus" type="primary">添加</Button>
              </Link>
            </section>
          </section>
        );
      };

      render() {
        const { state } = this;
        return (
          <section className="user-person-list-container">
            {this.getOperationContainer()}

            <section className="data-container">
              <Table
                columns={state.columns}
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
