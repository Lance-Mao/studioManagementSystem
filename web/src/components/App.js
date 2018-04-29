import React, {Component} from 'react';
import '../static/css/App.css';
import {Link, withRouter} from 'react-router-dom';
import {Layout, Menu, Breadcrumb, Icon, Row, Col, Tabs, message} from 'antd'
import Index from './stationLog/Index'

const { SubMenu } = Menu;
const MenuItemGroup = Menu.ItemGroup;
const {Header, Content, Footer, Sider} = Layout;

class App extends Component {
    constructor(){
        super();
        this.state = {
            current: 'mail',
            pathName: "站会日志"
        }
    }

    path(pathName){
        this.setState({pathName});
    }

    handleClick = (e) => {
        this.setState({
            current: e.key,
        });
    };

    render() {
        return (
            <Layout>
                    <Menu
                        onClick={this.handleClick}
                        selectedKeys={[this.state.current]}
                        mode="horizontal"
                        style={{ height: '100%',width: '100%', borderRight: 0,backgroundColor:"#F0F1F5" }}
                    >
                        <Menu.Item key="mail">
                            <Icon type="mail" />Navigation One
                        </Menu.Item>
                        <Menu.Item key="app" disabled>
                            <Icon type="appstore" />Navigation Two
                        </Menu.Item>
                        <SubMenu title={<span><Icon type="setting" />Navigation Three - Submenu</span>}>
                            <MenuItemGroup title="Item 1">
                                <Menu.Item key="setting:1">Option 1</Menu.Item>
                                <Menu.Item key="setting:2">Option 2</Menu.Item>
                            </MenuItemGroup>
                            <MenuItemGroup title="Item 2">
                                <Menu.Item key="setting:3">Option 3</Menu.Item>
                                <Menu.Item key="setting:4">Option 4</Menu.Item>
                            </MenuItemGroup>
                        </SubMenu>
                        <Menu.Item key="alipay">
                            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
                        </Menu.Item>
                        <Menu.Item style={{float:"right", marginRight: 40}}>
                            <Link to={'/login'} onClick={this.path.bind(this, "登陆")}>
                                登陆
                            </Link>
                        </Menu.Item>
                    </Menu>
                <Layout>
                    <Sider style={{ background: '#fff' }}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%', borderRight: 0,backgroundColor:"#F0F1F5" }}
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
