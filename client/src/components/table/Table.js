import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Row from './Row';
import { Button, makeStyles } from '@material-ui/core';


const useStyles = makeStyles( theme => ({
  table: {
    minWidth: 650,
    boxShadow : 'none',
  
   
  },
  tableContainer: {
    [theme.breakpoints.down("sm")]: {
     
      maxWidth: `85%`
    }
  },
  tableHead : {
      background : '#e8e8e8'
  },
  btn : {
      color : 'green',
      fontSize : '11px',
      fontWeight : 'bold',
      background: 'transparent',
      border : '0.2px solid gray',
      boxShadow : 'none',
      borderRadius : '0',
      height : '45px',
      [theme.breakpoints.down("sm")]: {
     
        width: '150%'
      }
      
  },
 
 
}));


const rows = [
{
    id : 'KLA34597DHQ',
    source : 'Castle Black, Winterfell',
    date : '26th, Nov. 2020',
    amount : '$1200'

},
{
    id : 'KLA34597DHQ',
    source : 'Red keep, Kings Landing',
    date : '26th, Nov. 2020',
    amount : '$2000'

},
{
    id : 'KLA34597DHQ',
    source : 'Dorne, Westeros',
    date : '26th, Nov. 2020',
    amount : '$1200'

},
{
    id : 'KLA34597DHQ',
    source : 'Casterly Rock, Westeros',
    date : '26th, Nov. 2020',
    amount : '$1200'

},
];

export default function BasicTable() {
  const classes = useStyles();

  return (
            <TableContainer className={classes.tableContainer} component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow className={classes.tableHead}> 
                    <TableCell align="center">Payout ID</TableCell>
                    <TableCell align="center">Source</TableCell>
                    <TableCell align="center">Date</TableCell>
                    <TableCell align="center">Amount</TableCell>
                    
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row,i) => <Row key={i} row={row}/>)}
                </TableBody>

              </Table>
              
                <Button className={classes.btn} fullWidth size='large' disableElevation  variant="contained">See More</Button>

            </TableContainer>
         
  );
}
