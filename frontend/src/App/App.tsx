import useStyles from "./AppStyles";
import Main from "../components/Main/Main";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"

function App() {
  
  const {classes} = useStyles();
  return(
      <div className={classes.App}>
        <Router>
          <Routes>
            <Route path="/" element={<Main />} />

          </Routes>
        </Router>

      </div>
  );
}
export default App
