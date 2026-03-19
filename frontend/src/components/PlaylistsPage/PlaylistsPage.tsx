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
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

const ADD_PLAYLIST_URL = "http://127.0.0.1:5001/api/playlists"




interface Props {
    songs: Song[],
    favorites: string[];
    playlists: Playlist[];
    currentPage: string;
    setCurrentPage: React.Dispatch<React.SetStateAction<string>>
    setFavorites: React.Dispatch<React.SetStateAction<string[]>>;
    setPlaylists: React.Dispatch<React.SetStateAction<Playlist[]>>;
}

const PlaylistsPage = ({ songs, favorites, playlists, currentPage, setCurrentPage, setFavorites, setPlaylists }: Props) => {



    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const formJson = Object.fromEntries((formData as any).entries());
        const email = formJson.email;
        console.log(email);
        addPlaylist(email);
        handleClose();
    };








    const createPlaylistsElements = () => {
        return playlists.map(playlist => {
            return (
                <ListItem key={playlist.id} sx={{ borderBottom: '1px solid grey', gap: "1%" }} className={classes.listItem} onClick={() => setPageByPlaylist(playlist.name)}>
                    <p className={classes.h}>{playlist.name}</p>
                    <p className={classes.p}>{playlist.songIds.length} שירים</p>
                </ListItem>)
        })
    }


    const setPageByPlaylist = (playlistName: string): void => {
        setCurrentPage(playlistName);
        navigate(`/${playlistName}`);

    }
    const { classes } = useStyles();
    const [PlaylistsElements, setPlaylistsElements] = useState(createPlaylistsElements());
    const navigate = useNavigate();



    const addPlaylist = (playlistName: string) => {

        fetch(ADD_PLAYLIST_URL, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({ name: playlistName })
        })
            .then(res => res.json()).then(data => setPlaylists(prev => { console.log(prev); return [...prev, data] }));

    }

    useEffect(() => setPlaylistsElements(createPlaylistsElements()), [playlists]);


    return (
        <div className={classes.playlists}>
            <div className={classes.playlistsTitle}>

                <h1 className={classes.H1}>הפלייליסטים שלי</h1>
                <Button className={classes.addPlaylisBtn} onClick={handleClickOpen}>
                    <AddIcon /> צור פלייליסט
                </Button>

                <Dialog open={open} onClose={handleClose}>
                    <div className={classes.dialog}>
                        <DialogTitle>יצירת פלייליסט חדש</DialogTitle>
                        <DialogContent>

                            <form onSubmit={handleSubmit} id="subscription-form">
                                <TextField className={classes.createAndName}
                                    id="name"
                                    name="playlist"
                                    label="שם הפלייליסט"
                                    variant="standard"
                                />
                            </form>
                        </DialogContent>
                        <DialogActions>
                            <Button type="submit" form="subscription-form" className={classes.createAndName}>
                                צור
                            </Button>
                            <Button onClick={handleClose} className={classes.cancellation}>ביטול</Button>

                        </DialogActions>
                    </div>
                </Dialog>


            </div>
            {PlaylistsElements.length != 0 && <List sx={{ width: '100%', height: '100%' }}>
                {PlaylistsElements}

            </List>}
        </div>
    );
}
export default PlaylistsPage
