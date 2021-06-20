import React from 'react'
import Routing from './Routing';
import { createMuiTheme,ThemeProvider } from '@material-ui/core';


const theme = createMuiTheme({

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


'&:hover': {
    background: "#121212",
    color:'white'
 },
  




 })


 const App = () => {
    return (
        <ThemeProvider theme={theme}>
        <div>
            <Routing/>
        </div>
        </ThemeProvider>
    )
}


export default App;