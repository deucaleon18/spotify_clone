import React,{useState} from 'react';
import "../styles/search.css";
import{APIKey, url} from '../Auth/stats.js';

 const Search = () => {
    const [searchvalue,setSearchvalue]=useState('')
    const [searchresult,setSearchresult]=useState()
    const [loading,setLoading]=useState(true);
   
   const handleSubmit=async(e)=>{
       e.preventDefault();
      // fetchData();
      fetchDeezer();
   }

   const fetchDeezer=async()=>{
      const results= await fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${searchvalue}`, {
         "method": "GET",
         "headers": {
            "x-rapidapi-key": "e29141c4e6msh102d2b1926a7361p1b674ejsnca4accbfc562",
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
         }
      })
      const data=await results.json()
   //    const key=await results.trackmatches
      console.log(data.data) ;
      setSearchresult(data.data);
      if(searchresult!==undefined){setLoading(false);}
      }

//    const fetchData=async()=>{
//    const results= await fetch(`${url}?method=track.search&track=${searchvalue}&api_key=${APIKey}&format=json&limit=5`)
//    const data=await results.json()
// //    const key=await results.trackmatches
//    console.log(data.results.trackmatches.track) ;
//    setSearchresult(data.results.trackmatches.track);
//    if(searchresult!==undefined){setLoading(false);}
//    }
//    if(searchresult!==undefined){console.log(searchresult);}
  //  if(searchresult!==undefined)
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
              <button type="submit">Submit</button>
              </form>
             
         {loading?<h1><Grid classname="grid"/></h1>:(
       
           searchresult.map((searcher)=>{
          const{id,album,artist,preview}=searcher
             return(
                <div key={id} className="search-box">
                <a href={preview}>pl</a>
                <img src={artist.picture_small,preview} alt="" />
                <h3>{artist.name}</h3>
                <h3>{album.title}</h3>
                </div>
             )
           }
           )
           
       )   
 }
        </div>
      
      </div>
     
        </div>
    )
    }
const Grid=()=>{
return (
<div>
<div>
   <div className="grid-column"></div>
   <div></div>
   <div></div>
   <div></div>
</div>
<div></div>
<div></div>
<div></div>
<div></div>
</div>
)


}

export default Search;
