package com.thoughtworks.backend.dao;

import com.thoughtworks.backend.entity.Student;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;


public interface UserDao extends CrudRepository<Student,Long> {
    @Query("select stu from Student stu where stu.username = ?1 and stu.password = ?2")
    List<Student> login(String username, String password);

}
