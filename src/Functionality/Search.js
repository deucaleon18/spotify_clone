import React,{useState} from 'react';
import "../styles/search.css";
import{ url} from '../Auth/stats.js';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import SearchSharpIcon from '@material-ui/icons/SearchSharp';

 const Search = () => {
    const [searchvalue,setSearchvalue]=useState('')
    const [searchresult,setSearchresult]=useState("x")
    const [loading,setLoading]=useState(false);
    // eslint-disable-next-line
    const [liked,setLiked]=useState();
    const[show,setShow]=useState(false)
    const[showerror,setShowerror]=useState(false)
   //  const [playlistspopup,setPlaylistspopup]=useState(false);
   //  const[myplaylists,setMyplaylists]=useState([]);
     const fetchDeezer=async()=>{
         const results= await fetch(`${url}search?q=${searchvalue}`)
         const data=await results.json();
        //  console.log(data.data) ;
         setSearchresult(data);
         /* eslint eqeqeq: 0 */
        if(data.data.length==0){
            setShow(false)
            setShowerror(true);
            }
         }
       
   const handleSubmit=(e)=>{
       e.preventDefault();
           setLoading(true)
    
    fetchDeezer(); 
    if(searchresult!==undefined&&searchresult!=="x"){setLoading(false);
         setShow(true);
         }

   }
      // const showPlaylistspopup=()=>{
      //    setPlaylistspopup(true)
      // }


      // eslint-disable-next-line
      const likeSong=(track_id)=>{
        const user_id=localStorage.getItem('user_id')
        const access_token=localStorage.getItem('token')
       fetch (`${url}user/${user_id}/tracks&access_token=${access_token}&request_method=post&track_id=${track_id}`)
       .then((res)=> res.json())
        .then((res)=>console.log(res)) 
        setLiked(true)
      }
        // eslint-disable-next-line
 const unlikeSong=(track_id)=>{
        const user_id=localStorage.getItem('user_id')
        const access_token=localStorage.getItem('token')
       fetch (`${url}user/${user_id}/tracks&access_token=${access_token}&request_method=delete&track_id=${track_id}`)
       .then((res)=> res.json())
        .then((res)=>console.log(res)) 
        setLiked(false)
      }

      //  const unlikeSong=async(ID)=>{
      //    const user_id=localStorage.getItem('user_id')
      //    const access_token=localStorage.getItem('token');
      //    const results =await fetch(`${url}user/${user_id}/tracks&track_id=${ID}&access_token=${access_token}&request_method=delete`) 
      //    const data= await results.json();
      //    console.log(data);
      //    setLiked(!liked);
      //  }
      //  const getMyPlaylists=async()=>{
      //    try{const user_id=localStorage.getItem('user_id')
      //    const access_token=localStorage.getItem('token')
      //    const results=await fetch(`${url}user/${user_id}/playlists&access_token=${access_token}`)
      //    const data=await results.json()
      //    console.log(data.data);
      //    if(data!==undefined){
      //        setMyplaylists(data.data);
      //        // setLoading(false);
      //    }}
      //    catch(err){
      //       console.error(err)
      //    }
      // }
     
      // useEffect(() => {
      //    getMyPlaylists()
      // }, [])
    return (
        <div className="search">
      <div className="search-area">
          <div className="bar">
              <form onSubmit={handleSubmit}>
              <label htmlFor="search"></label>
              <input 
              type="text" 
              name="search"  
              placeholder="Search"
              id="search-bar"
              value={searchvalue}
              onChange={(e)=>setSearchvalue(e.target.value)}
              />
              <button type="submit" ><SearchSharpIcon className="search-icon"/></button>
              </form>
             

         {loading?
         (<div className="search-area">
         <Loader
        type="ThreeDots"
         color="white"
        height={100}
        width={100}
        timeout={10000} //10 secs
      className="loader"/>
      </div>)
         :(<>
       {show?(<div className="sectionheader-search">
      <div></div>
 
  {/* <div></div> */}
     <h3>TITLE</h3>
     <h3>ALBUM</h3>
     <h3>ARTIST</h3>
  
      </div>
      ):null} 

           {show?(searchresult.data.map((searcher)=>{


           
          const{album,artist,id,title}=searcher
         //  const addtoThisPlaylist=async(ID,id)=>{
         //    // const user_id=localStorage.getItem('user_id')
         //    const access_token=localStorage.getItem('token')
         //    const results=await fetch(`${url}playlist/${ID}/tracks&songs=${id}&order=${id}&request_method=post&access_token=${access_token}`)
         //    const data=await results.json();
         //    console.log(data);
         //    window.location.reload();
         // }
           // eslint-disable-next-line
 {/* {playlistspopup?(<div id={searcher.id} className="playlistspopup">
                   {/* <button onClick={setPlaylistspopup(false)}><CancelSharpIcon/></button> */}
                     // eslint-disable-next-line
            {/* {myplaylists.map((playlists)=>{
              return <h1 onClick={()=>{addtoThisPlaylist(`${playlists.id}`,`${id}`)}}>{playlists.title}</h1>
            })}
            </div>
            ):""
            } */}   
  // eslint-disable-next-line
             // eslint-disable-next-line 
                 {/* {liked? <button onClick={()=>{likeSong(searcher.id)}}><AiTwotoneLike/></button>:<button onClick={()=>{unlikeSong(searcher.id)}}><BiLike/></button>} */}
                   // eslint-disable-next-line
         {/* {playing? <button onClick={setPlaying(!playing)}><h3>pause</h3></button>:<button onClick={setPlaying(!playing)}><h3>play</h3></button>}  */}
           // eslint-disable-next-line
               {/* <button onClick={()=>{showPlaylistspopup()}}><AddBoxSharpIcon className="add-icon"/></button> */}
                 // eslint-disable-next-line
                {/* <a href={`/this/song/${searcher.id}`}> */}
                    // eslint-disable-next-line
                      {/* <div></div> */}




         return( 
               <div key={searcher.id} onClick={()=>{window.location.href=`/this/song/${id}`}} className="search-box"> 
               <img src={artist.picture_small} alt=""/>
               <h2>{title}</h2> 
                <h2>{artist.name}</h2>
                <h2>{album.title}</h2>
                {/* </a> */}
                </div>
                
             )}

           
           )  
           ):(showerror?<h1 style={{color:"white"}}>No results found....</h1>:null )
           
           }
        
</>
       )  
 }
        </div>
      </div>  
        </div>
        
    )
    }

export default Search;
