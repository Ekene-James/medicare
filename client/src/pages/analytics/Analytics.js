import React from 'react'
import { Grid,  makeStyles,Paper   } from '@material-ui/core';
import PageDesc from '../../components/pageDesc/PageDesc';
import AnalyticsCardDesc from '../../components/analyticsDesc/AnalyticsCardDesc';
import { audienceOverview,activeUsers,websitePerformance, browserTable ,trafficChannel,pageViews,session} from './data';
import MiniCard from '../../components/analyticsDesc/MiniCard';
import BrowserTable from '../../components/table/browserTable/BrowserTable';
import { VectorMap } from '@south-paw/react-vector-maps';
import { Bar, Line , Doughnut} from 'react-chartjs-2';
import world from './world.json';
import './style.css'

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
      
        [theme.breakpoints.down("sm")]: {
         
          maxWidth: `50%`
        }
       
       },
    table: {
        padding: theme.spacing(2),
      
        [theme.breakpoints.down("sm")]: {
         
          maxWidth: `50%`
        }
       
       },
       miniCard: {
         display : 'flex',
         justifyContent: 'space-between',
         alignItems: 'center',
         width: '100%'
       },
       desc: {
         display : 'flex',
         justifyContent: 'space-between',
         alignItems: 'start',
        
         flexDirection : 'column',
         [theme.breakpoints.down("sm")]: {
          flexDirection : 'row',
          justifyContent: 'center',
         alignItems: 'center',
         
        }
       },
       countries: {
        display : 'flex',
        justifyContent: 'center',
        alignItems: 'center',
       
        flexDirection : 'column',
       },
       country: {
        display : 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
       
        
       },
       dot: {
        height: '8px',
        width: '10px'
       
        
       },
       txt: {
        display : 'flex',
         
         justifyContent: 'flex-start',
         alignItems : 'center'
     },
       performance: {
         display : 'flex',
         justifyContent: 'space-between',
         alignItems: 'center',
         width: '100%',
         [theme.breakpoints.down("sm")]: {
          flexDirection : 'column',
          
         
        }
       }
   
   }));

function Analytics() {
    const classes = useStyles();
    return (
        <div>
          <Grid container spacing={3}>
              <PageDesc title='Website Analytics'/>
              <Grid item  xs={12} sm={6} >
                <Paper className={classes.paper}>
                   <AnalyticsCardDesc data={activeUsers.header}/>
                   <div className={classes.miniCard}>
                    {
                      activeUsers.miniCard.map((card , i) => <MiniCard key={i} data={card}/> )
                      }
                    </div>
                    <Bar data={activeUsers.barChart}  />
                </Paper>
                </Grid>
              <Grid item  xs={12} sm={6} >
                <Paper className={classes.paper}>
                   <AnalyticsCardDesc data={audienceOverview.header}/>
                    <div className={classes.miniCard}>
                    {
                      audienceOverview.miniCard.map((card , i) => <MiniCard key={i} data={card}/> )
                      }
                    </div>
                    <Line data={audienceOverview.lineGraph}  />
                </Paper>
                </Grid>
                <Grid item  xs={12} sm={6} >
                <Paper className={classes.paper}>
                   <AnalyticsCardDesc data={trafficChannel.header}/>
                   <Doughnut data={trafficChannel.doughnut} />
                </Paper>
                </Grid>
                <Grid item  xs={12} sm={6} >
                <Paper className={classes.paper}>
                   <AnalyticsCardDesc data={trafficChannel.header}/>
                   <div style={{marginTop : '10px'}}>
                    <VectorMap {...world}  />
                  </div>
                  <div className={classes.countries}>
                    <div className={classes.country}>
                      <p className={classes.dot} style={{background: 'rgb(255, 114, 236)'}}></p>
                      <small>USA</small>
                      <small>12,045</small>
                      <small>23%</small>
                    </div>
                    <div className={classes.country}>
                      <p className={classes.dot} style={{background: 'rgb(255, 159, 114)'}}></p>
                      <small>UK</small>
                      <small>5,045</small>
                      <small>28%</small>
                    </div>
                    <div className={classes.country}>
                      <p className={classes.dot} style={{background: 'rgb(157,114,255)'}}></p>
                      <small>Australia</small>
                      <small>9,000</small>
                      <small>45%</small>
                    </div>
                    <div className={classes.country}>
                      <p className={classes.dot} style={{background: 'rgb(154, 255, 114)'}} ></p>
                      <small>Nigeria</small>
                      <small>200,000</small>
                      <small>90%</small>
                    </div>

                  </div>
                </Paper>
                </Grid>
              <Grid item  xs={12}  >
                <Paper className={classes.paper}>
                   <AnalyticsCardDesc data={websitePerformance.header}/>
                    
                   {
                     websitePerformance.performance.map((data,i) => <div className={classes.performance} key={i}>
                        <div className={classes.desc}>
                        <p style={{marginRight : '3px'}}>{data.title}</p>
                        <strong>{data.subtitle}</strong>
                        <div className={classes.txt}>

                          <small style={{color: data.color,marginRight:'2px', fontWeight:'bold'}}>
                          {data.icon} 

                          </small>
                          <small style={{color: data.color,marginRight:'4px', fontWeight:'bold'}}>
                          {data.txt}
                          </small>
                          <small>
                            vs Lastweek
                          </small> 
                        </div>
                      
                    </div>
                      <div className={classes.graph}>
                        <Line data={data.data} />
                      </div>
                     </div> )
                  }
                </Paper>
                </Grid>
                <Grid item  xs={12} >
                <Paper className={classes.table}>
                   <AnalyticsCardDesc data={browserTable.header}/>
                   <BrowserTable data={browserTable.table}/>
                </Paper>
                </Grid>
              
                <Grid item  xs={12} sm={6} >
                <Paper className={classes.paper}>
                   <AnalyticsCardDesc data={pageViews.header}/>
                   <div className={classes.country}>
                     <p>Page</p>
                     <p>Page Views</p>
                   </div>
                  
                   <div>
                      {
                        pageViews.table.map((tab,i) => (
                          <React.Fragment key={i}>
                             <hr/>
                             <div className={classes.country}>
                              <p>{tab.page}</p>
                              <p>{tab.views}</p>
                            </div>
                          </React.Fragment>
                        ))
                      }
                   </div>
                   
                </Paper>
                </Grid>
                <Grid item  xs={12} sm={6} >
                <Paper className={classes.paper}>
                   <AnalyticsCardDesc data={session.header}/>
                   <Doughnut data={session.doughnut} />
                </Paper>
                </Grid>
          </Grid>
        </div>
    )
}

export default Analytics
