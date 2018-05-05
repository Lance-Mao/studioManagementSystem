import React, {Component} from 'react';
import {Button, Card, Col, Row} from 'antd';
import {connect} from 'react-redux';
import '../../static/css/writeGrowthLog.css'
import ArticleList from './ArticleList';
import EditArticles from './EditArticles';
import EditArticlesByMarkdown from './EditArticlesByMarkdown';


class Index extends Component {

    constructor(){
        super();
        this.state = {
            editContent: "",
            loading: false,
            iconLoading: false,
            selectViewOne: true,
            selectViewTwo: true,
            selectViewThr: false,
            roleName:"预览"
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

    selectView(){
        let whetherToPreviewThr = this.state.selectViewThr;
        let whetherToPreviewOne = this.state.selectViewOne;
        this.setState(
            {
                selectViewThr:!whetherToPreviewThr,
                selectViewOne:!whetherToPreviewOne,
                roleName: whetherToPreviewThr ? "预览" : "关闭预览"
            })
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
                    {
                        this.state.selectViewOne ? <Col span={6}>
                            <Card title="成长日志列表" extra={<a href="#">More</a>} style={{margin: 5}}>
                                <ArticleList/>
                            </Card>
                        </Col> : ""
                    }

                    {
                        this.state.selectViewTwo ? <Col span={12}>
                            <Card title="编辑" extra={<a onClick={this.selectView.bind(this)}>{this.state.roleName}</a>} style={{margin: 5}}>
                                <EditArticles getEditContent={this.getEditContent.bind(this)}/>
                            </Card>
                        </Col> : ""
                    }

                    {
                        this.state.selectViewThr ? <Col span={12}>
                            <Card title="预览" extra={<a href="#">More</a>} style={{margin: 5}}>
                                <EditArticlesByMarkdown editContent={this.state.editContent}/>
                            </Card>
                        </Col> : ""
                    }


                </Row>
            </div>
        );
    }
}


export default Index;