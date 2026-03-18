import useStyles from "./SideBarStyles";
import HomeIcon from '@mui/icons-material/Home';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import React from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  setcurrentpage: React.Dispatch<React.SetStateAction<string>>
}
const SideBar = ({setcurrentpage}:Props) => {
  const { classes } = useStyles();
  const navigate = useNavigate()
  const setCurrentPage = (newPage: string): void => {
    setcurrentpage(newPage);
    navigate(`/${newPage}`,{replace:true});
    
  
  }

  return (
    <div className={classes.SideBar}>
      <br />
      <div className={classes.sidebtn} id="allSongs" onClick={() => setCurrentPage("allSongs")} >כל השירים<HomeIcon className={classes.icon} /></div>
      <div className={classes.sidebtn} id="playlists" onClick={() => setCurrentPage("playlists")}>פלייליסטים<LibraryMusicIcon className={classes.icon} /></div>
      <div className={classes.sidebtn} id="favorite" onClick={() => setCurrentPage("favorite")}>מועדפים<FavoriteOutlinedIcon className={classes.icon} /></div>
    </div>
  );
}
export default SideBar
