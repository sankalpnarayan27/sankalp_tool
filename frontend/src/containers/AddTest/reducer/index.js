import { 
    GET_FRAMWORKS_LIST, 
    GET_QUESTION_LIST, 
    GET_FILTERS_LIST, 
    CLEAR_QUESTION_LIST,
    GET_DRAFT_DATA,
    CLEAR_DRAFT_DATA } from '../actions/types';

const initialState = {
    frameworkDataP: [],
    questionListP: [],
    filterDataP: [],
    draftData: []
}

export function frameworksData(state=initialState, actions) {
    switch(actions.type) {
        case GET_FRAMWORKS_LIST:
            return Object.assign({}, state, {frameworkDataP: actions.payload.data});
        default:
            return state;
    }
}

export function filterData(state=initialState, actions) {
    switch(actions.type) {
        case GET_FILTERS_LIST: 
            return Object.assign({}, state, {filterDataP: actions.payload.data});
        default:
            return state;
    }
}

export function questionData(state=initialState, actions) {
    switch(actions.type) {
        case GET_QUESTION_LIST:
            return Object.assign({}, state, {questionListP: actions.payload.data});
            case CLEAR_QUESTION_LIST:
                return Object.assign({}, state, {questionListP: [],createRes:""});
            case GET_CREATE_RESPONSE:
                return {
                    ...state,
                    createRes: actions.payload.response
                }
        default:
            return state;
    }
}

export function resumeDraftDataLoad(state= initialState, actions) {
    switch(actions.type) {
        case GET_DRAFT_DATA:
            return Object.assign({}, state, {draftData: actions.payload.data});
        case CLEAR_DRAFT_DATA:
            return Object.assign({}, state, {draftData: []});
        default:
            return state;
    }
}