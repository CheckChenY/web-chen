import { connect } from 'react-redux';
import Register from '../../components/register/index';
import {
    plusAction
} from '../../redux/actions/register/index';
// import {
//     tabLanguange
// } from '../../redux/actions/header/index';


//lista  渲染頁面獲取的參數值
//useree  => reducers/index->useree
//userListss  => reducers/user/index->userListss
//listsssss  => reducers/user/userList->listsssss
const mapStateToProps = state => ({
  plus: state.register.indexReginster.plus,
//   lanage: state.lan.tabLanguange.language,
});

const mapDispatchToProps = dispatch => ({
    plusAction(d) {
        dispatch(plusAction(d));
    },
    // tabLanguange() {
    //     dispatch(tabLanguange());
    // }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);