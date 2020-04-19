import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Lagring from "./lagring";
import Webapp from "./webapp";
import Npm from "./npm";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/webapp" component={Webapp}></Route>
                <Route path="/npm" component={Npm}></Route>
                <Route path="/lagring" component={Lagring}></Route>
                <Route path="/" exact={ true }>
                  <ol>
                    <li><Link to="/webapp">Utvikling av moderne web applikasjoner</Link></li>
                    <li><Link to="/npm">NPM og tredjeparts biblioteker</Link></li>
                    <li><Link to="/lagring">Lagring i nettleser</Link></li>
                  </ol>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
