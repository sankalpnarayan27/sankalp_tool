import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { compose } from 'redux';

import AddTest from './AddTest';
import styles from './styles/style';
import { 
    getFrameworkList, 
    getQuestionsList, 
    getFilterList, 
    postDraftData,
    getResumeData,
    clearDraftData, 
    createTest,
    clearQuestionData } from './actions';

const mapStateToProps = state => {
    console.log("state>>>>>>>>>>.", state);
    return {
        framework: state,
        orgDetails: state.compData
        // question: state
    }
}

const mapDispatchToProps = dispach => {
    return {
        getFrameworkData: () => {
            dispach(getFrameworkList());
        },
        getQuestions: (name) => {
            dispach(getQuestionsList(name));
        },
        clearQuestionList: () => {
            dispach(clearQuestionData());
        },
        getFilterData: () => {
            dispach(getFilterList());
        },
        saveDraftData: (draftData) => {
            dispach(postDraftData(draftData));
        },
        clearDraft: () => {
            dispach(clearDraftData());
        },
        getResumeTestData: (orgId) => {
            dispach(getResumeData(orgId));
        },
        createTest : (questions) => {
            dispach(createTest(questions));
        }
    }
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withStyles(styles)
)(AddTest)