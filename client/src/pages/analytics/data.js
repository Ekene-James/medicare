import { Button ,ButtonGroup} from "@material-ui/core";
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';

export const audienceOverview = {
    header : {
        title : 'Audience Overview',
        subtitle : 'How have your users, sessions, bounce rate metrics trended.',
        btn :    <ButtonGroup size="small" color="primary" aria-label="outlined primary button group">
                    <Button>7D</Button>
                    <Button>1M</Button>
                    <Button>3M</Button>
                </ButtonGroup>,
      
    },
    miniCard : [
        {
        title : 'Users',
        subtitle : '2.53k',
        txt: '12.37%',
        icon :  <TrendingUpIcon/>,
        color  : 'green'  
    },
        {
        title : 'Sessions',
        subtitle : '3.98k',
        txt: '1.37%',
        icon :  <TrendingDownIcon/>,
        color  : 'red'  
    },
        {
        title : 'Users',
        subtitle : '3.98k',
        txt: '1.37%',
        icon :  <TrendingDownIcon/>,
        color  : 'red'  
    },
        {
        title : 'Users',
        subtitle : '7m 28s',
        txt: '1.37%',
        icon :  <TrendingUpIcon/>,
        color  : 'green'  
    },
],
lineGraph : {
    labels: ['Mon','Tue','Wed','Thur','Fri', 'Sat','Sun'],
    datasets: [
      {
      label: 'Total Orders',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: true,
      pointRadius: 0,
      tension: 0.7,
      borderColor:'green',
      borderWidth : 2
     
    },
      {
      label: 'Canceled Orders',
      data: [70, 55, 79, 85, 50, 45, 43],
      fill: false,
      borderDash : [8],
      pointRadius: 0,
      tension: 0.7,
      borderColor:'orange',
      borderWidth : 1
     
    },
  ]
  }
}
export const websitePerformance = {
    header : {
        title : 'Website Performance',
        subtitle : 'How has performend this month.',
   
      
    },
    performance : [
      {   title : `Bounce Rate (avg)`,
      subtitle : '5,530',
      icon : <TrendingUpIcon/>,
      txt: ` 4.34%`,
      color: 'green',
      data :     {
        labels: ['Mon','Tue','Wed','Thur','Fri', 'Sat','Sun'],
        datasets: [{
          label: 'Data',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          backgroundColor : 'white',
          tension: 0.1,
          borderColor:'green'
         
        }]
      }
  
  },
  {   title : `Pageviews (avg)`,
      subtitle : '3,530',
      icon : <TrendingUpIcon/>,
      txt: ` 2.34%`,
      color: 'green',
      data : 
            {
                labels: ['Mon','Tue','Wed','Thur','Fri', 'Sat','Sun'],
                datasets: [{
                label: 'Data',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
             
                backgroundColor : 'white',
                tension: 0.1,
                borderColor:'green',
                }],
            }
  
  },
  {   title : `New Users (avg)`,
      subtitle : '2,530',
      icon : <TrendingDownIcon/>,
      txt: ` 1.34%`,
      color: 'red',
      data : 
            {
                labels: ['Mon','Tue','Wed','Thur','Fri', 'Sat','Sun'],
                datasets: [{
                label: 'Data',
                data: [65, 59, 58, 57, 56, 55, 40],
                fill: false,
                backgroundColor : 'white',
                tension: 0.1,
                borderColor:'red'
                
                }]
            }
  
  },
  {   title : `Time on Site (avg)`,
      subtitle : '2,530',
      icon : <TrendingDownIcon/>,
      txt: ` 1m 3s`,
      color: 'red',
      data : {
        labels: ['Mon','Tue','Wed','Thur','Fri', 'Sat','Sun'],
        datasets: [{
          label: 'Data',
          data: [65, 59, 70, 60, 56, 55, 40],
          fill: false,
          backgroundColor : 'white',
          tension: 0.1,
          borderColor:'red'
         
        }]
      }
  
  },
],
lineGraph : {
    labels: ['Mon','Tue','Wed','Thur','Fri', 'Sat','Sun'],
    datasets: [
      {
      label: 'Total Orders',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: true,
      pointRadius: 0,
      tension: 0.7,
      borderColor:'green',
      borderWidth : 2
     
    },
      {
      label: 'Canceled Orders',
      data: [70, 55, 79, 85, 50, 45, 43],
      fill: false,
      borderDash : [8],
      pointRadius: 0,
      tension: 0.7,
      borderColor:'orange',
      borderWidth : 1
     
    },
  ]
  }
}
export const browserTable = {
    header : {
        title : 'Browser Used By Users',
        subtitle : 'Different Browsers By different Users',  
    },
    table : [
      {
          browser : 'Google Chrome',
          color : 'green',
          users : '1,300',
          val: 80,
          percentage : '72.45%',
          bounceRate : '22.62%'
      },
      {
          browser : 'Mozilla Firefox',
          color : 'red',
          users : '300',
          val: 10,
          percentage : '16.45%',
          bounceRate : '22.62%'
      },
      {
          browser : 'Safari Browser',
          color : 'blue',
          users : '1000',
          val: 30,
          percentage : '35.45%',
          bounceRate : '22.62%'
      },
      {
          browser : 'UC Browser',
          color : 'orange',
          users : '1,300',
          val: 40,
          percentage : '50.45%',
          bounceRate : '22.62%'
      },
      {
          browser : 'Edge / IE',
          color : 'green',
          users : '1,300',
          val: 15,
          percentage : '37.45%',
          bounceRate : '22.62%'
      },
      {
          browser : 'Other browsers',
          color : 'blue',
          users : '1,300',
          percentage : '37.45%',
          val: 70,
          bounceRate : '22.62%'
      },
     
     ],
}
export const pageViews = {
    header : {
        title : 'Pages View by Users',
        btn :    <ButtonGroup size="small" color="primary" aria-label="outlined primary button group">
        <Button>7D</Button>
        <Button>1M</Button>
        <Button>3M</Button>
    </ButtonGroup>, 
    },
    table : [
      {
          page : '/',
          views : '2,000',
      },
      {
          page : '/subscription/index.html',
          views : '200',
      },
      {
          page : '/general/index.html',
          views : '500',
      },
      {
          page : '/crypto/index.html',
          views : '300',
      },
      {
          page : '/invest/index.html',
          views : '900',
      },
      {
          page : '/subscription/profile.html',
          views : '800',
      },
     
     ],
}
export const trafficChannel = {
    header : {
        title : 'Traffic Channel',
        btn :<ButtonGroup size="small" color="primary" aria-label="outlined primary button group">
            <Button>7D</Button>
            <Button>1M</Button>
            <Button>3M</Button>
       </ButtonGroup>, 
    },
    doughnut : {
      labels: [
      'Organic Search',
      'Social Media',
      'Referals',
      'Others'
      ],
      datasets: [{
      label: 'Traffic',
      data: [300, 100, 50, 10],
      backgroundColor: [
      'rgb(157,114,255)',
      'rgb(184,172,255)',
      'rgb(255,169,206)',
      'rgb(249,219,123)',
      ],
      hoverOffset: 4
      }]
      },
}
export const session = {
    header : {
        title : 'Sessions by Device',
        btn :<ButtonGroup size="small" color="primary" aria-label="outlined primary button group">
            <Button>7D</Button>
            <Button>1M</Button>
            <Button>3M</Button>
       </ButtonGroup>, 
    },
    doughnut : {
      labels: [
      'Mobile',
      'PC',
      'Tablet',
      'Others'
      ],
      datasets: [{
      label: 'Sessions',
      data: [300, 150, 80, 20],
      backgroundColor: [
      'rgb(157,114,255)',
      'rgb(184,172,255)',
      'rgb(255,169,206)',
      'rgb(249,219,123)',
      ],
      hoverOffset: 4
      }]
      },
}

export const activeUsers = {
    header : {
        title : 'Active Users',
        subtitle : 'How do your users visited in the time.',
        btn :   ''
      
    },
    miniCard : [
        {
        title : 'Monthly',
        subtitle : '2.53k',
        txt: '12.37%',
        icon :  <TrendingUpIcon/>,
        color  : 'green'  
    },
        {
        title : 'Weekly',
        subtitle : '3.98k',
        txt: '1.37%',
        icon :  <TrendingDownIcon/>,
        color  : 'red'  
    },
       
        {
        title : 'Daily (Avg)',
        subtitle : '3.98k',
        txt: '1.37%',
        icon :  <TrendingUpIcon/>,
        color  : 'green'  
    },
],
barChart : {
    labels: ['Jan','Feb','Mar','Apr','May', 'Jun','Jul'],
    datasets: [{
      label: 'Active Users',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1
    }]
  }
}