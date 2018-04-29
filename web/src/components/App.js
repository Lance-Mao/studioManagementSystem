import React, {Component} from 'react';
import '../static/css/App.css';
import {Link, withRouter} from 'react-router-dom';
import {Layout, Menu, Breadcrumb, Icon, Row, Col, Tabs, message} from 'antd'
import Index from './stationLog/Index'

const { SubMenu } = Menu;
const {Header, Content, Footer, Sider} = Layout;

class App extends Component {
    constructor(){
        super();
        this.state = {
            pathName: "站会日志"
        }
    }

    path(pathName){
        this.setState({pathName});
    }
    render() {
        return (
            <Layout>
                <Header className="header">
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['1']}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="1">工作室模块一</Menu.Item>
                        <Menu.Item key="2">工作室模块二</Menu.Item>
                        <Menu.Item key="3">工作室模块三</Menu.Item>
                    </Menu>
                </Header>
                <Layout>
                    <Sider width={200} style={{ background: '#fff' }}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%', borderRight: 0 }}
                        >
                            <SubMenu key="sub1" title={<span><Icon type="user" />成长计划</span>}>
                                <Menu.Item key="1">
                                    <Link to={'/stationLog'} onClick={this.path.bind(this, "日志列表")}>
                                        <span>
                                    <Icon type="bars"/>站会日志</span></Link>
                                </Menu.Item>
                                <Menu.Item key="2">
                                    <Link to={'/writeGrowthLog'} onClick={this.path.bind(this, "我的日志")}>
                                        <span>
                                    <Icon type="edit"/>写成长日志</span></Link>
                                </Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub2" title={<span><Icon type="laptop" />subnav 2</span>}>
                                <Menu.Item key="5">option5</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>{this.state.pathName}</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                            {this.props.children}
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        );
    }
}

export default App;
