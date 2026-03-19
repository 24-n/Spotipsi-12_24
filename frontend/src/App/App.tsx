import useStyles from "./AppStyles";
import Main from "../components/Main/Main";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import {type Song } from ".././types/Song";
import {type Playlist } from ".././types/Playlist";
import { useState,useEffect} from "react";
const SONGS_URL = "http://127.0.0.1:5001/api/songs"
const FAVORITE_URL = "http://127.0.0.1:5001/api/favorites"
const PLAYLISTS_URL = "http://127.0.0.1:5001/api/playlists"


function App() {
  const [isLoading, setIsLoading] = useState(false);
  const fetchFromServer = async(url:string,setter: React.Dispatch<React.SetStateAction<Song[]>> | React.Dispatch<React.SetStateAction<Playlist[]>> | React.Dispatch<React.SetStateAction<string[]>>) =>
  {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setter(data);
   
    } catch (error) {
      console.error(error);
      return;
    }
    finally {
      setIsLoading(false);
    }
  }

  const [currentPage,setCurrentPage] = useState<string>("allSongs");
  const [songs,setSongs] = useState<Song[]>([]);
  const [favorites,setFavorites] = useState<string[]>([]);
  const [playlists,setPlaylists] = useState<Playlist[]>([]);
  
  useEffect(() =>
  {
    fetchFromServer(SONGS_URL,setSongs);
    fetchFromServer(FAVORITE_URL,setFavorites!);
    fetchFromServer(PLAYLISTS_URL,setPlaylists);
  },[]);

  const {classes} = useStyles();
  return(
        <div className={classes.App}>
          <Router>
            <Routes>
              <Route path="/:currentpage?" element={<Main songs={songs} favorites={favorites!} playlists={playlists} currentPage={currentPage} setFavorites={setFavorites} setPlaylists={setPlaylists} setCurrentPage={setCurrentPage} isLoading={isLoading}/>} />     
            </Routes>
          </Router>
        </div>
  );
}
export default App
