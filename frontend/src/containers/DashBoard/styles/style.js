const styles = theme => ({
    outerContainer: {
        height: '-webkit-fill-available',
        backgroundColor: '#F7F6F7',
    },
    innerContainer: {
        padding: '20px',
        height: '100vh'
    },
    searchContainer: {
        paddingLeft: "10%",
    },
    inputWrapper: {
        height: "40px",
        width: "75%",
        border: "1px solid #000000",
        borderRadius: "4px",
        backgroundColor: "#FFFFFF",
        marginTop: "17px",
    },
    inputBox:  {
        width: "90%",
        height: "89%",
        border: "none",
        fontSize: "16px",
        paddingLeft: "5px",
        marginLeft: "5px",
        lineHeight: "20px",
        paddingTop: "3px",
        '&:focus': {
            outline: "none"
        }
    },
    searchButtonWrapper: {
        height: "89%",
        width: ""
    },
    headingh1: {
        color: '#9B9B9B',
        fontSize: '24px',
        textAlign: 'center',
        fontWeight: '100',
        margin: '50px 0'
    },
    headingh2: {
        fontWeight: '100'
    },
    ulData: {
        margin: '0',
        padding: '0'
    },
    liData: {
        listStyle: 'none',
        display: 'inline-block',
        marginLeft: '30px',
        cursor: 'pointer',
        ':hover': {
            boxShadow: '0 5px 10px 0 rgba(108,32,95,0.3)'
        }
    },
    listContainer: {
        justifyContent: 'center'
    },
    compContainer: {
        width: '250px',
        height: '350px',
        border: '1px solid rgba(108,32,95,0.18)',
        borderRadius: '15px',
        backgroundColor: '#FFFFFF',
        textAlign: 'center',
        justifyContent: 'center'
    },
    compLogo: {
        marginTop: '80px'
    },
    button: {
        borderRadius: '4px',
        background: 'linear-gradient(180deg, #FFAB39 0%, #F07200 100%)',
        boxShadow: '0 4px 4px 0 rgba(246,173,2,0.3)',
        margin: '15px 15px 0 auto',
        padding: '8px 20px',
        display: 'block',
        textTransform: 'none',
        fontWeight: '100',
        fontSize: '17px',
        letterSpacing: '1px'
    },
    noMatchText: {
        fontWeight: 'bold',
        color: '#ff0000'
    },
    line: {
        borderBottom: '2px solid #CCCCCC',
        margin: '20px -20px 0 -20px',
    }
});

export default styles;