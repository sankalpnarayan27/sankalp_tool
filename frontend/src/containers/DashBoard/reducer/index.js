import { GET_COMPANY_DATA } from '../actions/types';

const initialState = {
    data: []
}

export default function compData(state=initialState, actions) {
    switch(actions.type) {
        case GET_COMPANY_DATA:
            return Object.assign({}, state, {data: actions.payload});
        default:
            return state;
    }
}