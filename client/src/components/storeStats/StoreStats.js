import React from 'react'
import {  makeStyles   } from '@material-ui/core'
const useStyles = makeStyles((theme) => ({
    container : {
        width : '100%',
        height : '98px',
        display : 'flex',
        justifyContent: 'space-between',
        alignItems : 'center',
      
     
    },
    order: {
          
        display : 'flex',
       
        flexDirection : 'column'
    
 },
   
   }));
function StoreStats({data}) {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.container}>
            <div className={classes.order}>
                <h5 style={{margin : '0px'}}> {data.txt}</h5>
                <h4 >{data.number}</h4>
            </div>
            <div style={{color: data.color, background : data.background,padding: '5px' }}>
                {data.icon}
            </div>
            </div>
        </div>
    )
}

export default StoreStats
