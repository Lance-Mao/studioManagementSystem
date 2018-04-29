package com.thoughtworks.backend.controllers;

import com.thoughtworks.backend.dao.StationRecordDao;
import com.thoughtworks.backend.entity.StationRecord;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/stationRecord")
public class StationRecordController {
    @Autowired
    StationRecordDao stationRecordDao;

    @RequestMapping("logList")
    public ResponseEntity logList() {
        Iterable<StationRecord> stationRecordList = stationRecordDao.findAll();
        System.out.println(123456);
        return new ResponseEntity<>(stationRecordList, HttpStatus.OK);
    }
}
