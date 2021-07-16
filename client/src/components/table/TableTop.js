import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import { fade, makeStyles } from '@material-ui/core/styles';
import { Button, InputBase,  TextField,  Typography } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      border : '1px solid rgba(108,106,106, 0.5)',
      display : 'flex',
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },

      width: '200px',
      marginRight : '8px'
     
    },
    searchIcon: {
     alignSelf:'center',
      marginRight: '3px',
      marginTop: '2px',
      color: 'rgba(108,106,106, 0.5)',
      pointerEvents: 'none',
     
    },
    inputRoot: {
      color: 'inherit',
      padding: '0 5px'
    },
    btn : {
        marginLeft : '8px',
        background : '#3d8f83',
        color : 'white',
        '&:hover' : {
            background : fade('#3d8f83', 0.8)
        }
    },

    container : {
        display : 'flex',
        justifyContent : 'center',
        marginBottom : '10px',
        [theme.breakpoints.down('sm')]: {
           flexDirection : 'column !important',
        
         
          },
        
    },
    date : {
     
       
    },
    containerTwo : {
        display : 'flex',
        justifyContent : 'space-between',
        width: '53%',
        [theme.breakpoints.down('sm')]: {
          flexDirection : 'column',
            marginTop : '10px'
           
           },
    },
    lastContainer : {
      display : 'flex',
        [theme.breakpoints.down('sm')]: {
          display : 'flex',
          justifyContent : 'space-between',
            marginTop : '10px'
           
           },
    },
    

  }));
  

function TableTop() {
    const classes = useStyles();
    const [state, setState] = React.useState({
    date: '2017-05-24',
    search : ''
    });
    const handleChange = (event) => {
      const name = event.target.name;
      setState({
        ...state,
        [name]: event.target.value,
      });
      
    };
    return (
    <div className={classes.container}>
      
        <Typography className={classes.title} variant="body1" noWrap>
           Payout Table
          </Typography>
       
        
            <div className={classes.containerTwo}>
                <div className={classes.search}>
                    
                    <InputBase
                    placeholder="Search…"
                    name='search'
                    value={state.search}
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                    />
                    <div className={classes.searchIcon}>
                    <SearchIcon />
                    </div>
            </div>
            
             <div className={classes.lastContainer}>

            <form  noValidate>
                    <TextField
                        
                        name='date'
                        value={state.date}
                       onChange={handleChange}
                        variant='outlined'
                        size='small'
                        type="date"
                        
                        className={classes.date}
                        
                    />
                </form>
                <Button className={classes.btn} disableElevation  variant="contained">Payout</Button>

              </div>
            </div>
               
          
            

    </div>
    )
}

export default TableTop
