package com.thoughtworks.backend.entity;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Set;

@Entity
@Table(name = "web_student")
public class Student implements Serializable {

    @Id
    @GeneratedValue
    private int id;
    private String username;//学生姓名
    private String password;
    private String studentId;//学生学号
    private String studentImage;//学生头像
    private String studentGrade;//学生年级
    private String studentSkill;//学生专业

    @OneToMany(mappedBy = "student", cascade = CascadeType.ALL)
    private Set<StationRecord> stationRecord;

    public Student() {
    }

    public Student(String username, String password, String studentId, String studentImage, String studentGrade, String studentSkill) {
        this.username = username;
        this.password = password;
        this.studentId = studentId;
        this.studentImage = studentImage;
        this.studentGrade = studentGrade;
        this.studentSkill = studentSkill;
    }

    public Set<StationRecord> getStationRecord() {
        return stationRecord;
    }

    public void setStationRecord(Set<StationRecord> stationRecord) {
        this.stationRecord = stationRecord;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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
