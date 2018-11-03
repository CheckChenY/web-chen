import React,{ Component } from 'react';
import { Button } from 'antd';
import intl from 'react-intl-universal';
import Header from '../header/index';

class Reginster extends Component{

    render(){
        const self = this,
        { plusAction ,plus} = self.props;
        return(
            <div>
                <Header />
                <div>我是注册页面</div>
                <div>
                    <Button type='primary'
                        onClick={()=>plusAction(plus?plus:1)}
                    >
                        {intl.get('plus')}{plus?plus:1}
                    </Button>
                </div>
            </div>
        )
    }
}
export default Reginster;