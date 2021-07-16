import React from 'react';
import { makeStyles,Paper , Button,TextField, Grid, Typography,MenuItem  } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Webcam from "react-webcam";
const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(3),
       

       },
    form: {
        width:'100%'
       },
    sc: {
        border: '1px solid rgb(126,118,254)',
        borderRadius: '3px',
        padding: '5px'
       },
     
  
   }));

function RegisterPatients() {
    const classes = useStyles();
    const webcamRef = React.useRef(null);
    const [state, setstate] = React.useState({})
    const [image,setImage]=React.useState('');
    const [start,setStart]=React.useState(false);
    const videoConstraints = {
        facingMode: "user"
      };
    const capture = React.useCallback(
      () => {
          
              const imageSrc = webcamRef.current.getScreenshot();
              setImage(imageSrc)
              setStart(false)
         
         
      },
      [webcamRef]
    );
  
  const calcBmi = Number(state?.weight) / Number(state?.height)
  const submit = e => {
      e.preventDefault();
      const data={
          ...state,
          bmi:calcBmi,
          image
      }
    //  console.log(data)
     

  }
  
      const handleChange = e => {
        const {name,value} = e.target
         setstate({
             ...state,
            [name] : value
        })
        
    }
      const startCam = () => {
        setStart(true)
         setImage('')
        
    }

  
    return (
            <>
              <Typography variant="h4"  gutterBottom>
                       Register Patients
              </Typography>
          
            <Paper className={classes.paper}>
            <form onSubmit={submit}>
            <Grid container spacing={3}>
          
                <Grid item xs={12} md={6}>
                    <TextField
                        name='name'
                        fullWidth
                        required
                        onChange={handleChange}
                        label='Name'
                        variant="outlined"
                        type='text'
                       
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        name='surname'
                        fullWidth
                        required
                        onChange={handleChange}
                        label='Surname'
                        variant="outlined"
                        type='text'
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        name='age'
                        fullWidth
                        required
                        onChange={handleChange}
                        label='Age'
                        variant="outlined"
                        type='text'
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                <TextField
                    name="gender"
                    select
                    fullWidth
                    label="Gender"
                    onChange={handleChange}
                    helperText="Gender"
                    variant="outlined"
                    value={state.gender || ''}
                    
                    >
                        {[
                            {
                            label:'Male',
                            value:'male'
                        },
                            {
                            label:'Female',
                            value:'female'
                        },
                            {
                            label:'Other',
                            value:'other'
                        },
                           
                        ]
                        .map((option,i) => (
                            <MenuItem key={i} value={option.value}>
                            {option.label}
                            </MenuItem>
                        ))}
                </TextField>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        name='height'
                        fullWidth
                        required
                        onChange={handleChange}
                        label='Height'
                        variant="outlined"
                        type='text'
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        name='weight'
                        fullWidth
                        required
                        onChange={handleChange}
                        label='Weight'
                        variant="outlined"
                        type='text'
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        name='ward'
                        fullWidth
                        required
                        onChange={handleChange}
                        label='Ward'
                        variant="outlined"
                        type='text'
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        name='lga'
                        fullWidth
                        required
                        onChange={handleChange}
                        label='LGA'
                        variant="outlined"
                        type='text'
                    />
                </Grid>
                <Grid item xs={12} md={6} >
                    <TextField
                        name='state'
                        fullWidth
                        required
                        onChange={handleChange}
                        label='state'
                        variant="outlined"
                        type='text'
                    />
                </Grid>
                <Grid item xs={12} md={6} >
                  {
                      calcBmi && calcBmi !== Infinity  ? (
                        <Typography variant="h4"  gutterBottom>
                            BMI :  {calcBmi}
                        </Typography>

                      ) : ''
                  }
                </Grid>
                <Grid item xs={12} >
                <div >
                    {
                        start ? (
                            <Webcam
                            audio={false}
                            height={250}
                            ref={webcamRef}
                            screenshotFormat="image/jpeg"
                            width={250}
                            videoConstraints={videoConstraints}
                            />
                        ) : ''
                        
                    }
                    {
                       !start && image !=='' ? (<img src={image} className={classes.sc} alt='screenshot'/>) : ''
                    }

                </div>
              
              {
                  start ? (
                <label htmlFor="icon-button-file">
                    <IconButton onClick={capture} color="primary" aria-label="upload picture" component="span">
                        <PhotoCamera />
                    </IconButton>
                </label>
                  ) : (
                    <label htmlFor="icon-button-file">
                    <IconButton onClick={startCam} color="secondary" aria-label="upload picture" component="span">
                        <PhotoCamera />
                    </IconButton>
                </label>
                  )
              }
              
                <Button variant="contained" type='submit' color="primary" >
                    Submit
                </Button>
                </Grid>
        </Grid>
    </form>
    </Paper>
    </>  
 
    )
}

export default RegisterPatients
