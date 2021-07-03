import React from 'react'
import Routing from './Routing';
import { createMuiTheme,ThemeProvider,responsiveFontSizes} from '@material-ui/core';
import Player from "./Functionality/Player/Player"




let theme = createMuiTheme({


// root:{

//     [theme.breakpoints.up('md')]: {
//         backgroundColor: 'red',
//       },

// },



 palette:{
     primary:{
         main:'#ffffff',
    
     },

     secondary:{
         main:'rgb(170,170,170)',  
     },
 },

typography:{
h1:{fontFamily:'Nunito Sans',
fontWeight:'900',
},


h2:{fontFamily:'Nunito Sans',
fontWeight:'800',
height:'5rem'},

h3:{fontFamily:'Nunito Sans',
fontWeight:'600',
height:'3rem'}
},






 })

theme=responsiveFontSizes(theme);
 const App = () => {
    return (
        <ThemeProvider theme={theme}>
                  <Player duration={localStorage.getItem('duration')} 
            percent={localStorage.getItem('percentage')} 
            time={localStorage.getItem('currentTime')} 
          
            />
            <Routing/>
        <div>
       
        </div>
        </ThemeProvider>
    )
}


export default App;