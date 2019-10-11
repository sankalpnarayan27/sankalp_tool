import React from "react";
import Header from "../Header";
import { Grid, Button } from "@material-ui/core";
import Xebia from "../../assets/images/Xebia.svg";

class DashBoard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: "",
      id: "",
      name: "",
      propData: []
    };
  }

  componentDidMount() {
    if(localStorage.getItem('accessToken') && localStorage.getItem('accessToken').length > 0) {
      this.props.getCompanyData();
    }
  }

  getCompanyDetails = (orgId, orgName) => {
    this.setState({ id: orgId, name: orgName });
    setTimeout(() => {
      this.props.history.push("/company/" + orgId);
    }, 50);
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      propData: nextProps.comp.compData.data.data.organisationList || []
    });
  }

  handleChange(e) {
    let currentList = [];
    let newList = [];
    if (e.target.value !== "") {
      //   currentList = this.props.comp.compData.data;
      currentList = this.props.comp.compData.data.data.organisationList;
      newList = currentList.filter(item => {
        const lc = item.orgName.toLowerCase();
        const filter = e.target.value.toLowerCase();
        return lc.includes(filter);
      });
    } else {
      newList = this.props.comp.compData.data.data.organisationList;
    }
    this.setState({
      propData: newList
    });
  }

  render() {
    const { classes } = this.props;
    if (this.state.propData.length !== 0) {
      var compList = this.state.propData.map(item => {
        return (
          <li
            className={classes.liData}
            key={item.orgId}
            onClick={() => this.getCompanyDetails(item.orgId, item.orgName)}
          >
            <div className={classes.compContainer}>
              <img className={classes.compLogo} src={Xebia} />
              <h2 className={classes.headingh2}>{item.orgName}</h2>
              <p>{item.orgIndustry}</p>
            </div>
          </li>
        );
      });
    } else {
      console.log(this.props);
    }
    return (
      <div className={classes.outerContainer}>
        <Header />
        <div className={classes.innerContainer}>
          <Grid container spacing={12} className={classes.searchContainer}>
            <Grid item sm={3}></Grid>
            <Grid item sm={6}>
              <div className={classes.inputWrapper}>
                <input
                  className={classes.inputBox}
                  placeholder="Search for customer"
                  onChange={e => {
                    this.handleChange(e);
                  }}
                ></input>
                <div className={classes.searchButtonWrapper}>
                  {/* <button className={classes.searchButton}></button> */}
                </div>
              </div>
            </Grid>
            <Grid item sm={3}>
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
              >
                View Dashboard
              </Button>
            </Grid>
          </Grid>
          <div className={classes.line}></div>
          <h1 className={classes.headingh1}>Please select your Organization</h1>
          {compList ? (
            <Grid className={classes.listContainer} container spacing={12}>
              <ul className={classes.ulData}>{compList}</ul>
            </Grid>
          ) : (
            <Grid className={classes.listContainer} container spacing={12}>
                <p className={classes.noMatchText}>No Result Found !</p>
            </Grid>
          )}
        </div>
      </div>
    );
  }
}

export default DashBoard;
