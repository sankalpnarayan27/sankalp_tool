import { combineReducers } from 'redux';

import loggedIn from '../containers/Login/reducer';
import compData from '../containers/DashBoard/reducer';
import testData from '../containers/CompanyDetails/reducer';
import { 
    frameworksData, 
    questionData, 
    resumeDraftDataLoad,
    filterData } from '../containers/AddTest/reducer';

export default combineReducers({
    loggedIn,
    compData,
    frameworksData,
    questionData,
    filterData,
    testData,
    resumeDraftDataLoad
});