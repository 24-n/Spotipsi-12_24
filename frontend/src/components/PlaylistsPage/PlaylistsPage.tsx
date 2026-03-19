import useStyles from "./PlaylistsPageStyles";
import { type Song } from "../../types/Song";
import { type Playlist } from "../../types/Playlist";
import React, { useEffect, useState } from "react";
import { List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';

import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";




interface Props {
    songs: Song[],
    favorites: string[];
    playlists: Playlist[];
    currentPage: string;
    setFavorites: React.Dispatch<React.SetStateAction<string[]>>;
    setPlaylists: React.Dispatch<React.SetStateAction<Playlist[]>>;
}

const PlaylistsPage = ({ songs, favorites, playlists, currentPage, setFavorites, setPlaylists }: Props) => {


    const createPlaylistsElements = () => {
        return playlists.map(playlist => {
            return (
                <ListItem key={playlist.id} sx={{ borderBottom: '1px solid grey', gap: "1%" }} className={classes.listItem} onClick={() => setPageByPlaylist(playlist.id)}>
                    <p className={classes.h}>{playlist.name}</p>
                    <p className={classes.p}>{playlist.songIds.length} שירים</p>
                </ListItem>)
        })
    }


    const setPageByPlaylist = (PlaylistId: string): void => {
        navigate(`/playlists/${PlaylistId}`);

    }
    const { classes } = useStyles();
    const [PlaylistsElements, setPlaylistsElements] = useState(createPlaylistsElements());
    const navigate = useNavigate();

    useEffect(() => {
        setPlaylistsElements(createPlaylistsElements());


    }, [favorites]);


    return (
        <div className={classes.playlists}>
            <div className={classes.playlistsTitle}>

                <h1 className={classes.H1}>הפלייליסטים שלי</h1>
                <Button className={classes.addPlaylisBtn}>
                    <AddIcon /> צור פלייליסט
                </Button>

            </div>
            {PlaylistsElements.length != 0 && <List sx={{ width: '100%', height: '100%' }}>
                {PlaylistsElements}

            </List>}
        </div>
    );
}
export default PlaylistsPage
