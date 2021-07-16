import { makeStyles, TableCell, TableRow } from '@material-ui/core'
import React from 'react'


const useStyles = makeStyles({
    highlight: {
      outline : '2px solid green',
    },
   
   
  });

function Row({row}) {
    const classes = useStyles();
    return (
       
        <TableRow hover className={row.amount === '$2000' ? classes.highlight : ''} >
            
        <TableCell align="center">{row.id}</TableCell>
        <TableCell align="center" component="th" scope="row">
          {row.source}
        </TableCell>
        <TableCell align="center">{row.date}</TableCell>
        <TableCell align="center">{row.amount}</TableCell>
    
      
      </TableRow>

      
    )
}

export default Row
