import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'redux';

import Login from './Login';
import styles from './styles/style';
import { getLogin } from './actions';

const mapStateToProps = state => {
    return { 
    login: state.loggedIn.data
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getLoggedIn: (params) => {
            dispatch(getLogin(params));
        }
    }
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withStyles(styles),
)(Login);