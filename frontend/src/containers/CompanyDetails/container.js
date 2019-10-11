import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { compose } from 'redux';

import CompanyDetails from './CompanyDetails';
import styles from './styles/style';
import { getTestData } from './actions';

const mapStateToProps = state => {
    console.log("state------", state);
    return {
        testDataList: state.testData,
        orgDetails: state.compData
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getTestDataList: (id) => {
            dispatch(getTestData(id));
        }
    }
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withStyles(styles),
)(CompanyDetails)