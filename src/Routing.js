
import App from './App';
import {BrowserRouter as Router,Route} from "react-router-dom";
import Loading from './Auth/Loading';
import Login from './Auth/Login';
import Appsearch from "./Appsearch";
import Playlist from './Functionality/Playlist';
import Album from './Functionality/Album';
// import User from "./Functionality/User"
import CreatePlaylist from './Functionality/CreatePlaylist';
import Liked from './Functionality/Liked';
import MyLibrary from "./Functionality/MyLibrary";
import Artist from './Functionality/Artist';
import Song from './Functionality/Song';
import Podcast from './Functionality/Podcast';
import MyPlaylists from './Functionality/MyPlaylists';
import AddingToPlaylist from './Functionality/AddSongstoMyplaylist';
import Error from "./Functionality/Error"
const Routing=()=>{
    return(<Router>
      <Route exact path="/search"><Appsearch/></Route> 
      <Route exact path="/create-playlist"><CreatePlaylist/></Route> 
      <Route exact path="/playlist/:id"><Playlist/></Route>
      <Route exact path="/album/:id"><Album/></Route>
      {/* <Route exact path="/playlist/song/:id"><Playlistsong/></Route> */}
      <Route exact path="/this/song/:id"><Song/></Route>
      <Route exact path="/artist/:id"><Artist/></Route>
      <Route exact path="/podcast/:id"><Podcast/></Route>
      <Route exact path="/liked"><Liked/></Route>
      <Route exact path="/user/playlists"><MyPlaylists/></Route>
      <Route exact path="/user/playlist/:id"><AddingToPlaylist/></Route>
      <Route exact path="/loading"><Loading/></Route>
      <Route exact path="/library"><MyLibrary/></Route>
      <Route exact path="/login"><Login/></Route>
      {/* <Route exact path="/user"><User/></Route> */}
      <Route exact path="/sorry"><Error/></Route>
      <Route exact path="/home">
      <App/>
       </Route> 
       <Route exact path="/"><Login/></Route>
     </Router>) 
  }

  export default Routing;