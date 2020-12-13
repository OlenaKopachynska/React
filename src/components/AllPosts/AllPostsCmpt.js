import React, {Component} from 'react';
import PostService from "../../services/postService/PostService";
import Post from "../Post/Post";
import FullPost from "../FullPost/FullPost";

import {Route, Switch, withRouter} from "react-router-dom";

class AllPostsCmpt extends Component {

    PostService = new PostService()
    state = {posts: []}

    async componentDidMount() {
        let posts = await this.PostService.getAllPosts()
        this.setState({posts})
    }

    render() {

        let {posts} = this.state;
        let {match: {url}} = this.props;
        return (
            <div>
                {
                    posts.map(value => <Post item={value} key={value.id}/>)
                }

                <div>
                    <Switch>

                        <Route path={url + '/:id'} exact={true} render={(props) => {
                            let {match: {params: {id}}} = props;
                            return <FullPost postId={id} key={id}/>

                        }}/>>
                    </Switch>


                </div>

            </div>)

            ;
    }
}

export default withRouter(AllPostsCmpt);