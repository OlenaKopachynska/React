import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import AllPosts from './components/AllPosts/AllPosts';
import AllComments from './components/AllComments/AllComments';


class App extends Component {


    render() {
        return (
            <Router>
                <div>

                    <div>
                        <Link to={'/posts'}>posts</Link>
                    </div>
                    <div>
                        <Link to={'/comments'}>comments</Link>
                    </div>

                    <div className={'app-route'}>

                        <Switch>
                            <Route path={'/posts'} render={(props) => {
                                console.log(props);
                                return <AllPosts/>;
                            }}/>

                            <Route path={'/comments'} render={(props) => {
                                console.log(props);
                                return <AllComments/>;
                            }}/>
                        </Switch>

                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
