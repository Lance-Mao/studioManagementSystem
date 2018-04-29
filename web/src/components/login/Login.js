import React, {Component} from 'react';
import LoginForm from './LoginForm'
import {Layout, Menu, Breadcrumb, Icon, Row, Col, Tabs, message} from 'antd'

const Content = Layout.Content;

class Login extends Component {
    render() {
        var innerHeight = window.innerHeight;
        return (
            <div>
                <Layout>
                    <Content className="ant-layout-content-back" style={{height: innerHeight}}>
                        <LoginForm />
                    </Content>
                </Layout>
            </div>

        );
    }
}

export default Login;