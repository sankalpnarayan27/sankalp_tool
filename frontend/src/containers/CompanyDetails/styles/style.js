const styles = theme => ({
    outerContainer: {
        height: '-webkit-fill-available'
    },
    innerContainer: {
        width: 'auto',
        height: '100vh',
        margin: '0 auto',
        padding: '20px 30px'
    },
    headingh2: {
        color: '#6C205F',
        fontSize: '24px',
        fontWeight: '100'
    },
    addButtonIcon: {
        marginRight: '9px'
    },
    sNo: {
        fontSize: '14px',
        fontWeight: '100',
        width: '7%',
        paddingLeft: '30px'
    },
    frameworkColsNo: {
        fontSize: '14px',
        fontWeight: '100',
        width: '7%',
        paddingLeft: '30px',
        lineHeight: '28px'
    },
    frameworkHead: {
        fontSize: '14px',
        fontWeight: '100',
        width: '18%',
        textAlign: 'center'
    },
    frameworkCol: {
        fontSize: '14px',
        fontWeight: '100',
        width: '18%',
        lineHeight: '28px',
        textAlign: 'center'
    },
    buttonCol: {
        fontSize: '14px',
        fontWeight: '100',
        width: '18%',
        display: 'flex',
        justifyContent: 'center'
    },
    draftButton: {
        border: '1px solid #FFAB39',
        borderRadius: '15px',
        padding: '5px 20px',
        color: '#FFAB39',
        width: 'fit-content',
        textAlign: 'center',
        cursor: 'pointer'
    },
    submitButton: {
        backgroundColor: '#FFAB39',
        color: '#FFFFFF',
        padding: '5px 20px',
        textAlign: 'center',
        width: 'fit-content',
        cursor: 'pointer'
    },
    tableHeader: {
        backgroundColor: '#E9E6E9',
        padding: '7px 10px',
        borderRadius: '8px 8px 0 0'
    },
    tableContent: {
        width: '100%',
        border: '1px solid rgba(108,32,95,0.18)',
        backgroundColor: '#ffffff',
        margin: '13px 0',
        padding: '15px'
    },
    button: {
        marginLeft: 'auto',
        display: 'flex',
        width: 'fit-content'
    }
});

export default styles;