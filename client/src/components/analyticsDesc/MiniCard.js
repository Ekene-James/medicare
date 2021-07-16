import React from 'react'
import {  makeStyles,Typography  } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  
       txt: {
        display : 'flex',
         width: '100%',
         justifyContent: 'flex-start',
         alignItems : 'center'
     },
     container : {
        display : 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems : 'center'
     }
   
   }));
function MiniCard({data}) {
    const classes = useStyles();
    return (
        <div className={classes.container}>
             <Typography variant="subtitle2"  >
                    {data.title}
                </Typography>
             <Typography variant="h6"  >
                    {data.subtitle}
                </Typography>
                <div className={classes.txt}>
                    <p style={{color: data.color,marginRight:'2px', fontWeight:'bold'}}>
                    {data.icon} 

                    </p>
                    <p style={{color: data.color,marginRight:'4px', fontWeight:'bold'}}>
                    {data.txt}
                    </p>
                </div>
        </div>
    )
}

export default MiniCard
