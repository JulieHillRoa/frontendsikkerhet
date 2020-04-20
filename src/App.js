import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Webapp from "./webapp";
import Npm from "./npm";
import Snapping from "./eksternt/Snapping";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/webapp" exact={true} component={Webapp}></Route>
                <Route path="/npm" component={Npm}></Route>
                <Route path="/webapp/eksternt" component={Snapping}/>
                <Route path="/">
                  <ol>
                    <li><Link to="/webapp">Utvikling av moderne web applikasjoner</Link></li>
                    <li><Link to="/npm">NPM og tredjeparts biblioteker</Link></li>
                  </ol>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
