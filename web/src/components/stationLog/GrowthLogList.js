import React, {Component} from 'react';
import GrowthLog from './GrowthLog'
import {connect} from 'react-redux';
import {List, Card, Row, Col} from 'antd';
import * as studentListAction from "../../action/stationLog";

/**
 * 成长日志
 */
class GrowthLogList extends Component {

    componentDidMount(){
        this.props.getGrowthLogList();
    }

    render() {
        const logList = this.props.growthLogList;
        const listData = [];
        for (let item of logList) {
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
                    dataSource={logList}
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
        growthLogList: state.StationLog.stationLogList
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getGrowthLogList: () => {
            dispatch(studentListAction.getStationLogListByGrowthLog());
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(GrowthLogList);