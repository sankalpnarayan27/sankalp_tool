import React,{useState}  from 'react';
import { Button,Grid, TextField,Popover,FormControl } from '@material-ui/core';

export default function EditTest(props){
    const [maturity,changeMaturity] =useState(0);
    const [principle,changePrinciple] =useState(0)
    const [kpa,changeKpa] =useState(0)
    var renderPopOver = ()=>{
        return(
            <div  className={props.classes.filterContainer}>
                <h1 className="headingh2">Edit Details</h1>
                <p className={props.classes.popoverContainer}><span>Q{props.quesData.id}.</span> {props.quesData.question}</p>
                <Grid container className={props.classes.popoverContainer} >
                    <Grid item  className={props.classes.popoverItem}>
                    <TextField
                        id="outlined-select-currency-native"
                        select
                        label="Maturity Level"
                        value={maturity}
                        
                        onChange={(event)=>changeMaturity(event.target.value)}
                        SelectProps={{
                        native: true,
                        MenuProps: {
                            className: props.classes.menu,
                        },
                        }}
                        margin="normal"
                        variant="outlined">
                        {props.maturityFilter.map((option) => {
                                return (
                                    <option key={option.id} value={JSON.stringify(option)}>
                                        {option.filterName}
                                    </option>
                                )  
                        })}
                    </TextField>
                    </Grid>
                </Grid>
                <Grid container className={props.classes.popoverContainer} >
                    <Grid item className={props.classes.popoverItem}>
                    <TextField
                        id="outlined-select-currency-native"
                        select
                        label="Principle"
                        value={principle}
                        // value={filterData}
                        onChange={(event)=>changePrinciple(event.target.value)}
                        SelectProps={{
                        native: true,
                        MenuProps: {
                            className: props.classes.menu,
                        },
                        }}
                        margin="normal"
                        variant="outlined">
                        {props.principleFilter.map((option) => {
                                return (
                                    <option key={option.id} value={JSON.stringify(option)}>
                                        {option.filterName}
                                    </option>
                                )
                        })}
                    </TextField>
                    </Grid>
                </Grid>
                <Grid container className={props.classes.popoverContainer} >
                    <Grid item className={props.classes.popoverItem}>
                    <TextField
                        id="outlined-select-currency-native"
                        select
                        label="KPA"
                        value={kpa}
                        // value={filterData}
                        onChange={(event)=>changeKpa(event.target.value)}
                        SelectProps={{
                        native: true,
                        MenuProps: {
                            className: props.classes.menu,
                        },
                        }}
                        margin="normal"
                        variant="outlined">
                        {props.kpaFilter.map((option) => {
                                return (
                                    <option key={option.id} value={JSON.stringify(option)}>
                                        {option.filterName}
                                    </option>
                                )
                        })}
                    </TextField>
                    </Grid>
                </Grid>
                <Grid container spacing={12} className={props.classes.filterButtonContainer}>
                    <Button variant="contained" onClick={()=>{props.updateEditPage(props.quesData, maturity,principle,kpa)}} color="secondary" className={`mainButton ${props.classes.editBtn}`}>Update</Button>
                    <Button variant="contained" onClick={props.handleEditClose} className={`${props.classes.clr_grey} ${props.classes.bg_White} ${props.classes.borderAllGrey} ${props.classes.editBtn}`}>Cancel</Button>
                </Grid>
            </div>
        )
    }
    return (
       <div>
            <Popover
                open ={props.popOverEditStatus}
                onClose={props.handleEditClose}
                anchorOrigin={{
                    vertical: 'center',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
            }}>
                {renderPopOver()}
            </Popover>
       </div>
    )
}