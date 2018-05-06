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

        const pagination = {
            pageSize: 10,
            current: 1,
            total: this.props.studentList.length,
        };

        return (
            <Card title="成长日志内容" extra={<a href="#">More</a>} style={{margin: 5}}>
                <List
                    itemLayout="vertical"
                    size="large"
                    pagination={pagination}
                    dataSource={this.props.studentList}
                    footer={<div><b>ant design</b> footer part</div>}
                    renderItem={item => (
                        item.stationRecord.map((elem,i) => <GrowthLog growthLog={elem} key={i} />)
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