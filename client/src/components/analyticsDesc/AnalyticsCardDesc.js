import React from 'react'
import {  Typography, makeStyles   } from '@material-ui/core'
const useStyles = makeStyles((theme) => ({
    container : {
        width : '100%',
        margin : 'auto',
        display : 'flex',
        justifyContent: 'space-between',
        alignItems : 'center',
        [theme.breakpoints.down('sm')]: {
         alignItems : 'flex-start',
         flexDirection: 'column'
      },
     
    },
 
    title: {
        display : 'flex',
        justifyContent: 'center',
        alignItems : 'flex-start',
        flexDirection : 'column',
        maxWidth: '60%'
    
    },
    btn: {
        
    
    },
   
   }));

function AnalyticsCardDesc({data}) {
    const classes = useStyles();
    return (
        <div className={classes.container}>
             <div className={classes.title}>
                <Typography variant="subtitle1"  >
                    {data.title}
                </Typography>
                {
                  data.subtitle &&  <small style={{fontSize:'10px', color : 'gray'}}>{data.subtitle}</small>
                }
            </div>
             <div className={classes.btn}>
              
                {
                  data.btn && data.btn  
                }
            </div>
            
        </div>
    )
}

export default AnalyticsCardDesc
