import {GET_LOGGED_IN_SUCCESS, GET_LOGGED_IN_FAILURE} from '../actions/types';

const initialState = {
    data: []
}
export default function loggedIn(state=initialState, actions ) {
    switch(actions.type){
        case GET_LOGGED_IN_SUCCESS: 
            return Object.assign({},state, {data: actions.payload});
        case GET_LOGGED_IN_FAILURE:
            return Object.assign({},state, {data: actions.payload});
        default: 
            return state;         
    }
}