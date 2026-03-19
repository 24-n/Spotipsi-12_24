import useStyles from "../Player/PlayerStyles";

function Player() {
  
  const {classes} = useStyles();
  return(
      <div className={classes.Player}></div>
  );
}
export default Player
