import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import LanguageIcon from '@material-ui/icons/Language';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ContinuousSlider from '../../slider/Slider';

const useStyles = makeStyles( theme => ({
  table: {
    minWidth: 650,
  },
  tableContainer: {
    [theme.breakpoints.down("sm")]: {
     
      maxWidth: `100%`
    }
  },
  icon : {
      display : 'flex', 
      justifyContent : 'space-evenly',
      alignItems : 'center'
     
  },
 
}));





function BrowserTable({data}) {
  const classes = useStyles();

  return (
    
    <TableContainer className={classes.tableContainer} component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Browser</TableCell>
            <TableCell align="center">Users</TableCell>
            <TableCell align="left">% Users</TableCell>
            <TableCell align="center">Bounce Rate</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {data.map((row,i) => (
                <TableRow key={i}>
                <TableCell className={classes.icon}  component="th" scope="row">
                    <span style={{color : row.color}}><LanguageIcon/></span>
                    <span style={{width : '120px'}}>{row.browser}</span>
                    
                </TableCell>
                <TableCell align="center">{row.users}</TableCell>
                <TableCell align="center"><ContinuousSlider percentage={row.percentage} val={row.val}/></TableCell>
                <TableCell align="center">{row.bounceRate}</TableCell>
                
                </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
   
  );
}
export default BrowserTable


