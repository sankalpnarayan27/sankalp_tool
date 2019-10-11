const styles = theme => ({
    outerContainer: {
        height: '100%',
        backgroundColor: '#6C205F',
        padding: '20px'
    },
    leftContainer: {
        display: '-webkit-inline-box'
    },
    logoImage: {
        width: 'auto',
        height: 'auto',
        borderRight: '2px solid #aaa',
        paddingRight: '20px'
    },
    headerText: {
        color: '#FFAB39',
        fontSize: '16px',
        letterSpacing: '1px',
        margin: '7px 0 0 25px'
    },
    logOut: {
        marginLeft: 'auto',
        marginRight: '0',
        width: '80px',
        marginTop: '6px',
        cursor: 'pointer'
    },
    logoutIcon: {
        marginTop: '-2px',
        position: 'absolute'
    },
    logoutSpan: {
        color: '#fff',
        fontSize: '16px',
        marginLeft: '30px'
    }
});

export default styles;