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

const history = createBrowserHistory();
const store = configure();

class RootRouter extends Component {
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

export default RootRouter;
