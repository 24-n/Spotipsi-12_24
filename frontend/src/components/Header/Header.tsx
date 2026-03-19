import useStyles from "./HeaderStyles";
import AudiotrackIcon from '@mui/icons-material/Audiotrack';

function Header() {
  const { classes } = useStyles();
  return (
    <div className={classes.Header}>
      <h3 className={classes.title}>SpotiPSI<AudiotrackIcon /></h3>
    </div>
  );
}
export default Header
