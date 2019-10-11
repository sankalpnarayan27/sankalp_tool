import React from 'react';
import Header from '../Header';
import { Grid, Button } from '@material-ui/core';
import AddTest from '../../assets/images/AddTest.svg';
// import Moment from 'react-moment';

class CompanyDetails extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            testListDetail: ""
        };
    }

    componentDidMount() {
        let id = this.props.match.params.id;
        this.props.getTestDataList(id);
    }

    createAssessment = () => {
        let id = this.props.match.params.id;
        this.props.history.push('/test/' + id);
    }

    resumeTest = (orgId) => {
        this.props.history.push('/test/' + orgId);
    }

    componentWillReceiveProps(nextProps) {
        console.log("nextProps compDetails", nextProps);
    }

    render() {
        const {classes} = this.props;
        let compDetails = this.props.testDataList.compDetails;
        console.log("this.props compDetails", this.props);
        console.log("compDetails", compDetails);
        let compName = this.props.orgDetails.data.data.organisationList ? 
            this.props.orgDetails.data.data.organisationList.filter((item) => {
                if(this.props.match.params.id == item.orgId) {
                    return item;
                }
            }) : [];
        let orgDetails;
        if(compDetails !== undefined) {
            orgDetails = compDetails.map((item,i) => {
                return (
                    <Grid container key={i} spacing={12} className={classes.tableContent}>
                        <div className={classes.frameworkColsNo}>{i+1}</div>
                        <div className={classes.frameworkCol}>{item.testName}</div>
                        <div className={classes.frameworkCol}>{item.frameWork.map((frame) => {
                            return (
                                <span>{frame.framework},&nbsp;</span>
                            )
                        })}</div>
                        <div className={classes.frameworkCol}>{item.createdBy}</div>
                        <div className={classes.frameworkCol}>{item.status == "PENDING" ? "Pending" : "Created"}</div>
                        <div className={classes.buttonCol}>
                            {item.status == "PENDING" ? 
                                <div className={classes.draftButton} onClick={() => this.resumeTest(item.id)}>
                                    {item.status == "PENDING" ? "Resume Test Creation" : "Submit Answers"}
                                </div> :
                                <div className={classes.submitButton}>
                                    {item.status !== "PENDING" ? "Resume Test Creation" : "Submit Answers"}
                                </div>
                            }
                        </div>
                    </Grid>
                )
            });
        }
        
        return (
            <div className={classes.outerContainer}>
                <Header/>
                <div className={classes.innerContainer}>
                    <Grid container spacing={12}>
                        <Grid item sm={9}>
                            <h2 className={classes.headingh2}>{compName[0].orgName} Maturity Scan</h2>
                        </Grid>
                        <Grid item sm={3}>
                            <div className={classes.button}>
                                <Button variant="contained" color="secondary" className="mainButton"
                                onClick={() => this.createAssessment()}>
                                    <img className={classes.addButtonIcon} src={AddTest}/>Add Test</Button>
                            </div>
                        </Grid>
                    </Grid>

                    <Grid container spacing={12} className={classes.tableHeader}>
                        <div className={classes.sNo}>S No.</div>
                        <div className={classes.frameworkHead}>Test Name</div>
                        <div className={classes.frameworkHead}>Framework</div>
                        <div className={classes.frameworkHead}>Created By</div>
                        <div className={classes.frameworkHead}>Test Status</div>
                        <div className={classes.buttonCol}>&nbsp;</div>
                    </Grid>

                    <div>
                        {orgDetails}
                    </div>
                </div>
            </div>
        )
    }
}

export default CompanyDetails;