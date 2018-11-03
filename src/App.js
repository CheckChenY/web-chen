import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import intl from 'react-intl-universal';
import Header from './components/header/index';
import { connect } from 'react-redux';
import {
    tabLanguange
  } from './redux/actions/header/index';

class App extends Component {

  handleSubmitComment (comment) {
    const { tabLanguange } = this.props;
      tabLanguange(comment);
    console.log(comment)
  }
  render() {
    return (
      <div>
        <div>
          <Header onSubmit={this.handleSubmitComment.bind(this)} />
        </div>
        <div style={{textAlign:'center',paddingTop:'40px'}}>
          <Link to='/userList'><Button type='primary'>{intl.get('userlist')}</Button></Link>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = state => {
  return state.lan.indexLanguage
};

export default connect(
  mapDispatchToProps, {
    tabLanguange
  }
)(App);
// export default App;
