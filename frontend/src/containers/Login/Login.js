import React from 'react';
import { Grid, Typography, TextField, Button} from '@material-ui/core';
import Proptypes from 'prop-types';
import { Redirect } from 'react-router';

import image from '../../assets/images/login-page.png';


class Login extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: "",
            password: "",
            inputClass: ""
        }
    }

    handleEmailChange = evt => {
            this.setState({ email: evt.target.value });
        };

    handlePasswordChange = evt => {
        this.setState({ password: evt.target.value });
       };
    
    validate=(email,password)=>{
        let emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        ///^[a-zA-Z0-9_@./#&+-]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
        let passwordRegex =/^$|\s+/;
        return {
            email: !emailRegex.test(email),
            password: passwordRegex.test(password)
          };
    }

    handleSubmit=({email, password})=>{
        let params = {
            username: email,
            password: password
        }
        this.props.getLoggedIn(params);
    }
    
    render(){
        if(this.props.login.data){
            return (
                <Redirect to={'/home'}/>
              )
        }
        const {classes} = this.props;
        const errors = this.validate(this.state.email, this.state.password);
        const isDisabled = Object.keys(errors).some(x => errors[x]);
        return(
            <div style={{height: '100%'}}>
            <form onSubmit={()=>this.handleSubmit(this.state)}>
            <Grid container spacing={12}>
            <Grid item sm={4}>
                <div className={classes.leftPane}>
                    <img src={image} width='100%' height='100%' />
                </div>
            </Grid>
            <Grid item sm={8}>
                <Grid container spacing={12}>
                    {/* <Grid item sm={3}></Grid> */}
                    <Grid item sm className={classes.loginWrapper}>
                        <div className={classes.loginContainer}>
                            <div className={classes.loginContent}>
                                <Typography className={classes.loginText}>
                                    Login
                                </Typography>
                                <TextField id="loginId" 
                                    style={{width: '100%'}} 
                                    value={this.state.email}
                                    type="text" 
                                    label="Enter Email ID" 
                                    onChange={this.handleEmailChange}
                                    className={this.state.inputClass}
                                    />
                                <div className={classes.passwordContainer}>
                                    <TextField id="pass" 
                                        style={{width: '100%'}} 
                                        value={this.state.password}
                                        type="password" 
                                        label="Password" 
                                        onChange={this.handlePasswordChange}/>
                                </div>
                                {this.props.login.data === null ?
                                   <div className={classes.validText}>
                                    Please enter valid username and password
                               </div> : <span></span>
                                }
                                <Button variant="contained" disabled = {isDisabled} color="secondary" className={classes.button} onClick={()=>this.handleSubmit(this.state)}>
                                    Login
                                </Button>
                                <Button variant="raised"  disabled = {true} className={classes.forgotPassText}>Forgot Password?</Button>
                            </div>
                        </div>
                    </Grid>
                    {/* <Grid item sm={3}></Grid> */}
                </Grid>
            </Grid>
            </Grid>
            </form>
            </div>
        );
    }
}



export default Login;