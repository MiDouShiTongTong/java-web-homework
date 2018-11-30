import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Divider, Table } from 'antd';

export default connect(
  // mapStateToProps
  state => {
    return {};
  },
  // mapDispatchToProps
  {}
)(
  class UserPersonList extends React.Component {
    state = {
      column: [
        { title: 'Name', dataIndex: 'name' },
        { title: 'Age', dataIndex: 'age' },
        { title: 'Address', dataIndex: 'address' },
        {
          title: 'Action', dataIndex: 'action', render: (text, record) => (
            <span>
              <Link to="/user/person/operator">编辑</Link>
              <Divider type="vertical"/>
              <Link to="/user/person/operator">
                删除
              </Link>
            </span>
          )
        }
      ],
      data: [{
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
      }, {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
      }, {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
      }]
    };

    render() {
      const { state } = this;
      return (
        <section className="user-person-list-container">
          <Table
            columns={state.column}
            dataSource={state.data}
            pagination={false}/>
        </section>
      );
    }
  }
);
