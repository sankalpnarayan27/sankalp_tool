const styles = theme => ({
    outerContainer: {
        height: '-webkit-fill-available',
        backgroundColor: '#F7F6F7',
    },
    container: {
        width: '95%',
        height: '86vh',
        margin: '0 auto'
    },
    leftContainer: {
        backgroundColor: '#ffffff',
        border: '1px solid rgba(108,32,95,0.18)',
        borderRadius: '4px',
        margin: '25px 0',
        padding: '15px'
    },
    leftTextContainer: {
        paddingRight: '10px'
    },
    rightTextContainer: {
        paddingLeft: '10px'
    },
    line: {
        margin: "20px -15px",
        backgroundColor: "#DFDFDE",
        height: "1px",
    },
    searchClass: {
        paddingRight: "20px"
    },
    // filterClass: {
    //     paddingLeft: "10px"
    // },
    buttonField: {
        height: "100%",
        textTransform: 'none',
        color: '#9B9B9B',
        border: '1px solid #9B9B9B',
        fontSize: '14px'
    },
    bottomContainer: {
        fontSize: "14px"
    },
    filterContainer: {
        padding: '10px'
    },
    filterButtonContainer: {
        justifyContent: 'center',
        padding: '10px 0'
    },
    questionTag: {
        fontSize: "14px",
    },
    addTestText: {
        fontSize: "14px",
        textAlign: "right"
    },
    addImageTag: {
        textAlign: "center"
    },
    popoverContainer: {
        width: "480px",
        padding: "10px"
    },
    popoverItem: {
        width:  "100%"
    },
    footer: {
        backgroundColor: '#EEEAED',
        borderTop: '1px solid #DFDFDF',
        position: 'fixed',
        width: '100%',
        bottom: '0'
    },
    footerRightContainer: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    footerLeftContainer: {
        display: 'flex',
        justifyContent: 'flex-start'
    },
    button: {
        width: 'auto',
        padding: '10px 30px',
        cursor: 'pointer',
        fontWeight: '100',
        margin: '0',
        lineHeight: '33px'
    },
    cancelIcon: {
        marginLeft: '7px'
    },
    cancelButton: {
        margin: '0',
        padding: '10px 25px',
        lineHeight: '33px',
        cursor: 'pointer'
    },
    saveButton: {
        backgroundColor: '#ffffff',
        color: '#000000'
    },
    createButton: {
        backgroundColor: '#000000',
        color: '#FFAB39'
    },
    questionHeader: {
        backgroundColor: '#EEEAED',
        width: '100%',
        display: 'flex',
        marginTop: '10px',
        justifyContent: 'space-between',
        padding: '10px 13px',
        borderRadius: '7px 7px 0 0',
        position: 'relative'
    },
    questionText: {
        margin: '0',
        fontSize: '14px'
    },
    addIconImg: {
        position: 'absolute',
        right: '10px',
        top: '7px'
    },
    addAllSpan: {
        marginRight: '26px'
    },
    questionsList: {
        justifyContent: 'space-between',
        display: 'flex',
        padding: '5px 9px',
        width: '100%',
        borderBottom: '1px solid #DFDFDF'
    },
    questionsListQuestion: {
        fontSize: '14px',
        padding: '0 13px 0 0'
    },
    questionfooter: {
        width: '100%',
        borderTop: '1px solid #DFDFDF',
        padding: '10px'
    },
    dislogText: {
        color: '#000000'
    },
    dialogContainer: {
        padding: '20px'
    },
    dialogButtonContainer: {
        justifyContent: 'center'
    },
    filterTagContainer: {
        marginTop: '10px'
    },
    filterTagHeader: {
        color: '#9B9B9B',
        fontSize: '12px',
        texAlign: 'center',
        textTransform: 'capitalize'
    },
    filterTagName: {
        fontSize: '12px',
        padding: '4px'
    },
    resetButton: {
        boxSizing: 'border-box',
        height: '20px',
        width: '52px',
        border: '1px solid rgba(108,32,95,0.18)',
        borderRadius: '10px',
        cursor: 'pointer',
        fontSize: '12px',
        textAlign: 'center',
        paddingTop: '2px',
        marginTop: '7px'
    },
    removeIcon: {
        height: '8px',
        width: '8px',
        paddingLeft: '5px'
    },
    nameTagWrapper: {
        borderRadius: '10px',
        backgroundColor: '#EEEAED',
        padding: '4px',
        display: 'inline'
    },
    filterTagDiv: {
        display: 'inline-block',
        margin: '5px' 
    },
    questionListDiv: {
        padding: '10px',
        textAlign: 'center',
        width: '100%',
        fontWeight: 'bold',
        color: 'red'
    },
    rightPanel:{
        padding: '15px'
    },
    rightHeader:{
        backgroundColor: '#fff',
        padding: '10px',
        borderRadius: '5px'
    },
    rightheaderData:{
        width: '50%',
        display: 'inline-block',
        margin: '0',
        textTransform:'Capitalize'
    },
    
    clr_grey:{
        color: '#9B9B9B'
    },
    clr_blk:{
        color: '#000'
    },
    bg_White:{
        background:'#fff'
    },
    margin0:{
        margin:'0'
    },
    maringTop5:{
        marginTop: '5px'
    },
    txtCenter:{
        textAlign: 'center'
    },
    txtRight:{
        textAlign: 'right',
    },
    maringTop10:{
        marginTop: '10px'
    },
    padding10:{
        padding: '10px',
    },
    borderAllGrey:{
        border: '1px solid #9B9B9B'
    },
    borderBtmGrey:{
        borderBottom: '2px solid #DFDFDF'
    },
    rightPanelCard:{
        border: '1px solid rgba(108,32,95,0.18)',
        backgroundColor: '#fff',
        borderRadius: '5px'
    },
    rightPanelCardContent:{
        textTransform:'Capitalize',
        margin:'0'
    },
    noDataContainer:{
        backgroundColor: '#fff',
        padding: '70px',
        width: '40%',
        fontSize: '24px',
        boxSizing: 'border-box',
        margin: 'auto',
        textAlign: 'center'
    },
    noStyleBtn:{
        border: 'none',
        background: 'none'
    },
    rightPanelActionIcon:{
        width: '12px',
        height: '12px'
    },
    formControl: {
        width: '100%'
    },
    editBtn:{
        width:'40%',
        marginRight: '15px'
    }
});

export default styles;