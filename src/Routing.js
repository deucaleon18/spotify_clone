
import App from './App';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Loading from './Auth/Loading';
import Login from './Auth/Login';
import Appsearch from "./Appsearch";
import Myplaylist from './Functionality/Myplaylist';

const Routing=()=>{
    return(<Router>
      <Route exact path="/s"><Appsearch/></Route> 
      <Route exact path="/mp"><Myplaylist/></Route>
      <Route exact path="/loading"><Loading/></Route>
      <Route exact path="/home">
      <App/>
       </Route> 
       <Route exact path="/"><Login/></Route>
     </Router>) 
  }

  export default Routing;