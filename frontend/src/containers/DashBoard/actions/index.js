import { GET_COMPANY_DATA } from './types';
import API from '../../../apis/API';


export const getCompData = () => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
          }
    }
    console.log("config",config)
    return (dispatch) => {
        return API.get('/api/user/organisation?pageNo=0',config)
        .then((response) => {
            dispatch(getCompanyDataSucess(response.data));
        })
        .catch((error) => {
            console.log(error);
        })
    }
}

const getCompanyDataSucess = (data) => {
    return {
        type: GET_COMPANY_DATA,
        payload: {
            data,
            error: null
        }
    }
}