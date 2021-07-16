import React from 'react';

import PhotoSizeSelectActualIcon from '@material-ui/icons/PhotoSizeSelectActual';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import FavoriteIcon from '@material-ui/icons/Favorite';


import MoreVertIcon from '@material-ui/icons/MoreVert';

const avatar = name => name?.match(/\b(\w)/g).join('');
export default function TabCard({content}) {
const {media,headerTitle,headerSubTitle,color,body,bodyTitle} =content

  return (
    <Card style={{margin : '15px 0'}}>
      <CardHeader
        avatar={
          <Avatar style={{background: color}} aria-label="recipe" >
            {avatar(headerTitle)}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={headerTitle}
        subheader="September 14, 2016"
      />
    
      <CardContent>
        {
          bodyTitle && <Typography variant="h6"  component="p">
                          {bodyTitle}
                      </Typography>
        }
        
        <Typography variant="body2" color="textSecondary" component="p">
         {body}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        

        {
            media ? (
            <>
                <p style={{marginRight:'10px'}}>Two Files Attached </p>
                <IconButton aria-label="share">
                    <PhotoSizeSelectActualIcon />
                </IconButton>
            </>) : (
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            )  
        }
      </CardActions>
     
    </Card>
  );
}
