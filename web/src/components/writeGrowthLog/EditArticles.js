import React, {Component} from 'react';
import {Card, Row, Col, Input} from 'antd';
import {connect} from 'react-redux';

const {TextArea} = Input;

class EditArticles extends Component {

    constructor() {
        super();
        this.state = {
            growthLog: ""
    }
    }

    handleWriteGrowthLogBlur(event) {
        this.props.getEditContent(event.target.value);
    }

    render() {
        return (
            <div>
                <TextArea rows={20} onChange={this.handleWriteGrowthLogBlur.bind(this)}/>
            </div>
        );
    }
}

export default EditArticles;
