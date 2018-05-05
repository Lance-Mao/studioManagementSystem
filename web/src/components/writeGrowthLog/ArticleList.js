import React, {Component} from 'react';
import {Card, Row, Col,List} from 'antd';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

class ArticleList extends Component {

    render() {
        const data = [
            'Racing car sprays burning fuel into crowd.',
            'Japanese princess to wed commoner.',
            'Australian walks 100km after outback crash.',
            'Man charged over missing wedding girl.',
            'Los Angeles battles huge wildfires.',
        ];
        return (
            <div>
                <List
                    size="small"
                    header={<div>Header</div>}
                    footer={<div>Footer</div>}
                    bordered
                    dataSource={data}
                    renderItem={item => (<List.Item>{item}</List.Item>)}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("ArticleList中的数据：", state);
    return {}
};

export default withRouter(connect(mapStateToProps)(ArticleList));
