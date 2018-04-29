import React, {Component} from 'react';
import {Card, Row, Col,Input} from 'antd';
import ReactMarkdown from 'react-markdown'
import '../../static/css/writeGrowthLog.css'
import {connect} from 'react-redux';

const {TextArea} = Input;

class EditArticlesByMarkdown extends Component {
    render() {
        return (
                <div className="showMarkdown">
                    <ReactMarkdown source={this.props.editContent}/>
                </div>
        )
    }
}

export default EditArticlesByMarkdown;