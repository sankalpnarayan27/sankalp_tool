import { 
    GET_FRAMWORKS_LIST, 
    GET_QUESTION_LIST,
    GET_DRAFT_DATA, 
    GET_FILTERS_LIST,
    CLEAR_QUESTION_LIST,
    GET_CREATE_RESPONSE,
    CLEAR_DRAFT_DATA } from './types';
import API from '../../../apis/API';

export const getFrameworkList = () => {
    return (dispatch) => {
        return API.get('/api/user/framework')
        .then((response) => {
            dispatch(getFrameworks(response.data));
        })
        .catch((error) => {
            console.log("error",error);
        })
    }
}

export const getResumeData = (orgId) => {
    return (dispatch) => {
        return API.get('api/user/editTest?organisationTestId=' + orgId)
        .then((response) => {
            dispatch(getResumeDraftDetails(response.data));
        })
        .catch((error) => {
            console.log("error",error);
        })
    }
}

export const getQuestionsList = (name) => {
    var val = name.toString();
    return (dispatch) => {
        return API.get('/api/user/questions?framework=' + val)
        .then((response) => {
            dispatch(getQuestionData(response.data));
        })
        .catch((error) => {
            console.log("error", error);
        })
    }
}

export const clearQuestionData = () => {
    return {
        type: CLEAR_QUESTION_LIST
    }
}

export const clearDraftData = () => {
    return {
        type: CLEAR_DRAFT_DATA
    }
}
export const createTest = (questions) => {
    console.log("question",questions);
    return (dispatch)=> {
        return API.post('/api/user/createAndDraftTest',questions,config)
        .then((response)=>{
            console.log("framework???????", response.data);
            dispatch(createTestDataConfirm(response));
        })
        .catch((error)=>{
            console.log(error);
        })
    }
}
export const getFilterList = () => {
    return (dispatch) => {
        return API.get('/api/filter')
        .then((response) => {
            dispatch(getFilterData(response.data));
        })
        .catch((error) => {
            console.log("error", error);
        })
    }
}

export const postDraftData = (draftData) => {
    return () => {
        return API.post('/api/user/createAndDraftTest', draftData);
    }
}

const getFrameworks = (data) => {
    return {
        type: GET_FRAMWORKS_LIST,
        payload: {
            data,
            error: null
        }
    }
}

const getQuestionData = (data) => {
    return {
        type: GET_QUESTION_LIST,
        payload: {
            data,
            error: null
        }
    }
}

const getFilterData = (data) => {
    return {
        type: GET_FILTERS_LIST,
        payload: {
            data,
            error: null
        }
    }
}

const getResumeDraftDetails = (data) => {
    return {
        type: GET_DRAFT_DATA,
        payload: {
            data,
            error: null
        }
    }
}

const createTestDataConfirm = (res) =>{
    return {
        type: GET_CREATE_RESPONSE,
        payload: {
            response: res.data,
            error: null
        }
    }
}