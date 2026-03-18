import useStyles from "./SongsTableStyles";
import {type Song } from "../../types/Song";
import {type Playlist } from "../../types/Playlist";
import React, { useEffect, useState } from "react";
import { List,ListItem,ListItemText,ListItemIcon } from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';


interface Props
{
  songs:Song[],
  favorites:string[];
  playlists:Playlist[];
  currentPage:string;
  setFavorites:React.Dispatch<React.SetStateAction<string[]>>;
  setPlaylists:React.Dispatch<React.SetStateAction<Playlist[]>>;
}

function SongsTable({songs,favorites,playlists,currentPage,setFavorites,setPlaylists}:Props)
{

    const addSongToFav = (songID:string) =>
    {
        setFavorites((prev) => [...prev,songID]);
        const body = {"songId":songID};

        
        fetch('http://192.168.7.4:5001/api/favorites/add',{
             headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({songId:songID})
        })
        
    }

    const removeSongFromFav = async(songID:string) =>
    {
        setFavorites((prev) =>  prev.filter((id) => id != songID));

        fetch('http://192.168.7.4:5001/api/favorites/remove',{
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({songId:songID})
        })

    }

    

    const createSongsElements = () =>
    {
        return songs.map(song => {return(
        <ListItem key={song.id} sx={{borderBottom:'1px solid grey',height:"5vh",gap:"1%"}}>  
                <IconButton onClick={() => (favorites.indexOf(song.id) == -1) ? 
                    addSongToFav(song.id) : removeSongFromFav(song.id)}>

                {(favorites.indexOf(song.id) == -1) ? <FavoriteBorderIcon sx={{color:"white"}}/> : <FavoriteIcon sx={{color:"#B764DA"}}/>}
                </IconButton>
                <AddIcon />
                <ListItemText primary={`${song.name}- ${song.artist}`}/>
                <PlayArrowIcon sx={{color:"#B764DA"}}/>
        </ListItem>)})
    }


    const {classes} = useStyles();
    const [songElements,setSongElements] = useState(createSongsElements());
   
    useEffect(() => {
        setSongElements(createSongsElements());
        

    },[favorites]);
    

    return(
        <div className={classes.SongsTable}>
            {songs.length != 0 && <List sx={{ width: '100%',height:'100%'}}>
                {songElements}
                
            </List>}
        </div>
    );
}
export default SongsTable
