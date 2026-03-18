import useStyles from "./MainStyles";
import Header from "../Header/Header";
import Player from "../Player/Player";
import SideBar from "../SideBar/SideBar";
import PageContent from "../PageContent/PageContent";
import { Grid } from "@mui/material";
import Box from '@mui/material/Box';


function Main() {
  
  const {classes} = useStyles();
  
  return(
      
      <div className={classes.Main}>
        <Box>
          <Grid container spacing={0}>
            <Grid size={12} height={"7vh"}>
              <Header />
            </Grid>

            <Grid size={10.3} height={"82vh"}>
            
              <PageContent />
            </Grid>

            <Grid size={1.7} height={"82vh"}>
              <SideBar />
            </Grid>

           

            <Grid size={12} height={"11vh"}>
              <Player />
            </Grid>


          </Grid>
        </Box>
      

     
       
      </div>
  );
}
export default Main
