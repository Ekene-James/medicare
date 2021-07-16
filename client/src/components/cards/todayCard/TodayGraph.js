import React from 'react'
import { Line } from 'react-chartjs-2';

function TodayGraph(props) {
   
  
  
     
    return (
    <div>
        <Line  data={props.data} />
    </div>
    )
}

export default TodayGraph
