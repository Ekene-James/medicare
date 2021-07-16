import React from 'react'
import { Grid,  makeStyles,Paper   } from '@material-ui/core';
import PageDesc from '../../components/pageDesc/PageDesc';
import AnalyticsCardDesc from '../../components/analyticsDesc/AnalyticsCardDesc';
import Typography from '@material-ui/core/Typography';
import { settings } from './settingUtils';
import EditIcon from '@material-ui/icons/Edit';
import { Input  } from '@material-ui/core';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Switch from '@material-ui/core/Switch';
import Radio from '@material-ui/core/Radio';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
      
        [theme.breakpoints.down("sm")]: {
         
          maxWidth: `100%`
        }
       
       },
    form: {
        width: `50%`,
      
        [theme.breakpoints.down("sm")]: {
         
          width: `100%`
        }
       
       },
 
       desc: {
         display : 'flex',
         justifyContent: 'space-between',
         alignItems: 'start',
        
         flexDirection : 'column',
         
    },
       btn: {
         width : '100%',
         display : 'flex',
         justifyContent: 'flex-end',
         alignItems: 'center',
        
         
    },
       body: {
         display : 'flex',
         justifyContent: 'space-between',
         alignItems: 'center',
         marginTop: '20px',
         [theme.breakpoints.down("sm")]: {
          flexDirection : 'column',
          justifyContent: 'center',
         alignItems: 'start',
         
        }
    }
   
   }));
   function Settings() {
       const classes = useStyles();
       const [checked, setchecked] = React.useState(false);
       const [registration, setregistration] = React.useState('enable');
       const [state, setstate] = React.useState({
           storeName:'',
           storeEmail : '',
           mainWebsite : '',
           siteCopyright : ''
       })
       const handleChecked = e => setchecked(!checked);
       const handleRegistration = (event) =>  setregistration(event.target.value);
      
       const handleChange = e => {
           const {name,value} = e.target
            setstate({
                ...state,
               [name] : value
           })
           
       }
       const forms = (type,name,title)  => {
           switch (type) {
               case 'input':
                   return <Input
                               name={name}
                               fullWidth
                               value={state[name] || ''}
                               onChange={handleChange}
                               endAdornment={<EditIcon position="end"/>}
                               inputProps={{
                               'aria-label': {title},
                               }}
                           />;
               case 'email':
                   return <Input
                                fullWidth
                               type='email'
                               name='storeEmail'
                               value={state.storeEmail}
                               onChange={handleChange}
                               endAdornment={<EditIcon position="end"/>}
                               inputProps={{
                               'aria-label': 'Store Email',
                               }}
                           />;
               case 'toggle':
                   return   <Switch
                                checked={checked}
                                onChange={handleChecked}
                                color="primary"
                                name="checked"
                                
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                                />;
               case 'radioButton':
                   return  <FormControl component="fieldset">
                            
                            <RadioGroup row aria-label="position" name="registration" onChange={handleRegistration} value={registration}>
                                <FormControlLabel
                                value="enable"
                                control={<Radio color="primary" />}
                                label="Enable"
                                labelPlacement="end"
                                />
                                <FormControlLabel
                                value="disable"
                                control={<Radio color="primary" />}
                                label="Disable"
                                labelPlacement="end"
                                />
                                <FormControlLabel
                                value="onRequest"
                                control={<Radio color="primary" />}
                                label="On Request"
                                labelPlacement="end"
                                />
                                
                            </RadioGroup>
                            </FormControl>
           
               default:
                   break;
           }
       }
    return (
        <div>
          <Grid container spacing={3}>
              <PageDesc title='Settings' notShow={true}/>
              <Grid item  xs={12}  >
                <Paper className={classes.paper}>
                   <AnalyticsCardDesc data={settings.header}/>
                   {
                       settings.body.map((body,i) => <div className={classes.body} key={i}>
                             <div className={classes.desc}>
                             <Typography variant="body2" gutterBottom>
                                {body.title}
                             </Typography>
                             <Typography variant="caption"  gutterBottom>
                                {body.subtitle}
                             </Typography>
                             </div>         
                             <div className={classes.form}>
                               {forms(body.form, body.name, body.title)}
                             </div>         
                       </div>)
                   }
                   <div className={classes.btn}>
                      <Button variant="contained" color="primary">
                        Update
                     </Button>

                   </div>
                  
                   
                  
                </Paper>
                </Grid>
             
          </Grid>
        </div>
    )
}

export default Settings
