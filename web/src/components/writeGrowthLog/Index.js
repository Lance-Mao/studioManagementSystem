import React, {Component} from 'react';
import {Card, Row, Col,Button} from 'antd';
import {connect} from 'react-redux';
import '../../static/css/writeGrowthLog.css'
import ArticleList from './ArticleList';
import EditArticles from './EditArticles';
import EditArticlesByMarkdown from './EditArticlesByMarkdown';
import * as studentListAction from '../../action/stationLog';
import StationLog from "../../reducers/stationLog";


class Index extends Component {

    constructor(){
        super();
        this.state = {
            editContent: "",
            loading: false,
            iconLoading: false,
        };
    }

    enterLoading = () => {
        this.setState({loading: true});
    };

    getEditContent(e){
        this.setState({
            editContent: e
        });
    }

    render() {
        return (
            <div>
                <Row>
                    <Button className="postButton" type="primary" loading={this.state.loading} onClick={this.enterLoading}>
                        发布
                    </Button>
                </Row>
                <Row>
                    <Col span={4}>
                        <Card title="成长日志列表" extra={<a href="#">More</a>} style={{margin: 5}}>
                            <ArticleList/>
                        </Card>
                    </Col>

                    <Col span={10}>
                        <Card title="编辑" extra={<a href="#">More</a>} style={{margin: 5}}>
                            <EditArticles getEditContent={this.getEditContent.bind(this)}/>
                        </Card>
                    </Col>
                    <Col span={10}>
                        <Card title="预览" extra={<a href="#">More</a>} style={{margin: 5}}>
                            <EditArticlesByMarkdown editContent={this.state.editContent}/>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}


export default Index;