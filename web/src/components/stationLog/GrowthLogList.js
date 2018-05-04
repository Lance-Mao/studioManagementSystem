import React, {Component} from 'react';
import GrowthLog from './GrowthLog'
import {connect} from 'react-redux';
import {List, Card, Row, Col} from 'antd';

/**
 * 成长日志
 */
class GrowthLogList extends Component {

    constructor(props){
        super(props);
    }

    render() {
        const logList = this.props.studentList;
        const listData = [];
        for (let item of this.props.studentList) {
            listData.push({
                href: 'http://ant.design',
                title: `ant design part`,
                avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
                content: item.logContent,
            });
        }

        const pagination = {
            pageSize: 10,
            current: 1,
            total: listData.length,
            onChange: (() => {
            }),
        };


        return (
            <Card title="成长日志内容" extra={<a href="#">More</a>} style={{margin: 5}}>
                <List
                    itemLayout="vertical"
                    size="large"
                    pagination={pagination}
                    dataSource={listData}
                    footer={<div><b>ant design</b> footer part</div>}
                    renderItem={item => (
                        <GrowthLog growthLog={item} />
                    )}
                />
            </Card>

        );
    }

}

const mapStateToProps = (state) => {
    return {
        studentList: state.StationLog.studentList
    };
};

export default connect(mapStateToProps)(GrowthLogList);