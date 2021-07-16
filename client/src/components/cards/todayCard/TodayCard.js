import React from 'react'
import { Grid, makeStyles,Paper } from '@material-ui/core'
import TodayGraph from './TodayGraph';
const useStyles = makeStyles((theme) => ({
    grid: {
        [theme.breakpoints.down("sm")]: {
            margin: 'auto',
            width: `50%`
          }
    },
    analytics: {
        width : '100%',
        [theme.breakpoints.down("sm")]: {
            
            maxWidth: `50%`
          }
    },
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
        display : 'flex',
        justifyContent: 'space-between',
        alignItems : 'center',
        [theme.breakpoints.down('sm')]: {
           flexDirection : 'column',
           width: `50%`
          },
      },
      desc: {
         
          width: '100%'
      },
      graph: {
         
          width: '100%',
          [theme.breakpoints.down('md')]: {
              width: '70%',
           },
          [theme.breakpoints.down('sm')]: {
              width: '100%',
           },
      }, 
      txt: {
         display : 'flex',
          width: '100%',
          justifyContent: 'flex-start',
          alignItems : 'center'
      }
  
  }));

function TodayCard({data, analytics}) {
    const classes = useStyles();
    return (
            <Grid item className={ classes.grid} xs={12} md={6}>
                <Paper className={classes.paper}>
                    <div className={classes.desc}>
                        <h4>{data.title}</h4>
                        <h3>{data.subtitle}</h3>
                        <div className={classes.txt}>
                            <p style={{color: data.color,marginRight:'2px', fontWeight:'bold'}}>
                            {data.icon} 

                            </p>
                            <p style={{color: data.color,marginRight:'4px', fontWeight:'bold'}}>
                            {data.txt}
                            </p> vs Lastweek
                        </div>
                    </div>
                    <div className={classes.graph}>
                        <TodayGraph data={data.data}/>
                    </div>
                </Paper>

            </Grid>
    )
}

export default TodayCard
