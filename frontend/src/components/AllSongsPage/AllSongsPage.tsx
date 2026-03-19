import useStyles from "./AllSongsPageStyles";
import {type Song } from "../../types/Song";
import {type Playlist } from "../../types/Playlist";
import React from "react";
import SongsTable from "../SongsTable/SongsTable";

interface Props
{
  songs:Song[],
  favorites:string[];
  playlists:Playlist[];
  currentPage:string;
  setFavorites:React.Dispatch<React.SetStateAction<string[]>>;
  setPlaylists:React.Dispatch<React.SetStateAction<Playlist[]>>;
}

function AllSongsPage({songs,favorites,playlists,currentPage,setFavorites,setPlaylists}:Props) {
    const {classes} = useStyles();
    return (
        <div className={classes.AllSongsPage}>
            <h1 className={classes.H1}>כל השירים</h1>
            <SongsTable songs={songs} favorites={favorites} playlists={playlists}
                currentPage={currentPage} setFavorites={setFavorites} setPlaylists={setPlaylists} />
        </div>
    )
}
export default AllSongsPage
