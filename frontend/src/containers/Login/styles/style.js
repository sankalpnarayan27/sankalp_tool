//css will go here
const styles = theme  => ({
    leftPane: {
        height: '100%'
    },
    loginWrapper: {
        paddingLeft: '20%',
        paddingBottom: '150px'
    },
    loginContainer: {
        width:  450,
        height: 400,
        border: '1px solid #E2E2E2',
        bordeRadius: '4px',
        marginTop: '186px'
    },
    loginContent: {
        paddingLeft: '50px',
        paddingRight: '50px',
        width: '78%'
    },
    loginText: {
        color: '#6C205F',
        fontSize: '36px',
        paddingTop: '35px',
        marginBottom: '10px'
    },
    emailText: {
        color: '#9B9B9B',
        fontSize: '16px',
        paddingTop: '20px'
    },
    passwordContainer: {
        marginTop: '20px'
    },
    button: {
        borderRadius: '4px',
        background: 'linear-gradient(180deg, #FFAB39 0%, #F07200 100%)',
        boxShadow: '0 4px 4px 0 rgba(246,173,2,0.3)',
        marginTop: '25px',
        width: '100%',
        height: '50px',
        cursor: "pointer"
    },
    forgotPassText: {
        marginTop: '10px',
        fontSize: '14px',
        textAlign: 'center',
        textTransform: 'capitalize',
        width: '100%',
        backgroundColor: 'transparent',
        "&:hover": {
            backgroundColor: "transparent"
        }
    },
    invalid: {
        border: '1px solid #ff0000'
    },
    validText: {
        color: 'red',
        fontSize: '11px'
    }
});

export default styles;