import useStyles from "./PlayListPageStyles";
import { type Song } from "../../types/Song";
import { type Playlist } from "../../types/Playlist";
import React from "react";
import SongsTable from "../SongsTable/SongsTable";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';
import {useNavigate } from "react-router-dom";

interface Props {
    songs: Song[],
    favorites: string[];
    playlists: Playlist[];
    currentPage: string;
    setCurrentPage: React.Dispatch<React.SetStateAction<string>>
    setFavorites: React.Dispatch<React.SetStateAction<string[]>>;
    setPlaylists: React.Dispatch<React.SetStateAction<Playlist[]>>;
}

function PlayListPage({ songs, favorites, playlists, currentPage, setCurrentPage, setFavorites, setPlaylists }: Props) {
    const navigate = useNavigate();
    const { classes } = useStyles();
    const filteredSongs = songs.filter(song => playlists.filter(playlist => playlist.name == currentPage)[0].songIds.includes(song.id))
    return (
        <div className={classes.Playlist}>
            <div className={classes.playlistsTitle}>

                <IconButton className={classes.ArrowBtn} onClick={() => { setCurrentPage("playlists"); navigate("/playlists") }}>
                    <ArrowBackIcon />
                </IconButton>
                <h1 className={classes.H1}>{currentPage}</h1>
            </div>
            <SongsTable songs={filteredSongs} favorites={favorites} playlists={playlists}
                currentPage={currentPage} setFavorites={setFavorites} setPlaylists={setPlaylists} />
        </div>
    )
}
export default PlayListPage
