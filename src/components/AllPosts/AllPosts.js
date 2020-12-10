import React, {Component} from 'react';
import PostService from '../../services/PostService';
import Post from '../Post/Post';

import {Route, Switch, withRouter} from 'react-router-dom';
import FullPost from '../FullPost/FullPost';

class AllPosts extends Component {
    PostService = new PostService();

    state = {posts: []};

    async componentDidMount() {
        let posts = await this.PostService.posts();
        this.setState({posts});


    }

    render() {
        let {posts} = this.state;
        let {match: {url}} = this.props;

        console.log(url);

        return (
            <div>
                {
                    posts.map(value => <Post item={value} key={value.id}/>)
                }


                <hr/>
                <div className={'all-posts-router'}>
                    <Switch>
                        <Route path={`${url}/:id`} exact={true} render={(props) => {

                            return <FullPost {...props}/>;
                        }}/>

                    </Switch>

                </div>
                <hr/>
            </div>
        );
    }
}

export default withRouter(AllPosts);