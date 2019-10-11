import {GET_LOGGED_IN_SUCCESS, GET_LOGGED_IN_FAILURE} from './types';
import API from '../../../apis/API'

const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
export const getLogin = (params) => {
    const param = JSON.stringify(params);
    return (dispatch) => {
       return API.post('/api/signin',param,config)
        .then( (response) => {
            localStorage.setItem('accessToken', response.data.accessToken)
            dispatch(getLoginSuccess(response.data));
        })
        .catch(error=>{
            dispatch(getLoginFailure(error));
            throw(error);
        })
    }
}



const getLoginSuccess = (data) => {
   return {
       type: GET_LOGGED_IN_SUCCESS,
       payload: {
           data,
           error: null
       }
   } 
}

const getLoginFailure = (error) => {
    return {
        type: GET_LOGGED_IN_FAILURE,
        payload: {
            data: null,
            error
        }
    }
}