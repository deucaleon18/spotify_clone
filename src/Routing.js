
import App from './App';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";


import Appsearch from "./Appsearch";
import Myplaylist from './Functionality/Myplaylist';

const Routing=()=>{
    return(<Router>
      <Route exact path="/s"><Appsearch/></Route> 
      <Route exact path="/mp"><Myplaylist/></Route>
      <Route exact path="/">
      <App/>
       </Route> 
     </Router>) 
  }

  export default Routing;