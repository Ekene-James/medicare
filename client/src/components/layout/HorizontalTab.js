import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Link} from 'react-router-dom';
import Box from '@material-ui/core/Box';
import TabCard from '../cards/tabCard/TabCard';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  link: {
    textDecoration: 'none',
    backgroundColor: theme.palette.background.paper,
  },
}));
const tabData = [
  {
    title : 'Active',
    contents : [
      { id : 1,
        color : 'blue',
        headerTitle :'Chorizo Paella',
        body : 'I am facing problem as i can not select currency on buy order page. Can you guys let me know what i am doing doing wrong? Please check attached files.',
        bodyTitle : 'Unable to select currency when order'
    },
      { id : 2,
        color : 'orange',
        headerTitle :'Jackelyn Dugas',
        body : 'Hey! I recently bitcoin from you. But still have not',
        bodyTitle : 'Have not received bitcoin'
    },
      { id : 3,
        color : 'green',
        headerTitle :'Mayme Johnston',
        body : 'Hello support! I can not upload my documents on',
        bodyTitle : 'I can not upload my documents on'
    },
      { id : 4,
        color : 'blue',
        headerTitle :'Jake Smityh',
        body : 'Hello team, I am facing problem as i can not select',
        bodyTitle : 'Unable to select currency when order'
    },
      { id : 5,
        color : 'pink',
        headerTitle :'Amanda Moore',
        body : 'Hello team, I am facing problem as i can not select',
        bodyTitle : 'Unable to select currency when order'
    },
  ]
  },
  {
    title : 'Closed',
    contents : [
    
    { id : 4,
      color : 'blue',
      headerTitle :'Jake Smityh',
      body : 'Hello team, I am facing problem as i can not select',
      bodyTitle : 'Unable to select currency when order'
  },
    { id : 5,
      color : 'pink',
      headerTitle :'Amanda Moore',
      body : 'Hello team, I am facing problem as i can not select',
      bodyTitle : 'Unable to select currency when order'
  },
    ]
  },
  {
    title : 'Stared',
    contents :  [
    
      { id : 4,
        color : 'blue',
        headerTitle :'Jake Smityh',
        body : 'Hello team, I am facing problem as i can not select',
        bodyTitle : 'Unable to select currency when order'
    },
      { id : 5,
        color : 'pink',
        headerTitle :'Amanda Moore',
        body : 'Hello team, I am facing problem as i can not select',
        bodyTitle : 'Unable to select currency when order'
    },
      ]
  },
  {
    title : 'All',
    contents :  [
    
      { id : 4,
        color : 'blue',
        headerTitle :'Jake Smityh',
        body : 'Hello team, I am facing problem as i can not select',
        bodyTitle : 'Unable to select currency when order'
    },
      { id : 5,
        color : 'pink',
        headerTitle :'Amanda Moore',
        body : 'Hello team, I am facing problem as i can not select',
        bodyTitle : 'Unable to select currency when order'
    },
      ]
  },
  
];
export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar style={{backgroundColor : 'white'}} position="static">
        <Tabs centered textColor='primary' indicatorColor='primary' value={value} onChange={handleChange} aria-label="simple tabs example">
          {
            tabData.map((tab,i) => <Tab key={i} label={tab.title} {...a11yProps(i)} />)
          }
        </Tabs>
      </AppBar>
      {
            tabData.map((tab,i) => <TabPanel key={i} value={value} index={i}> {
              tab.contents.map((content,j) =><Link  key={j} className={classes.link} to={`/support/${content.id}`}><TabCard content={content}/> </Link> )
              }</TabPanel>
            )
      }
     
    </div>
  );
}
