import React from 'react';
import Header from '../Header';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { 
    Button, Dialog, DialogActions, DialogContent, DialogContentText, ListItemText, 
    Grid, TextField, MenuItem, Popover, FormControl, Select, Checkbox } from '@material-ui/core';
import AddIcon from '../../assets/images/Add-icon.svg';
import FilterIcon from '../../assets/images/Filter.svg';
import CancelIcon from '../../assets/images/Cancel.svg';
import Remove from '../../assets/images/Remove.svg';
import _ from 'lodash';
import ReviewAssessment from "../ReviewAssessment/ReviewAssessment"

let maturityFilter = [{'filterName': "Select Maturity Filter"}]
let kpaFilter = [{'filterName': "Select KPA Filter"}]
let principleFilter = [{'filterName': "Select Principle Filter"}]
let visited = true;
let removeFilterCheck = false;
class AddTest extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            testData: "",
            textValue: "",
            frameworkName: [],
            questionList: [],
            nameVal: "",
            anchorEl: "",
            anchorE2: "",
            anchorE3: "",
            anchorPopover: "",
            dialogOpen: false,
            filterOption:[],
            popOverStatus: false,
            rightPanelData: {}
        };
        this.arrCount = [];
        this.editQuestion={}
    }
    
    componentDidMount() {
        let orgId = this.props.match.params.id;
        this.props.getFrameworkData();
        this.props.getFilterData();
        if(orgId > 20) {
            this.props.getResumeTestData(orgId);
        }
    }

    componentWillUnmount() {
        this.props.clearQuestionList();
    }

    componentWillReceiveProps(nextProps) {
        let draftDetails = nextProps.framework.resumeDraftDataLoad.draftData;
        if(Object.entries(draftDetails).length > 0 && this.props.match.params.id > 20) {
            let draftQuestion = draftDetails.draftQuestions ? draftDetails.draftQuestions.map((item) => {
                return item.questions
            }) : [];
            let frameworkArr = draftDetails.frameworkSet ? draftDetails.frameworkSet.map((item) => {
                return item.framework
            }) : [];
            this.setState({
                questionList: this.state.questionList.concat(draftQuestion),
                textValue: draftDetails.testName,
                frameworkName: frameworkArr
            });
        } else {
            let question = nextProps.framework.questionData.questionListP.questionsList ? 
            nextProps.framework.questionData.questionListP.questionsList.map((item) => {
                return item.question;
            }) : [];
            let addQuestion = [];
            for(var i = 0; i <= question.length - 1; i++) {
                if(this.state.questionList.indexOf(question[i]) === -1) {
                    addQuestion.push(question[i]);
                } else {
                    this.state.questionList = [];
                    addQuestion = question;
                    i = question.length - 1;
                }
            }
            let list = nextProps.framework.questionData.questionListP.questionsList ? 
                this.state.questionList.concat(addQuestion) : [];
            this.setState({ questionList: list });
        }
    }

    handleChange = event => {
        let val = event.target.value[event.target.value.length - 1];
        let newVal = event.target.value.indexOf(val) !== -1 ? event.target.value : "";
        let frameworkList;
        if(this.state.frameworkName.indexOf(val) === -1 && val !== undefined) {
            frameworkList = this.state.frameworkName.concat(val)
        } else if(val === undefined) {
            frameworkList = this.state.frameworkName.splice(1,0);
        } else {
            frameworkList = event.target.value;
        }
        this.setState({ 
            nameVal : val,
            frameworkName: frameworkList
        });
        if(val !== undefined) {
            this.props.getQuestions(newVal);
        } else {
            this.setState({questionList : []})
        }
    }

    saveDraft = () => {
        // if(this.state.nameVal.framework !== undefined) {
        //     let frameList = this.state.frameworkName.concat(this.state.nameVal.framework);
        //     this.setState({ frameworkName : frameList});
        // }
        console.log("this.props", this.props);
        let orgIdname = this.props.orgDetails.data.data.organisationList ?
            this.props.orgDetails.data.data.organisationList.filter((item) => {
                if(item.orgId == this.props.match.params.id) {
                    return item;
                }
            }) : [];
        let questionDetails = [], draftFilters = [];
        let draftFiltersList1 = this.props.framework.filterData.filterDataP.filtersList ? 
            this.props.framework.filterData.filterDataP.filtersList.map((item) => {
                return {
                    draftFilterName: item.filterName,
                    filterType: item.filterType
                }
            }) : [];
        for(var i = 0; i <= this.state.questionList.length - 1; i++) {
            questionDetails.push(
                {
                    questions: this.state.questionList[i],
                    draftFiltersList: draftFilters.concat(draftFiltersList1)
                }
            );
        }
        let draftData = {
            name: this.state.textValue,
            framework: this.state.frameworkName,
            flag: "PENDING",
            id: null,
            orgId: orgIdname[0].orgId,
            draftQuestions: questionDetails
        };
        if(this.state.frameworkName.length > 0) {
            this.props.saveDraftData(draftData);
            this.goBackToDetailsPage(draftData.orgId);
        }
        // setTimeout(() => {
        //     let draftData = {
        //         name: this.state.textValue,
        //         framework: this.state.frameworkName,
        //         flag: "PENDING",
        //         id: null,
        //         orgId: orgIdname[0].orgId,
        //         draftQuestions: questionDetails
        //     };
        //     if(this.state.frameworkName.length > 0) {
        //         this.props.saveDraftData(draftData);
        //         this.goBackToDetailsPage();
        //     }
        // }, 10);
    }

    handleClickOpen = () => {
        this.setState({dialogOpen: true});
    };

    
    handleEditClose = () => {
        this.setState({popOverEditStatus: false});
    }

    handleClose = () => {
        this.setState({dialogOpen: false});
    };

    goBackToDetailsPage = (id) => {
        // this.setState({
        //     testData: "",
        //     textValue: "",
        //     frameworkName: [],
        //     questionList: [],
        //     nameVal: "",
        //     anchorEl: "",
        //     anchorE2: "",
        //     anchorE3: "",
        //     anchorPopoverv: "",
        //     dialogOpen: false,
        // });
        setTimeout(() => {
            this.props.clearQuestionList();
            this.props.clearDraft();
            //this.props.history.push('/company/' + id);
            this.props.history.goBack();
        }, 10);
    }

    handleFilterClick = (event) => {
        this.setState({
            anchorEl: event.currentTarget,
            anchorE2: event.currentTarget,
            anchorE3: event.currentTarget,
            anchorPopover: event.currentTarget,
            popOverStatus: true
        });
    }

    handleFilterClose = () => {
        this.setState({anchorEl: '', anchorE2: '', anchorE3: '',anchorPopover: '',popOverStatus: false});
    }

    updatetextValue = event => {
        this.setState({textValue: event.target.value});
    }

    handleMaturityChange = event => {
        this.setState({
            anchorEl: event.target.value,
            filterOption: [...this.state.filterOption,JSON.parse(event.target.value)]
        });
    }

    handleKPAChange = event => {
        this.setState({
            anchorE3: event.target.value,
            filterOption: [...this.state.filterOption,JSON.parse(event.target.value)]            
        });
    }

    handlePrincipleChange = event => {
        this.setState({
            anchorE2: event.target.value,
            filterOption: [...this.state.filterOption,JSON.parse(event.target.value)]            
        });
    }

    getFilterArray = (filterData,type)=>{
        return filterData.filter(item=>{
            return item.filterType === type
        })
    }
    getFilteredData = ()=>{
        let myItem = [];
        let appliedFilters = this.state.filterOption;
        let question = this.props.framework.questionData.questionListP.questionsList ?
        this.props.framework.questionData.questionListP.questionsList : [];
        
        console.log("appliedFilters",appliedFilters);
            question.map(function(item) {
            console.log("ss",_.isEqual(appliedFilters, item.filterList))
            if(appliedFilters.length === item.filterList.length
                 && _.isEqual(appliedFilters, item.filterList)) {
            myItem.push(item)
          }
      });
      const view = myItem.map(item=>{
          return item.questions
      })
      if(view.length < 1){
        setTimeout(() => {
          this.stateChangeRightPanel('')
        },10)
      }
      this.setState({
        questionList : view,
        popOverStatus: false,

      })
      
      if( removeFilterCheck && appliedFilters.length ==0 ){
          //this.props.framework.questionData.questionListP.questionsList
          let value = question.map(item=>item.questions);
          this.setState({
            questionList: value
          })
      }
    }

    renderPopOver = ({classes,filterData,principleFilter,maturityFilter,kpaFilter})=>{
        return(
            <div className={classes.filterContainer}>
                <Grid container className={classes.popoverContainer} >
                    <Grid item  className={classes.popoverItem}>
                    <TextField
                        id="outlined-select-currency-native"
                        select
                        label="Maturity Level"
                        value={this.state.anchorEl}
                        // value={filterData}
                        onChange={this.handleMaturityChange}
                        SelectProps={{
                        native: true,
                        MenuProps: {
                            className: classes.menu,
                        },
                        }}
                        margin="normal"
                        variant="outlined">
                        {maturityFilter.map((option) => {
                                return (
                                    <option key={option.id} value={JSON.stringify(option)}>
                                        {option.filterName}
                                    </option>
                                )  
                        })}
                    </TextField>
                    </Grid>
                </Grid>
                <Grid container className={classes.popoverContainer} >
                    <Grid item className={classes.popoverItem}>
                    <TextField
                        id="outlined-select-currency-native"
                        select
                        label="Principle"
                        value={this.state.anchorE2}
                        // value={filterData}
                        onChange={this.handlePrincipleChange}
                        SelectProps={{
                        native: true,
                        MenuProps: {
                            className: classes.menu,
                        },
                        }}
                        margin="normal"
                        variant="outlined">
                        {principleFilter.map((option) => {
                                return (
                                    <option key={option.id} value={JSON.stringify(option)}>
                                        {option.filterName}
                                    </option>
                                )
                        })}
                    </TextField>
                    </Grid>
                </Grid>
                <Grid container className={classes.popoverContainer} >
                    <Grid item className={classes.popoverItem}>
                    <TextField
                        id="outlined-select-currency-native"
                        select
                        label="KPA"
                        value={this.state.anchorE3}
                        // value={filterData}
                        onChange={this.handleKPAChange}
                        SelectProps={{
                        native: true,
                        MenuProps: {
                            className: classes.menu,
                        },
                        }}
                        margin="normal"
                        variant="outlined">
                        {kpaFilter.map((option) => {
                                return (
                                    <option key={option.id} value={JSON.stringify(option)}>
                                        {option.filterName}
                                    </option>
                                )
                        })}
                    </TextField>
                    </Grid>
                </Grid>
                <Grid container spacing={12} className={classes.filterButtonContainer}>
                    <Button variant="contained" onClick={this.getFilteredData} color="secondary" className="mainButton">Apply</Button>
                </Grid>
            </div>
        )
    }

    resetFilter = ()=>{
        let question = this.props.framework.questionData.questionListP.questionsList.map(item=>{
                return item.questions
        })
        
        this.setState({
            filterOption:[],
            questionList: question
        })
    }
    
    removeFilter = (id)=>{
        removeFilterCheck = true;
        let filterOption = this.state.filterOption;
        let value = filterOption.filter(item=>{
            return item.id != id
        })
        this.setState({
            filterOption: value
        },()=>{console.log("filteroptiom",this.state.filterOption) });
        console.log("value",value)       
        // console.log("filteroptiom",this.state.filterOption)       
         this.getFilteredData();
    }
  
    handleSearch = (e)=>{
        let currentList = [];
        let newList = [];
        if (e.target.value !== "") {
        currentList = this.props.framework.questionData.questionListP.questionsList;
        newList = currentList.filter(item => {
            const lc = item.question.toLowerCase();
            const filter = e.target.value.toLowerCase();
            return lc.includes(filter);
        }).map(item=>{
            return item.question
        });
        
        } else {
        newList = this.state.questionList;
        }
        this.setState({
            questionList: newList
        });
    }
    stateChangeRightPanel(data){
        if(this.state.questionList.length > 0 && data.length > 0){
            this.setState({
                rightPanelData: {
                    testName: this.state.textValue,
                    mainData: data,
                    framework: this.state.nameVal
                }
            }) 
        }else if(this.state.questionList.length < 1){
            this.setState({
                rightPanelData: {
                    testName: this.state.textValue,
                    mainData: data,
                    framework: this.state.nameVal
                }
        })
    }
}
    handleAddAll = ()=>{
        this.arrCount = []
        this.stateChangeRightPanel(this.props.framework.questionData.questionListP.questionsList)
    }
    handleSingleAdd = (key)=>{
        let list;
        if (this.arrCount.indexOf(key) === -1) {this.arrCount.push(key); this.arrCount.sort((a,b)=> a-b)};
        list = (this.arrCount.map((i)=>
            this.props.framework.questionData.questionListP.questionsList[i]
        ))
        this.stateChangeRightPanel(list)
    }
    handleEditOpen =(data)=>{
        this.editQuestion = data
        this.setState({popOverEditStatus: true})
    }

    deleteEdit=(data,keyVal)=>{
        this.arrCount.splice(keyVal,1);
        for(let i=0; i<=this.state.rightPanelData.mainData.length;i++){
            if(data.Id === this.state.rightPanelData.mainData[i].Id) { 
                this.state.rightPanelData.mainData.splice(keyVal,1)
                break;
            } 
        }
        this.setState({
            rightPanelData: {
                testName: this.state.textValue,
                mainData: this.state.rightPanelData.mainData,
                framework: this.state.nameVal
            }
    })
    }
    
    createTest = _ => {
        console.log("Create Test",this.testData);
        //this.props.createTest(this.props.framework.questionData.questionListP.questionsList);
        console.log(this.props.framework.questionData);
        
        let createTestData = {
            "id": null,
            "name": this.state.textValue,
            "framework": [
              "Kanban",
              "Scrum"
            ],
            "flag": "CREATED",
            "orgId": 1,
            "draftQuestions": this.props.framework.questionData.questionListP.questionsList.map((x,idx)=>({
                "questions": x.question,
                "draftFiltersList": x.filterList.map((y,idy)=>({
                    "draftFilterName": y.filterName,
                    "filterType": y.filterType
                }))     
            }))
          }
          console.log("drafted",createTestData);
          this.props.createTest(createTestData);
    }
    updateEditPage(data,maturity,principle,kpa){
        for(let i=0; i<=this.state.rightPanelData.mainData.length-1;i++){
            if(data.id === this.state.rightPanelData.mainData[i].id) { 
                this.state.rightPanelData.mainData[i].filterList.map((item)=>{
                   if(item.filterType === 'MATURITY_LEVEL' && JSON.parse(maturity).filterName ) {
                       item.filterName =  JSON.parse(maturity).filterName
                   } else if(item.filterType === 'PRINCIPLE' && JSON.parse(principle).filterName ){
                    item.filterName = JSON.parse(principle).filterName
                   }else if(item.filterType === 'KPA' && JSON.parse(kpa).filterName ){
                    item.filterName = JSON.parse(kpa).filterName
                   }
                   
                })
            } 
        }
        this.setState({
            rightPanelData: {
                testName: this.state.textValue,
                mainData: this.state.rightPanelData.mainData,
                framework: this.state.nameVal
            },
            popOverEditStatus: false
    })
    }
    render() {
        const {classes} = this.props;
        let questions = this.state.questionList;
        console.log("questions", questions);
        let frameWorks = this.props.framework.frameworksData.frameworkDataP;
        let selectFramework = frameWorks.framework ? frameWorks.framework.map((item) => {
            return item.framework;
        }) : [];
        let list = frameWorks ? frameWorks : [];
        let filterData = this.props.framework.filterData.filterDataP.filtersList ?
            this.props.framework.filterData.filterDataP.filtersList : [];
        const open = this.state.anchorEl || false;
        let questionItem = questions ? 
            questions.map((item, i) => {
                return (
                    <div className={classes.questionsList} key={i}>
                        <p className={classes.questionsListQuestion}>{item}</p>
                        <button className={classes.noStyleBtn} onClick={()=>{this.handleSingleAdd(i)}}><img className={classes.questionAddIconImg} src={AddIcon}/></button>
                        
                    </div>
                )
            }) : [];

        if(filterData.length >0 && visited){
            visited = false;
            maturityFilter = [...maturityFilter,...this.getFilterArray(filterData,"MATURITY_LEVEL")]
            kpaFilter = [...kpaFilter,...this.getFilterArray(filterData,"KPA")]
            principleFilter = [...principleFilter,...this.getFilterArray(filterData,"PRINCIPLE")]
        }
        return (
            <div className={classes.outerContainer}>
                <Header/>
                {/* <button onClick={this.handleEditOpen}>Edit Page</button> */}
                <div className={classes.container}>
                    <Grid container spacing={12}>
                        <Grid item sm={6} className={classes.leftContainer}>
                            <h1 className="headingh2">Add Assessment</h1>
                            <Grid container spacing={12}>
                                <Grid item sm={6} className={classes.leftTextContainer}>
                                    <TextField required
                                        id="outlined-name"
                                        label="Name"
                                        value={this.state.textValue}
                                        onChange={this.updatetextValue}
                                        margin="normal"
                                        variant="outlined"/>
                                </Grid>
                                <Grid item sm={6} className={classes.rightTextContainer}>
                                    <FormControl variant="filled" className={classes.formControl}>
                                        <InputLabel htmlFor="filled-age-native-simple">Framework</InputLabel>
                                        <Select
                                            multiple
                                            value={this.state.frameworkName}
                                            onChange={this.handleChange}
                                            input={<Input id="filled-age-native-simple" />}
                                            renderValue={selected => selected.join(', ')}
                                            >
                                            {selectFramework ?
                                                selectFramework.map(name => (
                                                <MenuItem key={name} value={name}>
                                                <Checkbox checked={this.state.frameworkName ? this.state.frameworkName.indexOf(name) > -1 : ""} />
                                                <ListItemText primary={name} />
                                                </MenuItem>
                                            )) : ""}
                                        </Select>
                                    </FormControl>
                                    {/* <TextField select
                                        required
                                        multiple
                                        variant="outlined"
                                        label="Framework"
                                        onChange={this.handleChange()}
                                        value={this.state.nameVal}>
                                        { list.framework ? 
                                            list.framework.map(option => (
                                                <MenuItem key={option.id} value={option}>
                                                    {option.framework}
                                                </MenuItem>
                                            )) : ""
                                        }
                                    </TextField> */}
                                </Grid>
                            </Grid>
                            <div className={classes.line}></div>
                            <Grid container spacing={12}>
                                <Grid item sm={10} className={classes.searchClass}>
                                    <TextField
                                        id="outlined-bare"
                                        className={classes.searchField}
                                        placeholder="Search for Questions"
                                        margin="normal"
                                        variant="outlined"
                                        inputProps={{ 'aria-label': 'search', style: {
                                            padding: 10
                                          }  }}
                                        onChange={(e)=>this.handleSearch(e)}
                                    />
                                </Grid>
                                <Grid item sm={2} className={classes.filterClass}>
                                <Button 
                                    variant="outlined" 
                                    color="primary" 
                                    className={classes.buttonField} 
                                    fullWidth={true}
                                    onClick={this.handleFilterClick}>
                                    <img src={FilterIcon}/>
                                    Filter
                                </Button>
                                <Popover
                                    open ={this.state.popOverStatus}
                                    anchorEl={this.state.anchorPopover}
                                    onClose={this.handleFilterClose}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'center',
                                      }}
                                      transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'center',
                                      }}>
                                    {this.renderPopOver({classes,filterData,principleFilter,maturityFilter,kpaFilter})}
                                </Popover>
                                </Grid>                                
                            </Grid>
                            <Grid container className={classes.filterTagContainer}>
                                <Grid item>
                                      {
                                          this.state.filterOption.length > 0 ? this.state.filterOption.map(item=>{
                                              //let itemId = item.id;
                                            return(
                                            <div key={item.id} className={classes.filterTagDiv}>
                                            <span className={classes.filterTagHeader}>{item.filterType} :</span>
                                            <Button value={item.id} className={classes.nameTagWrapper}  onClick={()=>{this.removeFilter(item.id)}}>
                                                <span className={classes.filterTagName}>{item.filterName}</span>
                                                <img className={classes.removeIcon} src={Remove}/>
                                            </Button>
                                            </div>
                                            )
                                          })
                                          : <div></div>
                                      } 
                                      {
                                        this.state.filterOption.length > 0 ? 
                                        <div className={classes.resetButton} onClick={this.resetFilter}>
                                             Reset 
                                        </div>: 
                                        <div></div>
                                      }
                                </Grid>
                            </Grid>
                            <Grid container spacing={12} className={classes.bottomContainer}>
                                <div className={classes.questionHeader}>
                                    <p className={classes.questionText}>Questions</p>
                                    <p className={classes.questionText} onClick={this.handleAddAll}>
                                        <span className={classes.addAllSpan}>Add All</span>
                                        <img className={classes.addIconImg} src={AddIcon}/>
                                    </p>
                                </div>
                                <Grid container spacing={12}>
                                    {questionItem.length > 0 ? questionItem : <div className={classes.questionListDiv}>No Questions Found!</div>}
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item sm={6}>
                            <ReviewAssessment classes={classes} 
                                rightPanelData={this.state.rightPanelData}
                                handleEditOpen={this.handleEditOpen}
                                popOverEditStatus={this.state.popOverEditStatus}
                                maturityFilter={maturityFilter}
                                kpaFilter = {kpaFilter}
                                principleFilter= {principleFilter}
                                handleEditClose={this.handleEditClose}
                                questionList={this.editQuestion}
                                deleteEdit={this.deleteEdit}
                                updateEditPage={this.updateEditPage.bind(this)}/> 
                        </Grid>
                    </Grid>
                </div>
                <div className={classes.footer}>
                    <Grid container spacing={12}>
                        <Grid item sm={9} className={classes.footerLeftContainer}>
                            <p className={classes.cancelButton} onClick={this.handleClickOpen}>
                                Cancel
                                <img className={classes.cancelIcon} src={CancelIcon}/>
                            </p>
                            <Dialog
                                open={this.state.dialogOpen}
                                onClose={this.handleClose}>
                                    <div className={classes.dialogContainer}>
                                        <DialogContent>
                                            <DialogContentText className={classes.dislogText}>
                                                Are you sure you want to cancel the assessment
                                            </DialogContentText>
                                        </DialogContent>
                                        <DialogActions className={classes.dialogButtonContainer}>
                                            <Button onClick={this.handleClose} variant="contained" color="secondary" 
                                                className="mainButton">No</Button>
                                            <Button onClick={this.goBackToDetailsPage} variant="contained" color="secondary" 
                                                autoFocus className="mainButton">Yes</Button>
                                        </DialogActions>
                                    </div>
                            </Dialog>
                        </Grid>
                        <Grid item sm={3} className={classes.footerRightContainer}>
                            <div className={[classes.saveButton, classes.button].join(" ")}
                                onClick={()=>this.saveDraft()}>Save as Draft
                            </div>
                            <p className={[classes.createButton, classes.button].join(" ")} onClick={this.createTest}>Create Test
                                {/* <img src={Next}/> */}
                            </p>
                        </Grid>
                    </Grid>
                </div>
            </div>
        )
    }
}

export default AddTest;