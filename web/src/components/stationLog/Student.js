import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {List, Avatar, Button, Spin} from 'antd';


class Student extends Component {

    render() {
        const data = this.props.student;
        return (
            <List.Item.Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>}
                title={<a href="https://ant.design">{data.username}</a>}
                description={data.studentSkill}
            />
        );
    }
}

export default Student;