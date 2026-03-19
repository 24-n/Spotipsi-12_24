import useStyles from "./SongsTableStyles";
import { type Song } from "../../types/Song";
import { type Playlist } from "../../types/Playlist";
import React, { useEffect, useState } from "react";
import { Button, List, ListItem, ListItemText, Menu } from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';



const FAVORITE_UPDATE_URL = "http://127.0.0.1:5001/api/favorites/"
const PLAYLISTS_BASE_URL = "http://127.0.0.1:5001/api/playlists/"


interface Props {
    songs: Song[],
    favorites: string[];
    playlists: Playlist[];
    currentPage: string;
    setFavorites: React.Dispatch<React.SetStateAction<string[]>>;
    setPlaylists: React.Dispatch<React.SetStateAction<Playlist[]>>;
    
}

function SongsTable({ songs, favorites, playlists, currentPage, setFavorites, setPlaylists }: Props) {
    
   

    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>,CurrentPlayList?:string|undefined) => {
        setAnchorEl(event.currentTarget);
        CurrentPlayList && setCurrentPlayList(CurrentPlayList);
        
    };

    const handleClose = () => {
    setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    

    const updateServer = (songID:string,operation?:"add"|"remove",playlistID?:string) =>
    {
        if (playlistID)
        {
          
            setPlaylists((prev) => prev.map(playlist => {
                if (playlist.id == playlistID)
                {
                    !playlist.songIds.includes(songID) && playlist.songIds.push(songID);
                    console.log(songID,playlist);
                }
                handleClose();
                return playlist; 
            }));
        }
        else
        {
            setFavorites((prev) => (operation == "add") ? [...prev, songID] : prev.filter((id) => id != songID));
        }

        fetch((playlistID) ? `${PLAYLISTS_BASE_URL}${playlistID}/add`: `${FAVORITE_UPDATE_URL}${operation}` , {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({ songId: songID })
        })
    }

    const createPlaylistsElements = (songID:string) => {
        return playlists.map(playlist => {
            return (
                <MenuItem key={playlist.id + songID} onClick={() => updateServer(songID,undefined,playlist.id)}>{playlist.name}</MenuItem>
            );
        })
    }
    const [currentPlayList,setCurrentPlayList] = useState<string|undefined>();

    const playlistsElements = createPlaylistsElements(currentPlayList!);

    const createSongsElements = () => {
        return songs.map(song => {

            return (
                <ListItem key={song.id} className={classes.ListItm}>
                   
                    <IconButton className={classes.IconBtn} onClick={() =>
                        updateServer(song.id, (!favorites.includes(song.id)) ? "add" : "remove",undefined)}>
                        {(!favorites.includes(song.id)) ? <FavoriteBorderIcon className={classes.whiteBorderIcon} /> : <FavoriteIcon  className={classes.PinkIcon} />}
                    </IconButton>
                    
                   

                    <IconButton className={classes.IconBtn} onClick={(e) => handleClick(e,song.id)} onMouseOver={(e) => handleClick(e,song.id)}>
                        <AddIcon className={classes.whiteBorderIcon}/>
                    </IconButton>
                    
                    
                    <Menu open={open}
                            MenuListProps={{ onMouseLeave: handleClose }}
                            key={song.id}
                            anchorEl={anchorEl}
                            
                            onClose={handleClose}
                           
                           
                            anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                            }}>
                           
                            {playlistsElements}
                    </Menu>

                   
                                        
                    <ListItemText primary={`${song.name}- ${song.artist}`} disableTypography = {true}  className={classes.ListItmTxt}/>
                    <PlayArrowIcon className={classes.PinkIcon} />
                </ListItem>)
        })
    }


    const { classes } = useStyles();
 
   


    return (
        
        <div className={classes.SongsTable}>
            {songs.length != 0 && <List>
                {createSongsElements()}
            </List>}
        </div>
    );
}
export default SongsTable
