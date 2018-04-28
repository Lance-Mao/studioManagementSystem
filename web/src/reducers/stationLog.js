//action types
const INIT_STUDENT_LIST = "INIT_STUDENT_LIST";
const INIT_STATION_LOG_LIST = "INIT_STATION_LOG_LIST";

//reducer
export default function (state, action) {
    if (!state) {
        state = {studentList: ""};
    }
    switch (action.type) {
        case INIT_STUDENT_LIST:
            return {studentList: action.studentList};
        case  INIT_STATION_LOG_LIST:
            return {stationLogList: action.stationLogList};
        default:
            return state;
    }
}

//action creators
export const initStudentList = (studentList) => {
    return {type: INIT_STUDENT_LIST, studentList};
}

export const initStationLogList = (stationLogList) => {
    return {type: INIT_STATION_LOG_LIST, stationLogList};
}
