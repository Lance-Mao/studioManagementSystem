import * as request from '../request/request';
import * as StatusCode from '../constants/StatusCode'

export const allStationLogList = (content) => {
    console.log(content, "content");
    return {
        type: "INIT_STUDENT_LIST",
        content
    };
};

export const getStationLogList = () => {
    return dispatch => {
        request.get(`/stationRecord/logList`)
            .then(result => {
                    if (result.status === StatusCode.OK) {
                        dispatch(allStationLogList(result.data));
                    }
                }
            )
    }
};