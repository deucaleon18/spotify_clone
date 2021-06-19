import React from 'react'
import Routing from './Routing';
import { createMuiTheme,responsiveFontSizes,ThemeProvider } from '@material-ui/core';


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
h3:{fontFamily:'Nunito Sans',
fontWeight:'800',
height:'5rem'}
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