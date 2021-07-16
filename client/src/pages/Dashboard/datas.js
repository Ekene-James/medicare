import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import PeopleIcon from '@material-ui/icons/People';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import CategoryIcon from '@material-ui/icons/Category';
export const data = [
    
    {   title : `Today's Orders`,
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
    {   title : `Today's Revenue`,
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
    {   title : `Today's Customer's`,
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
    {   title : `Today's Visitors`,
        subtitle : '2,530',
        icon : <TrendingDownIcon/>,
        txt: ` 0.34%`,
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
]
export const data2 = {
  labels: ['Mon','Tue','Wed','Thur','Fri', 'Sat','Sun'],
  datasets: [
    {
    label: 'Total Orders',
    data: [65, 59, 80, 81, 56, 55, 40],
    fill: true,
   
    tension: 0.7,
    borderColor:'green'
   
  },
    {
    label: 'Canceled Orders',
    data: [20, 37, 40, 35, 29, 19, 10],
    fill: false,
   
    tension: 0.7,
    borderColor:'orange'
   
  },
]
}
export const doughnut = {
labels: [
'Completed',
'cancelled',
'Processing',
],
datasets: [{
label: 'My First Dataset',
data: [300, 50, 100],
backgroundColor: [
'rgb(54, 162, 235)',
'rgb(255, 99, 132)',
'rgb(255, 205, 86)',
],
hoverOffset: 4
}]
}
export const storeStat = [
    {
        txt : 'Orders',
        number : '1,500',
        background : 'rgb(239,232,255)',
        color : 'rgb(133,79,255)',
        icon : <ShoppingBasketIcon/>
    },
    {
        txt : 'Customers',
        number : '2,500',
        background : 'rgb(223,247,251)',
        color : 'rgb(9,194,225)',
        icon : <PeopleIcon/>
    },
    {
        txt : 'Products',
        number : '500',
        background : 'rgb(254,234,242)',
        color : 'rgb(255,99,165)',
        icon : <MoveToInboxIcon/>
    },
    {
        txt : 'Categories',
        number : '50',
        background : 'rgb(239,232,255)',
        color : 'rgb(133,79,255)',
        icon : <CategoryIcon/>
    },
]