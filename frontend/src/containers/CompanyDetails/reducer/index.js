import { GET_TEST_LISTS } from '../actions/types';

const initialState = {
    compDetails: []
}

export default function testData(state=initialState, actions) {
    switch(actions.type) {
        case GET_TEST_LISTS:
            return Object.assign({}, state, {compDetails: actions.payload.data});
        default:
            return state;
    }
}