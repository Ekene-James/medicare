import React from 'react'
import { Grid, Typography, makeStyles,Paper   } from '@material-ui/core'


import AddCircleIcon from '@material-ui/icons/AddCircle';
import PageDesc from '../../components/pageDesc/PageDesc';

import { Doughnut,Bar } from 'react-chartjs-2';

import WelcomeBack from '../../components/welcomeBack/WelcomeBack';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';

import RecentPatient from '../../components/recentPatients/RecentPatient';
import Appointments from '../../components/appointments/Appointments';
const useStyles = makeStyles((theme) => ({
   desc : {
       width : '97%',
       margin : '0 auto',
       display : 'flex',
       justifyContent: 'space-between',
       alignItems : 'center',
       [theme.breakpoints.down('sm')]: {
        alignItems : 'flex-start',
        flexDirection: 'column'
     },
    
   },
   barChart : {
      display : 'flex',
      justifyContent: 'space-between',
      alignItems : 'center',
   },
   icon: {      
    color:'rgb(126,118,254)',
    fontSize:'35px' 
},
   paper: {
    padding: theme.spacing(2),
    marginTop:'15px',
    color: theme.palette.text.secondary,
    [theme.breakpoints.down("sm")]: {
     
      maxWidth: `97%`
    }
   
   },
   table: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    [theme.breakpoints.down("sm")]: {
     
      maxWidth: `50%`
    }
   
   },
   salesStat : {
    display : 'flex',
    width: '100%',
    margin: '0 auto',
    justifyContent: 'space-between',
    alignItems : 'center',
   
   },
   btn : {
       width : '30%',
       display : 'flex',
       justifyContent: 'space-between',
       alignItems : 'center',
       [theme.breakpoints.down('md')]: {
        width: '35%',
        
     },
       [theme.breakpoints.down('sm')]: {
        width: '50%',
        
        
     },
   },
  }));
const datasets = {
  labels: ['Jan','Feb','Mar','Apr','May', 'Jun','Jul'],
  datasets: [{
    label: 'Active Users',
    data: [65, 59, 80, 81, 56, 55, 40],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ],
    borderWidth: 1
  }]
}
const doughnuts ={
  labels: [
  'Mobile',
  'PC',
  'Tablet',
  'Others'
  ],
  datasets: [{
  label: 'Sessions',
  data: [300, 150, 80, 20],
  backgroundColor: [
  'rgb(157,114,255)',
  'rgb(184,172,255)',
  'rgb(255,169,206)',
  'rgb(249,219,123)',
  ],
  hoverOffset: 4
  }]
  }
function Overview() {
    const classes = useStyles();

    return (
        <div>
             <Grid item  xs={12}>
             <Typography variant="h4"  gutterBottom>
                      Dashboard
               </Typography>
             </Grid>
             <Grid container spacing={3}>
             <Grid item  xs={12} md={9}>
             <div>
                  <Paper className={classes.paper}>
                    <WelcomeBack/>
                  </Paper>
              </div>
                <div style={{marginTop:'15px'}}>
                    <PageDesc title='Statistics'/>
                  <Paper className={classes.paper} >
                <Grid  container spacing={3} direction="row" justify="space-between" alignItems="center">
                        <Grid item xs={6} md={2}>
                        <div className={classes.barChart}>
                          <AddCircleIcon className={classes.icon}/>
                            <div>
                              <h4>New Patient</h4>
                              <h5>50</h5>
                            </div>

                          </div>
                          <div className={classes.barChart}>
                          <AddCircleOutlineIcon style={{color:'brown'}} className={classes.icon}/>
                            <div>
                              <h4>Old Patients</h4>
                              <h5>50</h5>
                            </div>

                          </div>
                          <div className={classes.barChart}>
                            <HourglassEmptyIcon style={{color:'green'}} className={classes.icon}/>
                            <div>
                              <h4>Consultancy</h4>
                              <h5>50</h5>
                            </div>

                          </div>

                          </Grid>
                              <Grid item  xs={12} md={8}>
                              <Bar data={datasets}  />

                              </Grid>
                        </Grid>
                 
                  </Paper>
                </div>
                <div style={{marginTop:'15px'}}>
                  <Grid item  xs={12}>
                    <Typography variant="h4"  gutterBottom>
                              Recent Patients
                      </Typography>
                    </Grid>
                  <Paper className={classes.paper} >
                  <Grid  container spacing={3} direction="row" justify="space-between" alignItems="center">
                        <Grid item xs={12} md={6}>
                            <RecentPatient/>
                            <RecentPatient/>
                            <RecentPatient/>
                          </Grid>
                              <Grid item  xs={12} md={6}>
                                <div style={{height:'75%',width:'75%',margin:'auto',textAlign:'center'}}> 
                                    <Typography variant="h6"  gutterBottom>
                                        Patients Gender
                                    </Typography>
                                 <Doughnut data={doughnuts} /> 

                                </div>

                              </Grid>
                        </Grid>
                 
                  </Paper>
                </div>
                   
             </Grid>
               
                <Grid item  xs={12} md={3}  >
                  <PageDesc title='Appointments'/>
                  <div>
                     <Appointments color='rgba(0,0,255,0.4)'/>
                     <Appointments color='rgba(0,128,0,0.4)'/>
                     <Appointments color='rgba(255,165,0,0.4)'/>
                     <Appointments color='rgba(75,0,130,0.4)'/>

                  </div>
                </Grid>
                
               
              
            </Grid>
        </div>
    )
}

export default Overview
