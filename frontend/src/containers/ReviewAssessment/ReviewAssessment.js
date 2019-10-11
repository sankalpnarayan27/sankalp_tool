import React from "react"
import {Grid} from '@material-ui/core';
import Remove from '../../assets/images/Remove.svg';
import Edit from '../../assets/images/Edit.svg';
import EditTest from "../EditTest/EditTest"
export default function ReviewAssessment(props){
    return (
        <div className={props.classes.rightPanel}>
             {props.popOverEditStatus ? 
                <EditTest popOverEditStatus = {props.popOverEditStatus} 
                    maturityFilter={props.maturityFilter}
                    kpaFilter = {props.kpaFilter}
                    principleFilter= {props.principleFilter}
                    classes = {props.classes}
                    handleEditClose={props.handleEditClose}
                    quesData={props.questionList}
                    updateEditPage={props.updateEditPage}
                /> : ""
                }
            {Object.keys(props.rightPanelData).length > 0 && props.rightPanelData.mainData.length > 0 ? 
                <div>
                    <h4 className="headingh4">Review Assessment:</h4>
                    <Grid container spacing={12} className={props.classes.rightHeader}>
                <Grid item sm={6}>
                <p className={`${props.classes.rightheaderData} ${props.classes.clr_grey}` }>Name: <span className={props.classes.clr_blk}>{props.rightPanelData.testName}</span></p>
                
                </Grid>
                <Grid item sm={6}>
                <p className={`${props.classes.rightheaderData} ${props.classes.clr_grey}` }>Framework: <span className={props.classes.clr_blk}>{props.rightPanelData.framework}</span></p>
                
                </Grid>
            </Grid>
            {props.rightPanelData.mainData.map((item,keyIndex)=>
                
            <Grid key={item.id} container spacing={12} className={`${props.classes.rightPanelCard} ${props.classes.maringTop10}`}>
                <Grid container spacing={12} className={`${props.classes.padding10} ${props.classes.borderBtmGrey}`}>
                    <Grid item sm={9}>
                        <p className={props.classes.margin0}><span>Q{item.id}: </span>{item.question}</p>
                    </Grid>
                    <Grid item sm={3} className={props.classes.txtRight}>
                        <button className={props.classes.noStyleBtn} onClick={()=> {props.handleEditOpen(props.rightPanelData.mainData[keyIndex])}}><img className={props.classes.rightPanelActionIcon} alt="edit" src={Edit}/></button>
                        <button className={props.classes.noStyleBtn} onClick={()=>{props.deleteEdit(props.rightPanelData.mainData[keyIndex],keyIndex)}}><img className={props.classes.rightPanelActionIcon} alt="remove" src={Remove}/></button>
                    </Grid>
                </Grid>
                
                    <Grid container spacing={12} className={props.classes.padding10}>
                    {
                    item.filterList.length > 0 ?
                    item.filterList.map((filterData)=>
                    
                        <Grid item sm={12} className={props.classes.maringTop5}>
                            <p className={`${props.classes.rightPanelCardContent} ${props.classes.clr_grey}` }>{filterData.filterType.toLowerCase()}: <span className={props.classes.clr_blk}>{filterData.filterName}</span></p>
                        </Grid>
                    
                    )
                    :
                    ''
                    
                }
                    </Grid>

                    
            
            </Grid>
            )}
                <p className={props.classes.txtCenter}>{props.rightPanelData.mainData.length} {props.rightPanelData.mainData.length > 1 ? 'Questions': 'Question'} Added</p>
                    </div>
                    :
                    <div>
                        <h4 className="headingh4">Review Test:</h4>
                        <Grid container spacing={12} >
                        <Grid item sm={12} >
                            <p className={`${props.classes.noDataContainer} ${props.classes.clr_grey}`}>Please add question to review</p>
                        </Grid>
                        </Grid>
                        </div>
            }
        </div>
    )
}