import React, {Component} from 'react';
import {Card, Row, Col, List} from 'antd';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

class ArticleList extends Component {

    render() {
        return (
            <div>
                <List
                    size="small"
                    header={<div>Header</div>}
                    footer={<div>Footer</div>}
                    bordered
                    dataSource={this.props.userInfo ? this.props.userInfo.stationRecord : {}}
                    renderItem={item => (<List.Item>{item.logTitle}</List.Item>)}
                />
            </div>
        )
    }
}


export default ArticleList;
