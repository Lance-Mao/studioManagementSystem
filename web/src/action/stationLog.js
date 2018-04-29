import * as request from '../request/request';
import * as StatusCode from '../constants/StatusCode'

export const allStationLogList = (content) => {
    return {
        type: "INIT_STUDENT_LIST",
        content
    };
};

export const allStationLogListByGrowthLog = (content) => {
    return {
        type: "INIT_STATION_LOG_LIST",
        content
    }
};

export const getStationLogList = (callback) => {
    return dispatch => {
        request.get(`/stationRecord/logList`)
            .then(result => {
                    if (result.status === StatusCode.OK) {
                        callback();
                        dispatch(allStationLogList(result.data));
                    }
                }
            )
    }
};

export const getStationLogListByGrowthLog = () => {
    return dispatch => {
        request.get(`/stationRecord/logList`)
            .then(result => {
                console.log("1231231", result);
                    if (result.status === StatusCode.OK) {
                        dispatch(allStationLogListByGrowthLog(result.data));
                    }
                }
            )
    }
};