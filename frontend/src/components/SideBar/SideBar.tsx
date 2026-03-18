import useStyles from "./SideBarStyles";
import HomeIcon from '@mui/icons-material/Home';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';

function SideBar() {

  const { classes } = useStyles();
  return (
    <div className={classes.SideBar}>
      <br />
      <div className={classes.sidebtn}>כל השירים<HomeIcon className={classes.icon} /></div>
      <div className={classes.sidebtn}>פלייליסטים<LibraryMusicIcon className={classes.icon} /></div>
      <div className={classes.sidebtn}>מועדפים<FavoriteOutlinedIcon className={classes.icon} /></div>
    </div>
  );
}
export default SideBar
