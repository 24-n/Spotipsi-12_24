import useStyles from "./FavoritePageStyles";
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

function FavoritesPage({songs,favorites,playlists,currentPage,setFavorites,setPlaylists}:Props) {
    const {classes} = useStyles();
    const filteredSongs = songs.filter(song => favorites.indexOf(song.id) != -1);
    return (
        <div className={classes.FavoritesPage}>
            <h1 className={classes.H1}>המועדפים שלי</h1>
            <SongsTable songs={filteredSongs} favorites={favorites} playlists={playlists}
                currentPage={currentPage} setFavorites={setFavorites} setPlaylists={setPlaylists} />
        </div>
    
    )
}
export default FavoritesPage
