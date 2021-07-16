import React, {useContext} from 'react';
import { SupportContext } from '../../store/support/SupportStore';
import TabCard from '../../components/cards/tabCard/TabCard';
import { Grid,  makeStyles,Paper , Button,TextField, InputAdornment  } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import PageDesc from '../../components/pageDesc/PageDesc';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
      
        [theme.breakpoints.down("sm")]: {
         
          maxWidth: `100%`
        }
       
       },
       input: {
        display: 'none',
      },
  
   
   }));
function SupportMsg() {
    const classes = useStyles();
    const spportCtx = useContext(SupportContext);
    const [state, setstate] = React.useState({
        message:'',
        img : '',
    })
    const handleChange = e => {
        const {name,value} = e.target
         setstate({
             ...state,
            [name] : value
        })
        
    }
    return (
        <div>
              <PageDesc title='Unable to select currency when order' notShow={true}/>
            {
                spportCtx.state.map((msg,i) => <TabCard key={i} content={msg}/>)
            }
            <Grid container spacing={3}>
              <Grid item  xs={12}  >
              <Paper className={classes.paper}>
                <TextField
                    name='message'
                    fullWidth
                    onChange={handleChange}
                    InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                        <EditIcon/>
                        </InputAdornment>
                    ),
                    }}
                    multiline
                    rows={4}
                    label='Message'
                    variant="outlined"
                    type='text'
                />
              <Button variant="contained" color="primary">
                    Reply
              </Button>
              <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
                <label htmlFor="icon-button-file">
                    <IconButton color="primary" aria-label="upload picture" component="span">
                        <PhotoCamera />
                    </IconButton>
                </label>
              </Paper>
              </Grid>

            </Grid>
          
        </div>
    )
}

export default SupportMsg
