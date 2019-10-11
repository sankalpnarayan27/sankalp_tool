import React from 'react';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';

import logo from '../../assets/images/xebia-logo.png';
import logout from '../../assets/images/Logout.svg';

class Header extends React.Component {
    constructor(props){
        super(props);
    }
    
    handleLogout= () =>{
            localStorage.clear();
            window.location.href = '/'; 
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.outerContainer}>
                <Grid container spacing={12}>
                    <Grid className={classes.leftContainer} item sm={6}>
                        <Link to="/home">
                            <img src={logo} className={classes.logoImage}/>
                        </Link>
                        <p className={classes.headerText}>Maturity Assessment Tool</p>
                    </Grid>
                    <Grid item sm={6}>
                        <div className={classes.logOut} onClick={this.handleLogout}>
                            <img src={logout} className={classes.logoutIcon}/>
                            <span className={classes.logoutSpan}>Logout</span>
                        </div>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Header;