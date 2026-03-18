import useStyles from "./MainStyles";
import Header from "../Header/Header";
import Player from "../Player/Player";
import SideBar from "../SideBar/SideBar";
import PageContent from "../PageContent/PageContent";
import { Grid } from "@mui/material";
import Box from '@mui/material/Box';
import {type Song } from "../../types/Song";
import {type Playlist } from "../../types/Playlist";
import React from "react";
import {Route,useParams} from 'react-router-dom'

interface Props
{
  songs:Song[],
  favorites:string[];
  playlists:Playlist[];
  currentPage:string;
  setCurrentPage:React.Dispatch<React.SetStateAction<string>>;
  setFavorites:React.Dispatch<React.SetStateAction<string[]>>;
  setPlaylists:React.Dispatch<React.SetStateAction<Playlist[]>>;
  isLoading:boolean;
}
function Main({songs,favorites,playlists,currentPage,setFavorites,setPlaylists,isLoading}:Props) {
  let {currentPagestr} = useParams();
  
  if (!currentPagestr)
  {
    currentPagestr = "h";
  }
 
  const {classes} = useStyles();
  
  return(
      
      <div className={classes.Main}>
        <Box>
          <Grid container spacing={0}>
            <Grid size={12} height={"7vh"}>
              <Header />
            </Grid>

            <Grid size={10.3} height={"82vh"}>
            
              {!isLoading && <PageContent songs={songs} favorites={favorites} playlists={playlists}
              currentPage={currentPagestr} setFavorites={setFavorites} setPlaylists={setPlaylists}/>}
            </Grid>

            <Grid size={1.7} height={"82vh"}>
              <SideBar />
            </Grid>

           

            <Grid size={12} height={"11vh"}>
              <Player />
            </Grid>


          </Grid>
        </Box>
      

     
       
      </div>
  );
}
export default Main
