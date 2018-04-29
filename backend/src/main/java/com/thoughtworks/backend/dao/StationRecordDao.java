package com.thoughtworks.backend.dao;

import com.thoughtworks.backend.entity.StationRecord;
import org.springframework.data.repository.CrudRepository;

public interface StationRecordDao extends CrudRepository<StationRecord,Long> {
}
