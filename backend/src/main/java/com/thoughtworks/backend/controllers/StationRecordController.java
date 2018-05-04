package com.thoughtworks.backend.controllers;

import com.thoughtworks.backend.dao.StationRecordDao;
import com.thoughtworks.backend.dao.UserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

@RestController
@RequestMapping("/stationRecord")
public class StationRecordController {
    @Autowired
    StationRecordDao stationRecordDao;
    @Autowired
    UserDao userDao;

    @RequestMapping("/logList")
    public ResponseEntity logList() {

        System.out.println(new Date());

        return new ResponseEntity<>(userDao.findAll(), HttpStatus.OK);
    }
}
