import React, {Component} from 'react';
import AllPostsCmpt from "./components/AllPosts/AllPostsCmpt";


import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <Router>
            <div>

              <div>
                <Link to={"/posts"}>posts</Link>
              </div>
              <div>

                <Switch>
                  <Route path={'/posts'} render={(props)=> {return <AllPostsCmpt/>}}/>
                </Switch>

              </div>

            </div>
            </Router>
        );
    }
}

export default App;