import useStyles from "./AppStyles";
import Main from "../components/Main/Main";
import {BrowserRouter as Router,Route,Routes, data} from "react-router-dom"
import {type Song } from ".././types/Song";
import {type Playlist } from ".././types/Playlist";
import { useState,useEffect, type FC } from "react";

 
  


function App() {

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();


  const fetchFromServer = async(url:string,setter: React.Dispatch<React.SetStateAction<Song[]>> | React.Dispatch<React.SetStateAction<Playlist[]>> | React.Dispatch<React.SetStateAction<string[]>>) =>
  {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setter(data);
   
    } catch (error) {

      setError("Something went wrong");
      console.error(error);
      return;
    }
    finally {
      setIsLoading(false);
    }
  }

  const [currentPage,setCurrentPage] = useState<string>("h");
  const [songs,setSongs] = useState<Song[]>([]);
  const [favorites,setFavorites] = useState<string[]>([]);
  const [playlists,setPlaylists] = useState<Playlist[]>([]);
  
  useEffect(() =>
  {
    fetchFromServer("http://192.168.7.4:5001/api/songs",setSongs);
    fetchFromServer("http://192.168.7.4:5001/api/favorites",setFavorites!);
    fetchFromServer("http://192.168.7.4:5001/api/playlists",setPlaylists);
  },[]);

  const {classes} = useStyles();
  return(
      
        <div className={classes.App}>
          <Router>
            <Routes>
              <Route path="/" element={<Main songs={songs} favorites={favorites!} playlists={playlists} currentPage={currentPage} setFavorites={setFavorites} setPlaylists={setPlaylists} setCurrentPage={setCurrentPage} isLoading={isLoading}/>} />
              <Route path="/pages/:currentpage" element={<Main songs={songs} favorites={favorites!} playlists={playlists} currentPage={currentPage} setFavorites={setFavorites} setPlaylists={setPlaylists} setCurrentPage={setCurrentPage} isLoading={isLoading}/>} />
            </Routes>
          </Router>
        </div>
     
  );
}
export default App
