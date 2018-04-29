const LANDING_JUDGMENT = "LANDING_JUDGMENT";

export default function (state=[],action) {
    switch (action.type) {
        case LANDING_JUDGMENT:
            return action.content;
        default:
            return state;
    }
}