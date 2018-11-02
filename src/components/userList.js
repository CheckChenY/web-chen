import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import {
//   fetchAllUserList
// } from '../redux/actions/user';
import { Table,Button } from 'antd';

class UserList extends Component {
    // componentDidMount() {
    //   const self = this,
    //   { fetchAllUserList } = self.props;
    //   fetchAllUserList(); //获取数据渲染页面
    //     // console.log(this.props);
    //     // this.props.fetchAllUserList();
    // }

  render() {
    const self = this,
    { lista,fetchAllUserList } = self.props;

    const columns = [{
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    }, {
      title: '性别',
      dataIndex: 'gender',
      key: 'gender',
    }];
    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>用户列表页</h1>
        <div>
          <Button type='primary'
            onClick={
              fetchAllUserList
            }
          >
            獲取數據
          </Button>
        </div>
        <div style={{ width: '50%', margin: '10px auto' }}>
          <Table dataSource={lista} columns={columns} />
        </div>
      </div>
    )
  }
}


// const mapDispatchToProps = state => ({
//   state:state
// });
// export default connect(
//     mapDispatchToProps,{
//       fetchAllUserList
//   }
// )(UserList);
export default UserList;


