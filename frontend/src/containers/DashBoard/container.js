import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { compose } from 'redux';

import DashBoard from './DashBoard';
import styles from './styles/style';
import { getCompData } from './actions';

const mapStateToProps = state => {
    console.log("state", state);
    return {
        comp: state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCompanyData: () => {
            dispatch(getCompData());
        }
    }
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withStyles(styles),
)(DashBoard)