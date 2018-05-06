import * as request from '../request/request';
import * as StatusCode from '../constants/StatusCode'

export const allStationLogList = (content) => {
    return {
        type: "INIT_STUDENT_LIST",
        content
    };
};

export const getStationLogList = () => {
    return dispatch => {
        request.get(`/web/stationRecord/logList`)
            .then(result => {
                    if (result.status === StatusCode.OK) {
                        dispatch(allStationLogList(result.data));
                    }
                }
            )
    }
};

export const saveGrowthLogAction = (growthLogInfo) => {
    return dispatch => {
        request.post(`/web/stationRecord/saveGrowthLogAction`, growthLogInfo)
            .then(result => {
                if (result.status === StatusCode.OK) {
                    dispatch(getStationLogList());
                }
            })
    }
};