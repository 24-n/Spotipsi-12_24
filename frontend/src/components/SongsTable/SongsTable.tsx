import useStyles from "./SongsTableStyles";
import { type Song } from "../../types/Song";
import { type Playlist } from "../../types/Playlist";
import React, { useEffect, useState } from "react";
import { List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';
import {Popover,Typography} from "@mui/material";

const FAVORITE_UPDATE_URL = "http://127.0.0.1:5001/api/favorites/"


interface Props {
    songs: Song[],
    favorites: string[];
    playlists: Playlist[];
    currentPage: string;
    setFavorites: React.Dispatch<React.SetStateAction<string[]>>;
    setPlaylists: React.Dispatch<React.SetStateAction<Playlist[]>>;
}

function SongsTable({ songs, favorites, playlists, currentPage, setFavorites, setPlaylists }: Props) {


    const updateFavorites = (songID:string,operation:string) =>
    {
        setFavorites((prev) => (operation == "add") ? [...prev, songID] : prev.filter((id) => id != songID));
        fetch(`${FAVORITE_UPDATE_URL}${operation}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({ songId: songID })
        })

    }

    const createSongsElements = () => {
        return songs.map(song => {
            return (
                <ListItem key={song.id} className={classes.ListItm}>

                    <IconButton className={classes.IconBtn} onClick={() =>
                        updateFavorites(song.id, (!favorites.includes(song.id)) ? "add" : "remove")}>
                        {(!favorites.includes(song.id)) ? <FavoriteBorderIcon className={classes.whiteBorderIcon} /> : <FavoriteIcon  className={classes.PinkIcon} />}
                    </IconButton>
                    
                   

                    <IconButton className={classes.IconBtn}>
                        <AddIcon className={classes.whiteBorderIcon} />
                    </IconButton>

                    <ListItemText primary={`${song.name}- ${song.artist}`} disableTypography = {true}  className={classes.ListItmTxt}/>
                    <PlayArrowIcon className={classes.PinkIcon} />
                </ListItem>)
        })
    }


    const { classes } = useStyles();
    const [songElements, setSongElements] = useState(createSongsElements());

    useEffect(() => {
        setSongElements(createSongsElements());
    }, [favorites]);


    return (
        <div className={classes.SongsTable}>
            {songs.length != 0 && <List>
                {songElements}
            </List>}
        </div>
    );
}
export default SongsTable
