import React, {Component} from 'react';
import {Card} from 'antd';
import reqwest from 'reqwest';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import * as studentListAction from '../../action/stationLog';
import {List, Avatar, Button, Spin} from 'antd';
import Student from './Student';

const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';

class StudentList extends Component {

    constructor() {
        super();
        this.state = {
            // loading: true,
            loadingMore: false,
            showLoadingMore: true,
            studentList: [],
        }
    }

    getData = (callback) => {
        reqwest({
            url: fakeDataUrl,
            type: 'json',
            method: 'get',
            contentType: 'application/json',
            success: (res) => {
                callback(res);
            },
        });
    };

    onLoadMore = () => {
        this.setState({
            loadingMore: true,
        });
        this.getData((res) => {
            const data = this.props.studentList.concat(res.results);
            this.setState({
                data,
                loadingMore: false,
            }, () => {
                // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
                // In real scene, you can using public method of react-virtualized:
                // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
                window.dispatchEvent(new Event('resize'));
            });
        });
    }

    render() {
        const {loadingMore, showLoadingMore} = this.state;
        const loadMore = showLoadingMore ? (
            <div style={{textAlign: 'center', marginTop: 12, height: 32, lineHeight: '32px'}}>
                {loadingMore && <Spin/>}
                {!loadingMore && <Button onClick={this.onLoadMore}>loading more</Button>}
            </div>
        ) : null;
        return (
            <Card title="学生列表" extra={<a href="#">More</a>} style={{margin: 5, overflow: 'auto', height: 1000}}>
                <List
                    className="demo-loadmore-list"
                    // loading={loading}
                    itemLayout="horizontal"
                    loadMore={loadMore}
                    dataSource={this.props.studentList}
                    renderItem={item => (
                        // actions={[<a>edit</a>, <a>more</a>]}
                        <List.Item>
                            <Student student={item}/>
                            {/*<div>content</div>*/}
                        </List.Item>
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

export default connect(mapStateToProps)(StudentList);