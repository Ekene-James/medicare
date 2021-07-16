import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';


const useStyles = makeStyles({
  root: {
    width: 200,
  },
  thumb: {
      display : 'none',
  },
});

export default function ContinuousSlider({percentage,val}) {
  const classes = useStyles();


  return (
    <div className={classes.root}>
     
      <Grid container spacing={2}>
        
        <Grid item xs>
          <Slider classes={{thumb :classes.thumb}} defaultValue={val}  aria-labelledby="continuous-slider" />
        </Grid>
        <Grid item>
        <Typography id="continuous-slider" >
            {percentage}
        </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
