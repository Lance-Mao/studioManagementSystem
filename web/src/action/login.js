import * as request from '../request/request';
import * as StatusCode from '../constants/StatusCode'

export const landingJudgment = (content) => {
    return {
        type: "LANDING_JUDGMENT",
        content
    }
};

export const getLandingInfo = (data) => {
    console.log(data);
    return dispatch => {
        request.post(`/web/user/login`,data)
            .then(result => {
                if (result.status === StatusCode.OK) {
                    dispatch(landingJudgment(result.data));
                }
            })
    }
}