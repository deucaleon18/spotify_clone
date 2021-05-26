
import App from './App';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Loading from './Auth/Loading';
import Login from './Auth/Login';
import Appsearch from "./Appsearch";
import Playlist from './Functionality/Playlist';
import User from "./Functionality/User"
import CreatePlaylist from './Functionality/CreatePlaylist';
import Liked from './Functionality/Liked';

const Routing=()=>{
    return(<Router>
      <Route exact path="/s"><Appsearch/></Route> 
      <Route exact path="/create-playlist"><CreatePlaylist/></Route> 
      <Route exact path="/mp"><Playlist/></Route>
      <Route exact path="/liked"><Liked/></Route>
      <Route exact path="/loading"><Loading/></Route>
      <Route exact path="/login"><Login/></Route>
      <Route exact path="/user"><User/></Route>
      <Route exact path="/home">
      <App/>
       </Route> 
       <Route exact path="/"><Login/></Route>
     </Router>) 
  }

  export default Routing;