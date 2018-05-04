import React, {Component} from 'react';
import {Card, Row, Col} from 'antd';
import {connect} from 'react-redux';
import StudentList from './StudentList';
import GrowthLogList from './GrowthLogList';
import * as studentListAction from '../../action/stationLog';
import StationLog from "../../reducers/stationLog";

class Index extends Component {

    constructor() {
        super();
    }

    componentWillMount() {
        this.props.getStudentList();
    }

    render() {
        return (
            <div>
                <Row>
                    <Col span={8}><StudentList/></Col>
                    <Col span={16}><GrowthLogList/></Col>
                </Row>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        studentList: state.StationLog.studentList
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getStudentList: () => {
            dispatch(studentListAction.getStationLogList());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);