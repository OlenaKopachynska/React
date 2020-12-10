import React, {Component} from 'react';
import Post from '../Post/Post';
import {PostService} from "../../services/PostServices";

class AllPosts extends Component {

    PostService = new PostService();

    state = {posts: [], selected: null};

    selectPost = (id) => this.PostService.GetPostById(id).then(value=> this.setState({selected: value}))

    render() {
        let {posts, selected} = this.state;
        return (

            <div>
                {
                    posts.map(value => <Post item={value} key={value.id} selectPost={this.selectPost} isShowButton={true}/>)
                }
                {
                    selected && <Post item={selected} isShowButton={false}/>
                }
            </div>
        );
    };

    componentDidMount() {
        this.PostService.GetAllPosts().then(value=> this.setState({posts: value}))

    }
}

export default AllPosts;