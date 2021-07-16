
import React ,{createContext} from 'react';
import { SupportReducer } from '../reducers/SupportReducer';

export const SupportContext = createContext();

export default function SupportContextProvider (props){
 const initialState =[
  
        { id : 1,
          color : 'blue',
          headerTitle :'Chorizo Paella',
          body : 'I am facing problem as i can not select currency on buy order page. Can you guys let me know what i am doing doing wrong? Please check attached files.',
          media : true
      },
        { id : 2,
          color : 'red',
          headerTitle :'Support Team',
          body : `Hello Ishtiyak,

          We are really sorry to hear that, you have face an unexpected experience. Our team urgently look this matter and get back to you asap.
          
          Thank you very much.`,
      },
        { id : 3,
          color : 'green',
          headerTitle :'Chorizo Paella',
          body : 'Devement Team need to check out the issues.',
          
      },
        { id : 4,
          color : 'red',
          headerTitle :'Support Team',
          body : `Hello Ishtiyak,

          Thanks for waiting for us. Our team solved the issues. So check now on our website. Hopefuly you can order now.
          
          Thank you very much once again.`,
         
      },
        
   
    
  ];
 const [state, dispatch] = React.useReducer(SupportReducer, initialState);


const value ={
state,
dispatch
}
    return (
        <SupportContext.Provider value={value}>
            {props.children}
        </SupportContext.Provider>
    )
}