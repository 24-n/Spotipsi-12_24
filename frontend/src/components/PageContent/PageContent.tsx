import useStyles from "./PageContentStyles";
import { type Song } from "../../types/Song";
import { type Playlist } from "../../types/Playlist";
import React from "react";
import AllSongsPage from "../AllSongsPage/AllSongsPage";
import FavoritesPage from "../FavoritesPage/FavoritePage";
import PlaylistsPage from "../PlaylistsPage/PlaylistsPage";

interface Props {
  songs: Song[],
  favorites: string[];
  playlists: Playlist[];
  currentPage: string;
  setFavorites: React.Dispatch<React.SetStateAction<string[]>>;
  setPlaylists: React.Dispatch<React.SetStateAction<Playlist[]>>;
}

function PageContent({ songs, favorites, playlists, currentPage, setFavorites, setPlaylists }: Props) {


  const { classes } = useStyles();
  return (
    <div className={classes.PageContent}>
      {currentPage == "allSongs" && <AllSongsPage songs={songs} favorites={favorites} playlists={playlists}
        currentPage={currentPage} setFavorites={setFavorites} setPlaylists={setPlaylists} />}
      {currentPage == "favorite" && <FavoritesPage songs={songs} favorites={favorites} playlists={playlists}
        currentPage={currentPage} setFavorites={setFavorites} setPlaylists={setPlaylists} />}
      {currentPage == "playlists" && <PlaylistsPage songs={songs} favorites={favorites} playlists={playlists}
        currentPage={currentPage} setFavorites={setFavorites} setPlaylists={setPlaylists} />}
    </div>
  );
}
export default PageContent
