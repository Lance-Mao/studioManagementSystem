package com.thoughtworks.backend.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "web_student")
public class Student {

    @Id
    @GeneratedValue
    private int id;
    private String studentName;//学生姓名
    private String studentId;//学生学号
    private String studentImage;//学生头像
    private String studentGrade;//学生年级
    private String studentSkill;//学生专业

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getStudentName() {
        return studentName;
    }

    public void setStudentName(String studentName) {
        this.studentName = studentName;
    }

    public String getStudentId() {
        return studentId;
    }

    public void setStudentId(String studentId) {
        this.studentId = studentId;
    }

    public String getStudentImage() {
        return studentImage;
    }

    public void setStudentImage(String studentImage) {
        this.studentImage = studentImage;
    }

    public String getStudentGrade() {
        return studentGrade;
    }

    public void setStudentGrade(String studentGrade) {
        this.studentGrade = studentGrade;
    }

    public String getStudentSkill() {
        return studentSkill;
    }

    public void setStudentSkill(String studentSkill) {
        this.studentSkill = studentSkill;
    }
}
