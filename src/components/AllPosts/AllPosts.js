import React, {Component} from 'react';
import Post from '../post/Post';

class AllPosts extends Component {

    state = {posts: [], selected: null};


    selectPost = (id) => {
        let {posts} = this.state;
        let find = posts.find(value => value.id === id);
        this.setState({selected: find});
    }

    render() {
        let {posts, selected} = this.state;

        return (


            <div>

                {
                    posts.map(post => <Post item={post} key={post.id} selectPost={this.selectPost}/>)
                }
                {
                    selected && <Post item={selected}/>
                }
                
            </div>
        );
    }

    componentDidMount() {

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(posts => this.setState({posts}))
    }
}

export default AllPosts;