import React, {Component} from 'react';
import PostService from "../../services/postService/PostService";

class FullPost extends Component {

    state = {post: null}
    PostService = new PostService()


    async componentDidMount() {
        const {postId} = this.props;
        const post = await this.PostService.GetPost(postId);
        this.setState({post})
    }

    render() {


        const {post} = this.state;
        console.log({post})
        return (
            <div>
                {post && <div>Post id: {post.id}---Post title: {post.title}</div>}
            </div>
        );
    }
}

export default FullPost;