import React, { Component } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import configure from '../redux/store/configureStore';
import App from '../App';
import UserList from '../containers/user/userList';
import Login from '../components/login/login';
import Register from '../containers/register/index';
import Vister from '../components/vister/index';
// import NotFound from '../common/NotFound/NotFound';

// import { connect } from 'react-redux';
import intl from 'react-intl-universal';
// import {
//     tabLanguange
//   } from '../redux/actions/header/index';

const locales = {
  "zh-TW": require('../locales/zh-TW.json'),
  "zh-CN": require('../locales/zh-CN.json'),
  "zh-EN": require('../locales/zh-EN.json'),
};

intl.init({
  currentLocale: "zh-CN", // TODO: determine locale here
  locales,
})

const history = createBrowserHistory();
const store = configure();

class RootRouter extends Component {

  // componentDidMount() {
	// 	const self = this,
  //   { tabLanguange} = self.props;
	// 	tabLanguange("zh-CN");
	// }

  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route exact path='/' component={Vister} />
            <Route path='/login' component={Login} />
            <Route path='/userList' component={UserList} /> 
            <Route path='/register' component={Register} />
            <Route path='/index' component={App} />

            {/* <Route path='tFound' component={NotFound} /> */}
            <Redirect from='' to="tFound" />
          </Switch>
        </Router>
      </Provider>
    );
  }
}



// const mapStateToProps = state => ({
//   language: state.lan.indexLanguage.lanage,
// });
// // debugger;

// const mapDispatchToProps = state => {
//     return state.lan.indexLanguage
// };

// export default connect(
// mapDispatchToProps,{
//   tabLanguange
// })(RootRouter);
export default RootRouter;
