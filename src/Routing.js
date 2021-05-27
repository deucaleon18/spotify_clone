
import App from './App';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Loading from './Auth/Loading';
import Login from './Auth/Login';
import Appsearch from "./Appsearch";
import Playlistsongs from './Functionality/Playlistsongs';
import User from "./Functionality/User"
import CreatePlaylist from './Functionality/CreatePlaylist';
import Liked from './Functionality/Liked';
import MyLibrary from "./Functionality/MyLibrary";
import Artist from './Functionality/Artist';
import Song from './Functionality/Song';
import Playlist from './Functionality/Playlist';
const Routing=()=>{
    return(<Router>
      <Route exact path="/search"><Appsearch/></Route> 
      <Route exact path="/create-playlist"><CreatePlaylist/></Route> 
      <Route exact path="/playlist/:id"><Playlistsongs/></Route>
      <Route exact path="/playlist/song/:id"><Playlist/></Route>
      <Route exact path="/song/:id"><Artist/></Route>
      <Route exact path="/artist/:id"><Song/></Route>
      <Route exact path="/liked"><Liked/></Route>
      <Route exact path="/loading"><Loading/></Route>
      <Route exact path="/library"><MyLibrary/></Route>
      <Route exact path="/login"><Login/></Route>
      <Route exact path="/user"><User/></Route>
      <Route exact path="/home">
      <App/>
       </Route> 
       <Route exact path="/"><Login/></Route>
     </Router>) 
  }

  export default Routing;