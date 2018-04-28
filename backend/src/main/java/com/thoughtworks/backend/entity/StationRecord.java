package com.thoughtworks.backend.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

@Entity
@Table(name = "web_stationRecord")
public class StationRecord {
    /**
     * 目前将所有字段信息放在同一张表中
     */
    @Id
    @GeneratedValue
    private int id;
    private Date releaseDate;  //发布日期
    private String studentName;//学生姓名
    private String studentImage;//学生头像
    private String studentDescription;//学生相关描述

    private String logTitle;    //日志标题
    private String logContent;    //日志内容
    private String logLike;    //日志喜欢
    private String logLikeIt;  //日志点赞
    private String logCommentCount;  //日志评论次数
    private String logCommentContent;  //日志评论内容
    private String logImage;  //日志图片

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Date getReleaseDate() {
        return releaseDate;
    }

    public void setReleaseDate(Date releaseDate) {
        this.releaseDate = releaseDate;
    }

    public String getStudentName() {
        return studentName;
    }

    public void setStudentName(String studentName) {
        this.studentName = studentName;
    }

    public String getStudentImage() {
        return studentImage;
    }

    public void setStudentImage(String studentImage) {
        this.studentImage = studentImage;
    }

    public String getStudentDescription() {
        return studentDescription;
    }

    public void setStudentDescription(String studentDescription) {
        this.studentDescription = studentDescription;
    }

    public String getLogTitle() {
        return logTitle;
    }

    public void setLogTitle(String logTitle) {
        this.logTitle = logTitle;
    }

    public String getLogContent() {
        return logContent;
    }

    public void setLogContent(String logContent) {
        this.logContent = logContent;
    }

    public String getLogLike() {
        return logLike;
    }

    public void setLogLike(String logLike) {
        this.logLike = logLike;
    }

    public String getLogLikeIt() {
        return logLikeIt;
    }

    public void setLogLikeIt(String logLikeIt) {
        this.logLikeIt = logLikeIt;
    }

    public String getLogCommentCount() {
        return logCommentCount;
    }

    public void setLogCommentCount(String logCommentCount) {
        this.logCommentCount = logCommentCount;
    }

    public String getLogCommentContent() {
        return logCommentContent;
    }

    public void setLogCommentContent(String logCommentContent) {
        this.logCommentContent = logCommentContent;
    }

    public String getLogImage() {
        return logImage;
    }

    public void setLogImage(String logImage) {
        this.logImage = logImage;
    }
}
