import * as ActionTypes from './ActionTypes';

export const Partners = (state = { errMess: null, partners: [] }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_PARTNERS:
            return { ...state, errMess: null, partners: action.payload };
        case ActionTypes.PARTNERS_LOADING:
            return { ...state, errmess: null, partners: [] };
        case ActionTypes.PARTNERS_FAILED:
            return { ...state, errMess: action.payload };
        default:
            return state;
    }
};
