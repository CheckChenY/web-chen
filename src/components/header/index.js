import React, { Component } from 'react';
import { connect } from 'react-redux';
import intl from 'react-intl-universal';
import {
    tabLanguange
  } from '../../redux/actions/header/index';
import {Select } from 'antd';
const Option = Select.Option;

// function handleChange(value) {
//   console.log(`selected ${value}`);
// }

// import Tool from './corn/tools';
/* 此处注意，如果使用CSS Module，则必须命名css文件为*.module.css的形式 */
/* More detail can see from https://github.com/codebandits/react-app-rewire-css-modules

 */
// import styles from './App.module.css';

class Header extends Component {

  handleContentChange(e){
    if (this.props.onSubmit) {
      const { tabLanguange } = this.props;
      console.log(e);
      tabLanguange(e);
    }
    // this.setState({ content: '' })
  }
  
  render() {
    // const self = this,
    // { tabLanguange=()=>{},language } = self.props;
    // console.log(language);
    return (
      <div>
        <div>
          <Select defaultValue="zh-CN" style={{ width: 120 }} 
          onChange={this.handleContentChange.bind(this)}
          // onChange={tabLanguange}
          >
            <Option value="zh-CN">中文</Option>
            <Option value="zh-TW">繁体</Option>
            <Option value="zh-EN">英文</Option>
          </Select>
        </div>
        <div style={{textAlign:'center',paddingTop:'40px'}}>
        {intl.get('userlist')}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  language: state.lan.indexLanguage.lanage,
});
// debugger;

const mapDispatchToProps = dispatch => ({
    tabLanguange(data) {
        dispatch(tabLanguange(data));
    }
});

export default connect(
mapStateToProps,
mapDispatchToProps)(Header);

