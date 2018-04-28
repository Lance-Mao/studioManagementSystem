import React, {Component} from 'react';
import { Card } from 'antd';
import Student from './Student';

class StudentList extends Component {
    render() {
        return (
            <div>
                <Card title="学生列表" extra={<a href="#">More</a>} style={{ margin:5 }}>
                    <Student/>
                </Card>
            </div>
        );
    }
}

export default StudentList;