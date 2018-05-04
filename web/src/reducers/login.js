const LANDING_JUDGMENT = "LANDING_JUDGMENT";

export default function (state=[],action) {
    switch (action.type) {
        case LANDING_JUDGMENT:
            return {...state,isLogin:action.content.isLogin,userInfo:action.content.stu};
        default:
            return state;
    }
}