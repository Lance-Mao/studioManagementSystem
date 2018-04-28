import React, {Component} from 'react';
import GrowthLog from './GrowthLog'
import {Card,Row, Col} from 'antd';

/**
 * 成长日志
 */
class GrowthLogList extends Component {
    render() {
        return (
            <div>
                <Card title="成长日志内容" extra={<a href="#">More</a>} style={{margin:5}}>
                    <GrowthLog/>
                </Card>
            </div>
        );
    }

}

export default GrowthLogList;