import React, {Component} from 'react';
import {Button, Menu, Dropdown, Icon} from 'antd';

class UserInfo extends Component {
    render(){
        const menu = (
            <Menu>
                <Menu.Item key="1">个人中心</Menu.Item>
                <Menu.Item key="3">退出</Menu.Item>
            </Menu>
        );
        return <div>
            <Dropdown overlay={menu}>
                <Button>
                    {this.props.userInfo.username}<Icon type="down"/>
                </Button>
            </Dropdown>
        </div>
    }
}

export default UserInfo;