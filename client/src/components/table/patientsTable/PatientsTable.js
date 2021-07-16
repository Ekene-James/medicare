import React from 'react';
import {Link} from 'react-router-dom'
import { makeStyles,IconButton,MenuItem,TextField,Typography } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TablePagination from '@material-ui/core/TablePagination';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import FilterListIcon from '@material-ui/icons/FilterList';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles( theme => ({
  table: {
    minWidth: 650,
  },
  tableContainer: {
    [theme.breakpoints.down("sm")]: {
    
      maxWidth: `52%`
    }
  },
  img : {
    border: '1px solid rgb(126,118,254)',
      width : '50px',
      height:'50px',
      borderRadius:'50%',

  },
  filterContainer : {
    margin : '10px 0',
    padding: 10,
    display: 'flex',
    justifyContent:'space-between',
    alignItems:'center',
    width:'100%',
    [theme.breakpoints.down("sm")]: {
      flexDirection : 'column'
    }

  },
  filter : {
    display: 'flex',
    justifyContent:'space-between',
    alignItems:'center',
    width:'40%'
   
    

  },
 

}));



const rows = [
 {
     name : 'jon',
     surname : 'doe',
     age : 25,
     gender : 'male',
     bmi : 20,
     state:'enugu',
     id:1,
     src:'./img/a.png'
 },
 {
     name : 'jane',
     surname : 'doe',
     age : 25,
     gender : 'female',
     bmi : 20,
     state:'enugu',
     id:2,
     src:'./img/a.png'
 },
 {
     name : 'janet',
     surname : 'doe',
     age : 25,
     gender : 'male',
     bmi : 20,
     state:'enugu',
     id:3,
     src:'./img/a.png'
 },

];


function PatientsTable() {
  const classes = useStyles();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [state, setstate] = React.useState({})

  const handleChange = e => {
    const {name,value} = e.target
     setstate({
         ...state,
        [name] : value
    })
    
}

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const filter = (event) => {
    event.preventDefault()
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };



  return (
    
    <TableContainer className={classes.tableContainer} component={Paper}>
      <div className={classes.filterContainer}>
      <Typography variant="h6"  gutterBottom>
           List of Patients
        </Typography>
      <div className={classes.filter}>
        <TextField
          name="gender"
          select
          label="Gender"
          value={state.gender || ''}
          onChange={handleChange}
          helperText="Filter by Gender"
          variant="outlined"
          style={{marginRight:'15px'}}
        >
          {["Male","Female","Other"].map((option,i) => (
            <MenuItem key={i} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          name="age"
          select
          label="Age"
          value={state.age || ''}
          onChange={handleChange}
          helperText="Filter by Age"
          variant="outlined"
        >
          {[
            {
            label:'Less Than 20',
            value:'<20'
          },
            {
            label:'20 to 50',
            value:'>20<50'
          },
            {
            label:'Above 50',
            value:'>50'
          },
          ]
          .map((option,i) => (
            <MenuItem key={i} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          name='bmi'
          style={{width : '120px'}}
          onChange={handleChange}
          label='BMI'
          variant="outlined"
          type='text'
          helperText="Filter by BMI"
        />
        <IconButton onClick={filter} color="primary" component="span"><FilterListIcon/></IconButton>
      </div>
      </div>
      
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>S/N</TableCell>
            <TableCell align="center">Image</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Age</TableCell>
            <TableCell align="center">Gender</TableCell>
            <TableCell align="center">State</TableCell>
            <TableCell align="center">Encounter</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,i) => (
            <TableRow key={i}>
              <TableCell component="th" scope="row">
                {i + 1}
              </TableCell>
              <TableCell align="center"><img className={classes.img} src={row.src} alt='profileImg'/></TableCell>
              <TableCell align="center">{`${row.name}  ${row.surname}`}</TableCell>
              <TableCell align="center">{row.age}</TableCell>
              <TableCell align="center">{row.gender}</TableCell>
              <TableCell align="center">{row.state}</TableCell>
              <TableCell align="center"><Link to={`/encounter/${row.id}`}> <IconButton color="primary" component="span"><ArrowForwardIosIcon/></IconButton></Link></TableCell>
  
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </TableContainer>
   
  );
}
export default PatientsTable