import useStyles from "./SideBarStyles";

function SideBar() {
  
  const {classes} = useStyles();
  return(
      <div className={classes.SideBar}>sidebar</div>
  );
}
export default SideBar
