import * as request from '../request/request';
import * as StatusCode from '../constants/StatusCode'

const landingJudgment = (content) => {
    return {
        type: "LANDING_JUDGMENT",
        content
    }
};

const getLandingInfo = (data) => {
    return dispatch => {
        request.post(`/login/login`,data)
            .then(result => {
                if
            })
    }
}