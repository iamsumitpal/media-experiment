import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import VideoContainer from "./VideoContainer";
import ImageContainer from "./ImageContainer"

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <VideoContainer />
          </Route>
          <Route path="/image-player">
            <ImageContainer />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;