import React, {Component} from 'react';
import {Form, Icon, Input, Button, Checkbox} from 'antd';
import * as login from '../../action/login';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import '../../static/css/login.css'

const FormItem = Form.Item;

class NormalLoginForm extends React.Component {

    constructor() {
        super();
    }

    componentDidMount(){
        let data = this.props.form.getFieldsValue();
        this.props.getLandingState(data);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                if (this.props.isLogin) {
                    this.props.history.push("/stationLog");
                }
                console.log('Received values of form: ', values);
            }
        });
    };

    render() {
        let width = window.innerWidth / 3;
        const {getFieldDecorator} = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form"
                  style={{width: width, margin: "auto", marginTop: width / 3}}>
                <FormItem>
                    {getFieldDecorator('username', {
                        rules: [{required: true, message: 'Please input your username!'}],
                    })(
                        <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>} placeholder="Username"/>
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{required: true, message: 'Please input your Password!'}],
                    })(
                        <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password"
                               placeholder="Password"/>
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>Remember me</Checkbox>
                    )}
                    <a className="login-form-forgot" href="">Forgot password</a>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                    Or <a href="">register now!</a>
                </FormItem>
            </Form>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLogin: state.Login.isLogin
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getLandingState: (data) => {
            dispatch(login.getLandingInfo(data));
        }
    }
};

const LoginForm = Form.create()(NormalLoginForm);
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginForm));
