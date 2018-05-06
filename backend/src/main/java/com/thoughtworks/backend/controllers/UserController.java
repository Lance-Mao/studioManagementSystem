package com.thoughtworks.backend.controllers;

import com.thoughtworks.backend.dao.UserDao;
import com.thoughtworks.backend.entity.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/web/user")
public class UserController {

    @Autowired
    UserDao userDao;

    @PostMapping("/login")
    public ResponseEntity login(@RequestBody Student student) {
        try {
            boolean msg;
            Map<String, Object> data = new HashMap<>();
            List<Student> stu = userDao.login(student.getUsername(), student.getPassword());
            if ("".equals(stu) || stu.size() == 0) {
                msg = false;
            } else {
                msg = true;
            }
            data.put("stu", stu.get(0));
            data.put("isLogin", msg);
            return new ResponseEntity(data, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return new ResponseEntity("", HttpStatus.INTERNAL_SERVER_ERROR);
    }

}
