import { GET_TEST_LISTS } from './types';
import API from '../../../apis/API';

export const getTestData = (id) => {
    return (dispatch) => {
        return API.get('/api/user/assessment?orgId=' + id)
        .then((response) => {
            console.log("response.data>>>>>>>>", response.data);
            dispatch(getTestDataAction(response.data.assessmentResponses));
        })
        .catch((error) => {
            console.log(error);
        })
    }
}

const getTestDataAction = (data) => {
    return {
        type: GET_TEST_LISTS,
        payload: {
            data,
            error: null
        }
    }
}